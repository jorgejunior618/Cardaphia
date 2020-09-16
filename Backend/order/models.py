from django.db import models

from restaurant.models import Restaurant
from dish.models import Dish

class Order (models.Model):
    
    SITUATION = (
        ('waiting', 'Esperando'),
        ('making', 'Preparando'),
        ('made', 'Pronto')
    )

    orderId = models.AutoField(primary_key=True)

    orderTable = models.CharField(max_length=6)
    orderNumber = models.CharField(max_length=6)
    orderTime = models.DateTimeField(auto_now_add=True)

    situation = models.CharField(
        max_length=10,
        choices=SITUATION
    )

    note = models.TextField(blank=True)

    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    dish = models.ForeignKey(Dish, on_delete=None)

    def __str__ (self):
        return f'Pedido {self.orderId}'