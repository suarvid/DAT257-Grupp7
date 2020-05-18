from django.db import models
from django.utils import timezone
from classes.models import Class
# Create your models here.
class Booking(models.Model):
    name = models.CharField(max_length = 120)
    email = models.CharField(max_length = 120)
    phone_number = models.IntegerField(default=0)
    classID = models.ForeignKey(Class, on_delete=models.CASCADE)

    def __str__(self):
        return (f'{self.name}s booking for class {self.classID}')

    def save(self, *args, **kwargs):
        c = Class.objects.get(id=self.classID.id)
        c.registered_attendees += 1
        c.save()
        super().save(*args, **kwargs)

    class Meta:
        unique_together = [["classID", "email"]]