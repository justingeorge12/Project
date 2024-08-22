
from .models import Customer
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer, TokenRefreshSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'
    password = serializers.CharField(write_only = True)

    def create(self, validated_data):
        print(validated_data)

        password = validated_data.pop('password', None)
        obj = Customer(**validated_data)

        if password is not None:
            obj.set_password(password)
        
        obj.save()
        return obj
    
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        user = self.user

        if not user.is_superuser:
            raise serializers.ValidationError('you do not have permission to access')
        
        return data
    
User = get_user_model()
class CustomTokenRefreshSerializer(TokenRefreshSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        refresh_token = RefreshToken(attrs['refresh'])

        user_id = refresh_token['user_id']

        try:
            user = User.objects.get(id = user_id)
        except User.DoesNotExist:
            raise serializers.ValidationError('User not found ')

        if not user.is_superuser:
            raise serializers.ValidationError('you do not have permissiion to accesss')

            
        return data
    