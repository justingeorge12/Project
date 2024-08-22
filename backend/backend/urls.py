
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from api.views import CustomTokenObtainPairview, CustomTokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/admintoken/',CustomTokenObtainPairview.as_view(), name='adminget_token'),
    path('api/admintoken/refresh/', CustomTokenRefreshView.as_view() , name = 'adminrefresh_token'),
    path("api/token", TokenObtainPairView.as_view(), name="get_token"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="refresh"),
    path('',include('api.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

