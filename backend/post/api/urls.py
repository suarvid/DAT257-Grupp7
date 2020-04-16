from .views import PostViewSet
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'', PostViewSet)
urlpatterns = router.urls