from django.db import models
from menu.models import Menu

class Dish (models.Model):
    
    CATEGORIES = (
        ('massa', 'Massa'),
        ('pizza', 'Pizza'),
        ('seafood', 'Fruto do Mar'),
        ('chinese', 'Chinês'),
        ('soda', 'Refrigerante'),
        ('wine', 'Vinho'),
    )

    menu = models.ForeignKey(Menu, on_delete=models.CASCADE)


    #codigo é o id do atribuido pelo django.
    name = models.CharField(max_length=255)
    #image = models.ImageField()
    category = models.CharField(
        max_length=10,
        choices=CATEGORIES
    )
    price = models.DecimalField(decimal_places=2, max_digits=5)

    def __str__ (self):
        return self.name
