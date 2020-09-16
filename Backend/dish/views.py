from django.shortcuts import render, HttpResponse
from django.core.exceptions import ObjectDoesNotExist
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework import generics, status
from rest_framework.response import Response

import json

import sys
sys.path.insert(0, '..')

from .models import Dish
#from menu.models import Menu
#from restaurant.models import Restaurant
import serial

@api_view(['GET'])
def buscarDishesRestaurante(request, id):
    aux_list = []
    pratos_var = Dish.objects.all()
    for i in range(len(pratos_var)):
        if pratos_var[i].menu.restaurant.restaurantId == id:
            aux_list.append(pratos_var[i])

    serializer = serial.dishSerializer(aux_list, many=True)
    JSONObj = JsonResponse({'dishes': serializer.data}, safe=False, status=status.HTTP_200_OK)
    return JSONObj

@api_view(['GET'])
def getDish(request, id, dishId):
    try:
        dish = Dish.objects.get(pk=dishId)
        if dish.restaurant.restaurantId == id:
            serializer = serial.dishSerializer(instance=dish)
            return Response(data=serializer.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    except ObjectDoesNotExist:
        return Response(status=status.HTTP_400_BAD_REQUEST)
