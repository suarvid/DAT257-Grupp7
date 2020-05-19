from django.urls import path
from .views import ComingClassesListView, CompletedClassesListView, \
     TodaysClassesListView, ClassDetailView, CancelBookingView
from . import views

urlpatterns = [
    path('', TodaysClassesListView.as_view(), name='todayListView'),
    path('class/<int:pk>/', ClassDetailView.as_view(), name='dataDetailView'),
    path('genomförda/', CompletedClassesListView.as_view(), name='completedListView'),
    path('kommande/', ComingClassesListView.as_view(), name="comingListView"),
    path('cancel/<int:pk>/', CancelBookingView.as_view(), name='cancelView'),
    path('cancel/<int:pk>/delete', views.delete_booking, name='deleteView')
]
