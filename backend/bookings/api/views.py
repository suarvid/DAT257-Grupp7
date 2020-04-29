from bookings.models import Booking
from .serializers import BookingSerializer
from rest_framework import viewsets

class BookingViewSet(viewsets.ModelViewSet):
    serializer_class = BookingSerializer
    queryset = Booking.objects.all()