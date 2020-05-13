from django.urls import path
from .views import doublebooked_error

urlpatterns = [
    path('doublebooked/', doublebooked_error, name="doublebooked")
]