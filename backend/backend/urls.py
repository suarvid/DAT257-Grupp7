from django.contrib import admin
from django.urls import path, include
from post.api import views as post_views
from users.api import views as users_views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/post/', include('post.api.urls')),
    path('api/user/', include('users.api.urls')),
    path('api/classes/', include('classes.api.urls')),
    path('api/activities/', include('activity.api.urls')),
    path('api/bookings/', include('bookings.api.urls')),
    path('api/instructors/', include('instructors.api.urls')),
    path('api/locations/', include('locations.api.urls')),
    path('dataview/', include('dataview.urls')),
    path('error/', include('classes.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

handler500 = 'classes.views.doublebooked_error'