from django.db import models
from PIL import Image
from activity.models import Activity
# Create your models here.

class Instructor(models.Model):
    name = models.CharField(max_length=120)
    email = models.CharField(max_length=120)
    image = models.ImageField(default='pictures/default_instructor.jpg', upload_to='pictures')
    
    def __str__(self):
        return self.name

    def save(self, **kwargs):
        super().save()
        img = Image.open(self.image.path)
        if img.height > 500 or img.width > 500:
            output_size = (500, 500)
            img.thumbnail(output_size)
            img.save(self.image.path)

class InstructorActivities(models.Model):
    instructorID = models.ForeignKey(Instructor, on_delete = models.CASCADE)
    activityID = models.ForeignKey(Activity, on_delete = models.CASCADE)

    class Meta:
        unique_together = [["instructorID", "activityID"]]

    def __str__(self):
        return f'Instructor ID: {self.instructorID}, activity ID: {self.activityID}'