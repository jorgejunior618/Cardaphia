from django.db import models
from restaurant.models import Restaurant
from client.models import Client
#from django.utils.crypto import get_random_string

class Table (models.Model):
    
    codigo = models.CharField(max_length=8)

    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    client = models.OneToOneField(
        Client,
        on_delete=models.CASCADE,
        primary_key=True
        )

    def __str__ (self):
        return f'Mesa {self.id}'

