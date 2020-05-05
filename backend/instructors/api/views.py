from instructors.models import Instructor, InstructorActivities
from .serializers import InstructorSerializer, InstructorActivitiesSerializer
from rest_framework import viewsets

class InstructorViewSet(viewsets.ModelViewSet):
    serializer_class = InstructorSerializer
    queryset = Instructor.objects.all()


class InstructorActivitiesViewSet(viewsets.ModelViewSet):
    serializer_class = InstructorActivitiesSerializer
    queryset = InstructorActivities.objects.all()