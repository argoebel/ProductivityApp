from rest_framework import routers
from django.urls import path
from .api import ActivityViewSet, TaskAPIView, CreateTaskAPIView

router = routers.DefaultRouter()
router.register('api/activities', ActivityViewSet, 'activities')

urlpatterns = router.urls
urlpatterns += [
    path('api/tasks/<int:pk>', TaskAPIView.as_view(), name='get_posts'),
    path('api/tasks/create', CreateTaskAPIView.as_view(), name='create_post'),
]
