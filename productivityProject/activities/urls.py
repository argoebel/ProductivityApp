from rest_framework import routers
from django.urls import path
from .api import TaskAPIView, CreateTaskAPIView, CreateActivityAPIView, ActivityAPIView

urlpatterns = [
    path('api/activities',
         ActivityAPIView.as_view(), name='get_activities'),
    path('api/activities/create',
         CreateActivityAPIView.as_view(), name='create_activity'),

    path('api/tasks/<int:pk>', TaskAPIView.as_view(), name='get_tasks'),
    path('api/tasks/create', CreateTaskAPIView.as_view(), name='create_task'),
]
