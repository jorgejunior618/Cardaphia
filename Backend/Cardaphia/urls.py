from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('restaurante/<int:id>/', include('restaurant.urls')),
    path('restaurante/<int:id>/', include ('dish.urls')),
    path('restaurante/<int:id>/pedidos/', include('order.urls')),
    
]

    