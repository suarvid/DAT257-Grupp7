from activity.models import Activity
from .serializers import ActivitySerializer
from rest_framework import viewsets

class ActivityViewSet(viewsets.ModelViewSet):
    serializer_class = ActivitySerializer
    queryset = Activity.objects.all()