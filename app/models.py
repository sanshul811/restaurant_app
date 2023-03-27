from django.db import models

# Create your models here.


class Table(models.Model):
    table_id=models.IntegerField(unique=True)
    def __str__(self):
        temp=str(self.table_id)
        return temp
    
    


class Item(models.Model):
    item_name=models.CharField( max_length=50)    
    available=models.BooleanField()
    cost=models.IntegerField(default=0)
    def __str__(self):
        return self.item_name 

class Dish(models.Model):
    item=models.ForeignKey(Item, on_delete=models.CASCADE)
    dish_name=models.CharField( max_length=50)
    table=models.ForeignKey(Table, on_delete=models.CASCADE)
    quantity=models.IntegerField()
    cost=models.IntegerField(default=0)
    # def __str__(self):
    #     return self.item.item_name 
       