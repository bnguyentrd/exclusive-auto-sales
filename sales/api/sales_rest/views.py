from django.shortcuts import render
from common.json import ModelEncoder 
from .models import AutomobileVO, SalesRep, SalesCustomer, SalesRecord
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json

# Create your views here.
class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO 
    properties = ["vin", "import_href"]

class SalesRepDetailEncoder(ModelEncoder):
    model = SalesRep 
    properties = ["name", "employee_id"]

class SalesCustomerDetailEncoder(ModelEncoder):
    model = SalesCustomer 
    properties = ["name", "address", "phone_number"]

class SalesCustomerListEncoder(ModelEncoder):
    model = SalesCustomer 
    properties = ["name", "phone_number"]

class SalesRecordListEncoder(ModelEncoder):
    model = SalesRecord
    properties = ["sales_price"]

    def get_extra_data(self, o):
        return {
        "sales_customer": o.sales_customer.name, 
        "sales_rep_id": o.sales_rep.employee_id,
        "sales_automobile": o.sales_automobile.vin,
        "sales_rep_name": o.sales_rep.name
        }

@require_http_methods(["GET", "POST"])
def api_list_sales_reps(request):
    if request.method == "GET":
        sales_reps = SalesRep.objects.all()
        return JsonResponse({
            "sales_reps": sales_reps}, 
            encoder=SalesRepDetailEncoder)

    else:
        content = json.loads(request.body)

    sales_rep = SalesRep.objects.create(**content)
    return JsonResponse(sales_rep, encoder=SalesRepDetailEncoder, safe=False)


@require_http_methods(["GET", "POST"])
def api_list_sales_customers(request):
    if request.method == "GET":
        sales_customers = SalesCustomer.objects.all()
        return JsonResponse({
            "sales_customers": sales_customers}, 
            encoder=SalesCustomerListEncoder)
    
    else:
        content = json.loads(request.body)

        sales_customer = SalesCustomer.objects.create(**content)
        return JsonResponse(
            sales_customer,
            encoder=SalesCustomerDetailEncoder,
            safe=False)


@require_http_methods(["GET", "POST"])
def api_list_sales_records(request):
    if request.method == "GET":
        sales_records = SalesRecord.objects.all()

        return JsonResponse({
            "sales_records": sales_records
        },
        encoder=SalesRecordListEncoder,
        safe=False)
    
    else:
        content = json.loads(request.body)

        try:
            rep_employee_id = content["sales_rep"]
            sales_rep = SalesRep.objects.get(employee_id=rep_employee_id)
            content["sales_rep"] = sales_rep 

        except SalesRep.DoesNotExist:
            return JsonResponse({"message": "Invalid Sales Rep ID"}, status=400)

        try:
            sales_customer_phone = content["sales_customer"]
            sales_customer = SalesCustomer.objects.get(phone_number=sales_customer_phone)
            content["sales_customer"] = sales_customer 
        except SalesCustomer.DoesNotExist:
            return JsonResponse({"message": "Invalid customer phone number"}, status=400)

        try:
            automobile_vin = content["sales_automobile"]
            sales_automobile = AutomobileVO.objects.get(vin=automobile_vin)

            content["sales_automobile"] = sales_automobile 
        
        except AutomobileVO.DoesNotExist:
            return JsonResponse({"message": "Invalid VIN"}, status=400)        
            
        sales_record = SalesRecord.objects.create(**content)
        return JsonResponse(sales_record, encoder=SalesRecordListEncoder, safe=False)

