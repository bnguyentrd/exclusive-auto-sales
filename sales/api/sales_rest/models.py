from django.db import models

# Create your models here.
class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    vin = models.CharField(max_length=17, unique=True, null=True)


class SalesRep(models.Model):
    name = models.CharField(max_length=200)
    employee_id = models.CharField(max_length=25, unique=True)


class SalesCustomer(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=10, unique=True)

class SalesRecord(models.Model):
    sales_rep = models.ForeignKey(
        SalesRep, related_name="sales_rep", on_delete=models.PROTECT
    )
    sales_customer = models.ForeignKey(
        SalesCustomer, related_name="sales_customer", on_delete=models.PROTECT
    )
    sales_automobile = models.ForeignKey(
        AutomobileVO, related_name="sales_auto", on_delete=models.PROTECT
    )
    sales_price = models.PositiveBigIntegerField()