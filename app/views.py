from django.shortcuts import render
from django.http import HttpResponse
import datetime

import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Dish,Table,Item
# from .models import Dish
@csrf_exempt
def index(request):
    data=list(Item.objects.filter(available=True).values())
    return JsonResponse(data, safe=False)

@csrf_exempt
def view_table(request):
    data=list(Table.objects.values())
    return JsonResponse(data, safe=False)
@csrf_exempt
def place_order(request):
    if request.method=="GET":
        # data=Dish.objects.filter(table_id=id).values()
        # data=list(data)
        return HttpResponse("Working")
    else:
        data=json.loads(request.body)
        table, created = Table.objects.get_or_create(table_id=data["table"])
        table = Table.objects.get(table_id=data["table"])  
        item=Item.objects.get(id=data["item"])  
        dish = Dish( item=item,
        dish_name=data["dish_name"],
        table=table,
        quantity=data["quantity"],
        cost=data["quantity"]*item.cost)
        dish.save()
        
        # print(data["table"],type(data["table"]))
        # try:
        #     table = Table.objects.get(table_id=data["table"])
        #     print("table exists")
        # except Table.DoesNotExist:
        #    table=Table(table_id=data["table"])
        #    table.save()

        #    print("table doesn't exist")
        

        # print(table)
        # if Table.objects.get(table_id = data["table"]).exists():
        #     table = Table.objects.get(table_id=data["table"])  
        #     item=Item.objects.get(id=data["item"])  
        #     dish = Dish( item=item,
        #     dish_name=data["dish_name"],
        #     table=table,
        #     quantity=data["quantity"],
        #     cost=data["quantity"]*item.cost)
        #     dish.save()
       
        # else:
        #     table=Table(table_id=data["table"])
        #     table.save()
        #     table = Table.objects.get(table_id=data["table"])  
        #     item=Item.objects.get(id=data["item"])  
        #     dish = Dish( item=item,
        #     dish_name=data["dish_name"],
        #     table=table,
        #     quantity=data["quantity"],
        #     cost=data["quantity"]*item.cost)
        #     dish.save()
            
            



        
            
        


    print("Post Request")

    return HttpResponse("working")
@csrf_exempt
def get_order_table(request,id):
    print("id",type(id))
    table = Table.objects.get(table_id=id)  
    data=Dish.objects.filter(table=table).values()
    data=list(data)
    print(data)
    
    return JsonResponse(data, safe=False)

