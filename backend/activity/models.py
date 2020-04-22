from django.db import models
from PIL import Image

class Activity(models.Model):
    name = models.CharField(max_length = 120)
    content = models.TextField()
    image = models.ImageField(default='default_activity.jpg', upload_to='activity_pics')

    def __str__(self):
        return f"{self.name}"