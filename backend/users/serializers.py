from rest_framework import serializers
from .models import Profile


#might have to create a serializer for the standard User as well
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('user', 'name', 'image')