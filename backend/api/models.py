from django.db import models
from django.contrib.auth.models import AbstractUser

class Customer(AbstractUser):
    email = models.EmailField(max_length=50, unique=True)
    profileImg = models.ImageField(upload_to='profileimg',blank=True, null=True)


    



# from django.db import models
# from django.contrib.auth.hashers import make_password
# from django.contrib.auth.models import AbstractBaseUser

# class Customer(abst):
#     username = models.CharField(max_length=50 , unique=True)
#     email = models.EmailField(max_length=50, unique=True)
#     password = models.CharField(max_length=128)
#     profileImg = models.ImageField(upload_to='profileimg',blank=True, null=True)

#     # Only hash the password when creating a new user
#     def save(self, *args, **kwargs):
#         if not self.pk or 'pbkdf2_' not in self.password:
#             self.password = make_password(self.password)
#         super().save(*args, **kwargs)