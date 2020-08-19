from rest_framework import serializers
from .models import Activity, Task


class ActivitySerializer(serializers.ModelSerializer):

    class Meta:
        model = Activity
        fields = '__all__'

    def create(self, validated_data):
        activity = super(ActivitySerializer, self).create(validated_data)
        activity.save()
        return activity


class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        fields = '__all__'

    def create(self, validated_data):
        task = super(TaskSerializer, self).create(validated_data)
        task.save()
        return task
