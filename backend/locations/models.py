from django.db import models

# Create your models here.
class Location(models.Model):
    name = models.CharField(max_length = 240)
    street_address = models.CharField(max_length=120)
    postal_code = models.IntegerField(default=0)
    city = models.CharField(max_length=120)
    capacity = models.IntegerField(default=0)

    def __str__(self):
        return self.name