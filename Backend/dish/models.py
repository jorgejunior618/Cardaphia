from django.db import models

from restaurant.models import Restaurant
from menu.models import Menu

class Dish (models.Model):
    
    CATEGORIES = (
        ('massa', 'Massa'),
        ('pizza', 'Pizza'),
        ('seafood', 'Fruto do Mar'),
        ('chinese', 'Chinês'),
        ('soda', 'Refrigerante'),
        ('wine', 'Vinho'),
        ('water', 'Água'),
    )

    dishId = models.AutoField(primary_key=True)

    name = models.CharField(max_length=255)

    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    menu = models.ForeignKey(Menu, on_delete=None)

    nutritionalValue = models.TextField(blank=True)
    ingredients = models.TextField(blank=True)

    category = models.CharField(
        max_length=10,
        choices=CATEGORIES
    )
    price = models.DecimalField(decimal_places=2, max_digits=5)

    def __str__ (self):
        return self.name