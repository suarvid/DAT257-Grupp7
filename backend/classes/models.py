from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from activity.models import Activity
from locations.models import Location


class Class(models.Model):
    activity = models.ForeignKey(Activity, on_delete=models.CASCADE)
    description = models.CharField(max_length=240, blank=True)
    instructor = models.ForeignKey(User, on_delete=models.CASCADE, default=0)
    date = models.DateField(default=timezone.localdate)
    start_time = models.TimeField(default=timezone.localtime)
    end_time = models.TimeField(default=timezone.localtime)
    location = models.ForeignKey(Location, on_delete=models.CASCADE, default=0)
    max_attendees = models.IntegerField(default=0)
    registered_attendees = models.IntegerField(default=0)
    price = models.IntegerField(default=0)

    def save(self, *args, **kwargs):
        if (self.start_time > self.end_time) or (self.registered_attendees > self.max_attendees and self.max_attendees != 0):
            return
        else:
            super().save(*args, **kwargs)

    def __str__(self):
        return self.activity.name
