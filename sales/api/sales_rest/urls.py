from django.urls import path, include 
from .views import api_list_sales_reps, api_list_sales_customers, api_list_sales_records

urlpatterns = [
    path('salesreps/', api_list_sales_reps, name='api_list_sales_reps'),
    path('salescustomers/', api_list_sales_customers, name='api_list_sales_customers'),
    path('salesrecords/', api_list_sales_records, name='api_list_sales_records'),
]
