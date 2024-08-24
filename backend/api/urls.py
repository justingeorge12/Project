from django.urls import path
from . import views


urlpatterns = [
    path("api/create/", views.CustomerListCreate.as_view(), name="createCustomer"),
    path('api/detail/<int:id>/',views.CustomerRetriveUpdateDestroy.as_view(), name='Customerdetail'),
    path('api/userdetails/', views.AllUserDetails.as_view(), name='userdetails'),
    path('api/usersearch/',views.UserSearchView.as_view(), name='usersearch')
    
]
