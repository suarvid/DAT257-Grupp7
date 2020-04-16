from django.contrib import admin
from django.urls import path, include
from post.api import views as post_views
from users.api import views as users_views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/post/', include('post.api.urls')),
    path('api/user/', include('users.api.urls')),
]
