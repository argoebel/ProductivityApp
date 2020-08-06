from rest_framework import routers
from .api import ActivityViewSet

router = routers.DefaultRouter()
router.register('api/activities', ActivityViewSet, 'activities')

urlpatterns = router.urls