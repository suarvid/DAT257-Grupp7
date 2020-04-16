from .views import ProfileViewSet
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'', ProfileViewSet)
urlpatterns = router.urls