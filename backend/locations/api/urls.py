from .views import LocationViewSet
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'', LocationViewSet)
urlpatterns = router.urls