from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions
from .models import Post
from .serializers import PostSerializer
from rest_framework.exceptions import PermissionDenied


class IsOwner(permissions.BasePermission):
    
    def has_object_permission(self, request, view, obj):
        return obj.owner == request.user


class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    permission_classes = (IsOwner,)
    
    # Ensure a user sees only own Note objects.
    def get_queryset(self):
        user = self.request.user
        if user.is_authenticated:
            return Post.objects.filter(owner=user)
        raise PermissionDenied()
        
    # Set user as owner of a Notes object.
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
