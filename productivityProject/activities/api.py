from activities.models import Activity, Task
from activities.serializers import ActivitySerializer, TaskSerializer
from rest_framework import viewsets, permissions, status
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework.request import Request


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


class CreateTaskAPIView(CreateAPIView):
    serializer_class = TaskSerializer

    def create(self, request, *args, **kwargs):
        print("CreateTaskAPIView")
        serializer = self.get_serializer(data=request.data)
        # print(serializer.data)
        # serializer.data
        serializer.is_valid(raise_exception=True)
        print("IS VALID")
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)

        return Response(
            {**serializer.data},
            status=status.HTTP_201_CREATED,
            headers=headers
        )


class TaskAPIView(APIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = TaskSerializer

    def get(self, request, pk, format=None):
        print("GETTING TASKS")
        tasks = Task.objects.filter(activity=pk)
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
