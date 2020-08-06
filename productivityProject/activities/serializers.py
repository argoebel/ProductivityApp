from rest_framework import serializers
from .models import Activity

class ActivitySerializer(serializers.ModelSerializer):
    title = serializers.CharField()
    time = serializers.DateTimeField()
    duration = serializers.DurationField()
    description = serializers.CharField()
    private = serializers.BooleanField()
    
    class Meta:
        model = Activity
        fields = '__all__'