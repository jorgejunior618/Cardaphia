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
    #o id passado é o valor do id do restaurante

    orderFromRestaurant = [] #lista para salvar somente os pedidos da quele resturante
    allOrders = Order.objects.all() #lista com todos os pedidos

    for i in range(len(allOrders)): # loop que passa por todos os pedidos
        
        if (allOrders[i].restaurant.restaurantId == id and #se o id do restaurante dentro do pedido for igual ao id do restaurante
           allOrders[i].situation != 'made'): #e o pedido não estiver sido prerparado
            
            orderFromRestaurant.append(allOrders[i]) #salva o pedido 

    serializer = serial.OrderSerializer(orderFromRestaurant, many=True) #serializa os pedidos dos restaurantes
    orders_list = serializer.data #salva os valores serializados em uma variavel
    a = 0 #variavel para escolher qual vai ser o pedido a ser analizado
    b = 0 #variavel para comparar se o pedido 'b' é o mesmo que o 'a'

    while a < len(orders_list): #enquanto 'a' não for maior que os pedidos do restaurante

        orders_list[a].pop('restaurant') #tira o id do restaurante do serializer
        orderNumber = orders_list[a]['orderNumber'] #pega o indentificador do pedido
        orders_list[a]['dish'] = [orders_list[a]['dish']] #transforma o 'dish' em uma lista de 'dish'
        b = a+1 #salva o 'b' como sendo um valor que o a para evitar a comparação de se 'a' == 'a'

        while b < len(orders_list): #enquanto 'b' não for maior que os pedidos do restaurante

            if orders_list[b]['orderNumber'] == orderNumber: #se o indentificador do pedido de 'b' for o mesmo do 'a'

                orders_list[a]['dish'].append(orders_list.pop(b)['dish']) #coloca o prato para dentro da lista de pratos do 'order' 'a'
                                                                          #e retira o 'order' 'b' da lista de pedidos
                b -= 1 #como eu tirei o valor atual b , tenho que fazer isso para não pular uma verificação

            b += 1 #aumenta o indice de 'b'
        orders_list[a]['orderId'] = a+1 # modifica o id do pedido para ficar mais parecido com o id da nova lista
        a += 1 #aumenta o indice 'a'
    
    JSONObj = JsonResponse({'orders': orders_list}, safe=False, status=status.HTTP_200_OK) #transforma o serializer em json
    return JSONObj #retorna em json da lista de pedidos do restaurante informado
