from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
## CONSTANTE STATUS CONTEM AS RESPOSTAS HTTP DEVIDAS PARA RETORNO DOS DADOS
from rest_framework import generics, status
from django.core.exceptions import ObjectDoesNotExist
## FUNÇÃO QUE RETORNA OS DADOS EM JSON
from django.http import JsonResponse
import json

import sys
sys.path.insert(0, '..')

from .models import Restaurant
from order.models import Order
from table.models import Table
import serial

@api_view(['GET'])
def buscarPedidosEstabelecimento(request, id):
    aux_list = []
    pedidos_var = Order.objects.all()
    for i in range(len(pedidos_var)):
        if pedidos_var[i].table.restaurant.pk == id:
            aux_list.append(pedidos_var[i])

    serializer = serial.orderSerializer(aux_list, many=True)
    JSONObj = JsonResponse({'orders': serializer.data}, safe=False, status=status.HTTP_200_OK)
    return JSONObj




    