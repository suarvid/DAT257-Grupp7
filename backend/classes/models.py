from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from activity.models import Activity


class Class(models.Model):
    activity = models.ForeignKey(Activity, on_delete=models.CASCADE)
    description = models.CharField(max_length=240, blank=True)
    instructor = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    location = models.CharField(max_length=120)
    max_attendees = models.IntegerField()
    registered_attendees = models

    def save(self, *args, **kwargs):
        if (self.start_time > self.end_time) or (self.registered_attendees > self.max_attendees):
            return
        else:
            super().save(*args, **kwargs)

    def __str__(self):
        return self.activity.name
