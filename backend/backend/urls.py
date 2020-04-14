from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from post import views as post_views
from users import views as users_views

router = routers.DefaultRouter()
router.register(r'post', post_views.PostView, 'post')
router.register(r'profile', users_views.ProfileView, 'profile')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]
