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

class InstructorActivities(models.Model):
    instructorID = models.ForeignKey(Instructor, on_delete = models.CASCADE)
    activityID = models.ForeignKey(Activity, on_delete = models.CASCADE)

    class Meta:
        unique_together = [["instructorID", "activityID"]]

    def __str__(self):
        f'Instructor ID: {instructorID}, activity ID: {activityID}'