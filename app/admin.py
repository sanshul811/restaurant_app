from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Dish,Table,Item

@admin.register(Table)
class TableModelAdmin(admin.ModelAdmin):
    list_display=["id","table_id"]

@admin.register(Dish)
class DishModelAdmin(admin.ModelAdmin):
    list_display=['table','dish_name','quantity','item','cost']
@admin.register(Item)
class ItemModelAdmin(admin.ModelAdmin):
    list_display=['id','item_name','available','cost']