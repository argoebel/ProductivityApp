from django.db import models

# Create your models here.
class Activity(models.Model):
    title = models.CharField(max_length=100)
    time = models.CharField(max_length=100)
    duration = models.CharField(max_length=100)