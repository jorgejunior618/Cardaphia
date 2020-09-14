from django.db import models

from restaurant.models import Restaurant
from dish.models import Dish

class Order (models.Model):
    
    orderId = models.AutoField(primary_key=True)

    orderTable = models.CharField(max_length=6)
    orderTime = models.DateTimeField(auto_now_add=True)

    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    dishes = models.ManyToManyField(Dish, related_name='dishes')

    def __str__ (self):
        return f'Pedido {self.orderId}'
