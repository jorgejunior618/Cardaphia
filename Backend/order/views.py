import json

from django.shortcuts import render
from django.http import JsonResponse
from django.core.exceptions import ObjectDoesNotExist

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Order
from restaurant.models import Restaurant
from dish.models import Dish

from serial import OrderSerializer

@api_view(['POST'])
def finishOrder (request, id):
    body = request.data
    try:
        restaurant = Restaurant.objects.get(pk=body["restaurantId"])

        for dishId in body["dishes"]:
            order = Order(
                restaurant=restaurant,
                orderTable=body["orderTable"],
                orderNumber=body["orderNumber"],
                situation=body["situation"],
                dish=Dish.objects.get(pk=dishId)
            )
            order.save()
        return Response(status=status.HTTP_201_CREATED)
    except ObjectDoesNotExist:
        return Response(status=status.HTTP_400_BAD_REQUEST)