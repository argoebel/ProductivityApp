from activities.models import Activity
from activities.serializers import ActivitySerializer
from rest_framework import viewsets, permissions

class ActivityViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = ActivitySerializer
    
    def get_queryset(self):
        print("GETTING QUERYSET")
        print(Activity.objects.all())
        return Activity.objects.all()
    
    def perform_create(self, serializer):
        print("CREATING QUERYSET")
        serializer.save()