from rest_framework import serializers
from .models import Post

#Serializer for converting a post-object to JSON for the frontend
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'content', 'date_posted', 'author')