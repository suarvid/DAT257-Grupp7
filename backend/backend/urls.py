from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views
from rest_framework import routers
from post import views as post_views
from users import views as users_views

router = routers.DefaultRouter()
router.register(r'post', post_views.PostView, 'post')
router.register(r'profile', users_views.ProfileView, 'profile')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('login/', auth_views.LoginView.as_view(template_name='users/login.html'), name='login'),
    path('register/', users_views.register, name='register'),
]
