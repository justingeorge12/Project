from django.shortcuts import render
from rest_framework import generics
from .models import Customer
from .serializer import CustomerSerializer, CustomTokenObtainPairSerializer, CustomTokenRefreshSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework.filters import SearchFilter



# Create your views here.

class CustomerListCreate(generics.ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    permission_classes = [AllowAny]

class CustomerRetriveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    lookup_field = 'id'
    permission_classes = [IsAuthenticated]

class AllUserDetails(generics.ListAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer 
    permission_classes = [AllowAny]

class UserSearchView(generics.ListAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    filter_backends = [SearchFilter]
    search_fields = ['username', 'email']
    permission_classes = [AllowAny] 



class CustomTokenObtainPairview(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


class CustomTokenRefreshView(TokenRefreshView):
    serializer_class = CustomTokenRefreshSerializer
    