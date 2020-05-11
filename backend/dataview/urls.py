from django.urls import path
from .views import ClassListView, ClassDetailView
from . import views

urlpatterns = [
    path('', ClassListView.as_view(), name='dataListView'),
    path('class/<int:pk>/', ClassDetailView.as_view(), name='dataDetailView'),
]
