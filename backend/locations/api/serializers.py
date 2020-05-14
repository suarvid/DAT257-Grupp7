from rest_framework import serializers
from locations.models import Location

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ('id', 'name', 'street_address', 'postal_code', 'city', 'capacity')