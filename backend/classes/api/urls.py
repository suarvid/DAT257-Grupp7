from .views import ClassViewSet
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'', ClassViewSet)
urlpatterns = router.urls