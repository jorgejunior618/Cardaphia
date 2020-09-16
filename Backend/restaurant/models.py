from django.db import models

class Restaurant(models.Model):
    
    restaurantId = models.AutoField(primary_key=True)

    name = models.CharField(max_length=255)
    cnpj = models.CharField(max_length=11)

    def __str__ (self):
        return self.name