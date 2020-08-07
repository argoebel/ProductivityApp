from django.db import models

# Create your models here.
class Activity(models.Model):
    title = models.CharField(max_length=100)
    startTime = models.DateTimeField()
    endTime = models.DateTimeField()
    description = models.CharField(max_length=500)
    private = models.BooleanField(default=False)