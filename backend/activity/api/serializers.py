from rest_framework import serializers
from activity.models import Activity

#might have to add image to fields below
class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = ('id', 'name', 'description')