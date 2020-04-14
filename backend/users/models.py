from django.db import models
from django.contrib.auth.models import User
from PIL import Image

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(default='default_profile.jpg', upload_to='profile_pics')

    def __str__(self):
        return f"{self.user.username}'s profile'"

    def save(self, **kwrags):
        super.save()
        image = Image.open(self.image.path)
        if image.height > 500 or img.width > 500:
            output_size = (500, 500)
            image.thumbnail(output_size)
            image.save(self.image.path)

