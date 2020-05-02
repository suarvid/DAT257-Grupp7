from rest_framework import serializers
from bookings.models import Booking

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ('id', 'name', 'email', 'phone_number', 'classID')