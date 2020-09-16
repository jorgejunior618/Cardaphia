from django.urls import path

from . import views

urlpatterns = [
    path('pedidos/', views.buscarPedidosEstabelecimento),

]