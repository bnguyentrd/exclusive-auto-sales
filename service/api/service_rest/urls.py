from django.urls import path
from .views import (
    api_list_appointment,
    api_show_appointment,
    api_list_technician,
    api_show_technician
)

urlpatterns = [
    path("appointment/", api_list_appointment, name="list_appointment"),
    path("appointment/<int:pk>/", api_show_appointment, name="show_appointment"),
    path("appointment/history/<str:vin>/", api_show_appointment, name="show_appointment_"),
    path("technician/", api_list_technician, name="list_technicians"),
    path("technician/<int:pk>/", api_show_technician, name="show_technician")
]
