from rest_framework import serializers
from classes.models import Class

class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Class
        fields = ('id', 'activity', 'description', 'instructor', 'start_time', 'end_time', 'location')