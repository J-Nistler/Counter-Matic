from django.urls import path
from .views import home_page, register, login_user, logout_user, user_profile, vendors, add_vendor

app_name = 'countermatic'
urlpatterns = [
    path('', home_page, name='home'),
    path('register/', register, name="register"),
    path('login/', login_user, name='login'),
    path('logout/', logout_user, name='logout'),
    path('vendors/', vendors, name="vendors"),
    path('add_vendor/', add_vendor, name="add_vendor"),
    path('<str:username>/', user_profile, name="user_profile"),
]