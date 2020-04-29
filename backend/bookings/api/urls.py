from .views import BookingViewSet
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'', BookingViewSet)
urlpatterns = router.urls