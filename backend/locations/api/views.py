from locations.models import Location
from .serializers import LocationSerializer
from rest_framework import viewsets

class LocationViewSet(viewsets.ModelViewSet):
    serializer_class = LocationSerializer
    queryset = Location.objects.all()