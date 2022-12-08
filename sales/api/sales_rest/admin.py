from django.contrib import admin
from .models import AutomobileVO, SalesRep, SalesCustomer, SalesRecord
# Register your models here.


admin.site.register(AutomobileVO)
admin.site.register(SalesRep)
admin.site.register(SalesCustomer)
admin.site.register(SalesRecord)