from django.db import models

class Menu (models.Model):
    
    def __str__ (self):
        return f'Menu {self.id}'
