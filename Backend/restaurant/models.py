from django.db import models
from menu.models import Menu

class Restaurant(models.Model):
    
    name = models.CharField(max_length=255)
    cnpj = models.CharField(max_length=11)
    #codigo = models.CharField(max_length=8)

    menu = models.OneToOneField(
        Menu,
        on_delete=models.CASCADE,
        primary_key=True
    )

    def __str__ (self):
        return self.name