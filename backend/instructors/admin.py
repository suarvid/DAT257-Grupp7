from django.contrib import admin
from .models import InstructorActivities, Instructor
# Register your models here.
admin.site.register(Instructor)
admin.site.register(InstructorActivities)