from django.db import models
from django.urls import reverse

class AutomobileVO(models.Model):
    color = models.CharField(max_length=100)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return self.vin


class Technician(models.Model):
    name = models.CharField(max_length = 100)
    employee_number = models.PositiveIntegerField()

    def get_api_url(self):
        return reverse('show_technician', kwargs={'pk': self.id})


class Appointment(models.Model):
    vin = models.CharField(max_length=17)
    owner = models.CharField(max_length=100)
    date_time = models.DateTimeField()
    technician = models.ForeignKey(
        Technician,
        related_name='appointments',
        on_delete=models.PROTECT,
    )
    reason = models.TextField()
    VIP = models.BooleanField(default=False)
    fin = models.BooleanField(default=False)

    def get_api_url(self):
        return reverse('show_appointment', kwargs={'pk':self.id})
