from classes.models import Class
from .serializers import ClassSerializer
from rest_framework import viewsets

class ClassViewSet(viewsets.ModelViewSet):
    serializer_class = ClassSerializer
    queryset = Class.objects.all()