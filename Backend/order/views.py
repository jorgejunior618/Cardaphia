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
        order = Order(
            restaurant=restaurant,
            orderTable=body["orderTable"]
        )
        dishes = []
        for dishId in body["dishes"]:
            dishes.append(Dish.objects.get(pk=dishId))
        order.save()
        order.dishes.set(dishes)
        serializer = OrderSerializer(order)
        return Response(data=serializer.data, status=status.HTTP_201_CREATED)
    except ObjectDoesNotExist:
        return Response(status=status.HTTP_400_BAD_REQUEST)
