from .views import InstructorViewSet, InstructorActivitiesViewSet
from rest_framework import routers


router = routers.SimpleRouter()
router.register(r'',InstructorViewSet)
router.register(r'activities', InstructorActivitiesViewSet)
urlpatterns = router.urls