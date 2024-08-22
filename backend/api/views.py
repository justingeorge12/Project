from django.shortcuts import render
from rest_framework import generics
from .models import Customer
from .serializer import CustomerSerializer, CustomTokenObtainPairSerializer, CustomTokenRefreshSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


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
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny]

    


class CustomTokenObtainPairview(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


class CustomTokenRefreshView(TokenRefreshView):
    serializer_class = CustomTokenRefreshSerializer
    