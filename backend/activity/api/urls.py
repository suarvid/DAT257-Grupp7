from .views import ActivityViewSet
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'', ActivityViewSet)
urlpatterns = router.urls
