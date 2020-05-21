from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User



#model-class for a news-post, attributes define columns in the database
class Post(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now)
    author =models.CharField(max_length=40)
    image = models.ImageField(default=None, blank=True, null=True ,upload_to='pictures')

    def __str__(self):
        return self.title