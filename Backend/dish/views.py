from django.shortcuts import render, HttpResponse

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

from .models import Dish
from menu.models import Menu
from restaurant.models import Restaurant
import serial

@api_view(['GET'])
def buscarDishesRestaurante(request, id):
    aux_list = []
    pratos_var = Dish.objects.all()
    for i in range(len(pratos_var)):
        if pratos_var[i].menu.restaurant.pk == id:
            aux_list.append(pratos_var[i])

    serializer = serial.dishSerializer(aux_list, many=True)
    JSONObj = JsonResponse({'dishes': serializer.data}, safe=False, status=status.HTTP_200_OK)
    return JSONObj
    
