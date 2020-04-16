from users.models import Profile
from django.contrib.auth.models import User
from .serializers import ProfileSerializer, UserSerializer
from rest_framework import viewsets

# not sure if a viewset for User is also required
class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()