from rest_framework import serializers
from .models import Activity, Task


class ActivitySerializer(serializers.ModelSerializer):
    title = serializers.CharField()
    startTime = serializers.DateTimeField()
    endTime = serializers.DateTimeField()
    description = serializers.CharField()
    private = serializers.BooleanField()

    class Meta:
        model = Activity
        fields = '__all__'


class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        fields = '__all__'

    def create(self, validated_data):
        task = super(TaskSerializer, self).create(validated_data)
        task.save()
        return task
