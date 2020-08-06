from rest_framework import serializers
from .models import Activity

class ActivitySerializer(serializers.ModelSerializer):
    title = serializers.CharField()
    time = serializers.CharField()
    duration = serializers.CharField()
    
    class Meta:
        model = Activity
        fields = '__all__'