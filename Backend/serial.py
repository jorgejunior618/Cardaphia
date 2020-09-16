from rest_framework import serializers

from restaurant import models as restaurant_models
from dish import models as dish_models
from menu import models as menu_models
from order import models as order_models

## SERIALIZERS NECESSÁRIOS PARA A REQUISIÇÃO DA API AO BANCO DE DADOS,
# E PREPARAR A RESPOSTA PARA RETORNAR EM JSON

class restaurantSerializer(serializers.ModelSerializer):
  class Meta:
    model = restaurant_models.Restaurant
    fields = '__all__'


class dishSerializer(serializers.ModelSerializer):
  class Meta:
    model = dish_models.Dish
    fields = '__all__'

class menuSerializer(serializers.ModelSerializer):
  class Meta:
    model = menu_models.Menu
    fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
  dish = serializers.StringRelatedField()

  class Meta:
    model = order_models.Order
    fields = '__all__'