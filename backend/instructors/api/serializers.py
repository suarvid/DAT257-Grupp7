from rest_framework import serializers
from instructors.models import Instructor, InstructorActivities

class InstructorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instructor
        fields = ('id', 'name', 'email', 'image')


class InstructorActivitiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = InstructorActivities
        fields = ('id', 'instructorID', 'activityID')