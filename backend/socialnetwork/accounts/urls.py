from django.contrib import admin
from django.urls import path
from accounts import views
from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path('register', views.registration,name='registration'),
    path('token', views.CustomTokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('refresh', TokenRefreshView.as_view(),name='token_refresh'),
]
