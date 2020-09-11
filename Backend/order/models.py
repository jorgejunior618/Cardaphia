from django.db import models
from table.models import Table
from dish.models import Dish

class Order (models.Model):
    
    #codigo será o id que o próprio django gera.
    orderTime = models.DateTimeField(auto_now_add=True)

    table = models.ForeignKey(Table, on_delete=models.CASCADE)
    dishes = models.ManyToManyField(Dish, related_name='dishes')

    def __str__ (self):
        return f'Pedido {self.id}'
