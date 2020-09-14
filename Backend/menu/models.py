from django.db import models

from restaurant.models import Restaurant

class Menu (models.Model):
    
    menuId = models.AutoField(primary_key=True)

    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

    def __str__ (self):
        return f'Menu {self.menuId}'