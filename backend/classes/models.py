from django.db import models
from django.utils import timezone
from instructors.models import Instructor
from activity.models import Activity
from locations.models import Location
from django.core.exceptions import ValidationError


class Class(models.Model):
    activity = models.ForeignKey(Activity, on_delete=models.CASCADE)
    description = models.CharField(max_length=240, blank=True)
    instructor = models.ForeignKey(
        Instructor, on_delete=models.CASCADE, default=0)
    date = models.DateField(default=timezone.localdate)
    start_time = models.TimeField(default=timezone.localtime)
    end_time = models.TimeField(default=timezone.localtime)
    location = models.ForeignKey(Location, on_delete=models.CASCADE, default=0)
    max_attendees = models.PositiveIntegerField(default=0)
    registered_attendees = models.PositiveIntegerField(default=0)
    price = models.IntegerField(default=0)

    def save(self, *args, **kwargs):
        if (self.start_time > self.end_time) or (self.registered_attendees > self.max_attendees and self.max_attendees != 0):
            raise ValidationError(
                'The start time cannot be set to after the end time!')
        elif self.registered_attendees > self.max_attendees and self.max_attendees != 0:
            raise ValidationError(
                'The class is full and cannot register more attendees!')
        elif self.max_attendees > self.location.capacity:
            raise ValidationError(
                'The max attendees of the class cannot be set to higher than the capacity of the class location!')
        elif Class.objects.filter(start_time__lte=self.start_time, end_time__gt=self.start_time, date=self.date, location=self.location).exists() or Class.objects.filter(start_time__gte=self.start_time, start_time__lt=self.end_time, date=self.date, location=self.location).exists():
            raise ValidationError(
                'The set location is already booked during the given time.')
        else:
            super().save(*args, **kwargs)

    def __str__(self):
        return self.activity.name
