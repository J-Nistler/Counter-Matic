from django.urls import path
from .views import home_page, register, login_user, logout_user, user_profile

app_name = 'countermatic'
urlpatterns = [
    path('', home_page, name='home'),
    path('register/', register, name="register"),
    path('login/', login_user, name='login'),
    path('logout/', logout_user, name='logout'),
    # path('<str:username>/', user_profile, name="user_profile"),

]