from django.contrib import admin
from django.urls import path,include
from . import views
urlpatterns = [
    
    path('', views.index),
    path('table/', views.view_table),
    path('order/', views.place_order),
    path('order/<int:id>/', views.get_order_table),
    
    
]