from django.db import models


class Activity(models.Model):
    title = models.CharField(max_length=100)
    startTime = models.DateTimeField()
    endTime = models.DateTimeField()
    description = models.CharField(max_length=500)
    private = models.BooleanField(default=False)


class Task(models.Model):
    item = models.CharField(max_length=100)
    complete = models.BooleanField(default=False)
    activity = models.ForeignKey(
        Activity, related_name='tasks', on_delete=models.CASCADE)
