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
from serial import restaurantSerializer

## CHAVE ```@api_view(["METHOD"])``` PARA DEFINIR A REQUISIÇÃO
# QUE SERÁ FEITA AO BANCO DE DADOS
@api_view(['GET'])
def restaurante(request):
    restaurante_var = Restaurant.objects.all()
    serializer = restaurantSerializer(restaurante_var, many=True)
    JSONObj = JsonResponse({'tasks': serializer.data}, safe=False, status=status.HTTP_200_OK)
    return JSONObj