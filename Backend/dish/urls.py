from django.urls import path

from . import views

urlpatterns = [
    path('dishes/', views.buscarDishesRestaurante),
    path('dishes/<int:dishId>/', views.getDish),
]