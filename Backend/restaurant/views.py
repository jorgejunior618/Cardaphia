from django.shortcuts import render
from django.core.exceptions import ObjectDoesNotExist
from django.http import JsonResponse


from rest_framework.decorators import api_view
from rest_framework import generics, status

import json
import sys

sys.path.insert(0, '..')

from .models import Restaurant
from order.models import Order
import serial

@api_view(['GET'])
def buscarPedidosEstabelecimento(request, id):
    #busca todos os pedidos em aberto/sendo preparados do restaurante

    orderFromRestaurant = [] #lista para salvar somente os pedidos da quele resturante
    allOrders = Order.objects.all() #lista com todos os pedidos

    for i in range(len(allOrders)): # loop que passa por todos os pedidos
        
        if (allOrders[i].restaurant.restaurantId == id and #se o id do restaurante dentro do pedido for igual ao id do restaurante
           allOrders[i].situation != 'made'): #e o pedido não estiver sido prerparado
            
            orderFromRestaurant.append(allOrders[i]) #salva o pedido 

    serializer = serial.OrderSerializer(orderFromRestaurant, many=True)
    aux = serializer.data
    a = 0
    b = 0
    while a < len(aux):
        aux[a].pop('restaurant')
        orderNumber = aux[a]['orderNumber']
        aux[a]['dish'] = [aux[a]['dish']]
        b = a+1
        while b < len(aux):
            if aux[b]['orderNumber'] == orderNumber:
                aux[a]['dish'].append(aux.pop(b)['dish'])
                b -= 1
            b += 1
        aux[a]['orderId'] = a+1
        a += 1
    

    JSONObj = JsonResponse({'orders': aux}, safe=False, status=status.HTTP_200_OK)
    return JSONObj
