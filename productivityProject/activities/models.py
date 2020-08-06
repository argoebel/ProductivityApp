from django.db import models

# Create your models here.
class Activity(models.Model):
    title = models.CharField(max_length=100)
    time = models.DateTimeField()
    duration = models.DurationField()
    description = models.CharField(max_length=500)
    private = models.BooleanField(default=False)