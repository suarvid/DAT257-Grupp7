from django.db import models
from PIL import Image

class Activity(models.Model):
    name = models.CharField(max_length = 120)
    description = models.TextField()
    image = models.ImageField(default='media/pictures/default_activity.jpg', upload_to='media/pictures/activity_pics')

    def __str__(self):
        return f"{self.name}"