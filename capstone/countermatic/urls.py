from django.urls import path
from .views import home_page, register, login_user, logout_user, vendors, add_vendor, get_vendors, delete_vendor, harvest, dashboard, table

app_name = 'countermatic'
urlpatterns = [
    path('', home_page, name='home'),
    path('register/', register, name="register"),
    path('login/', login_user, name='login'),
    path('logout/', logout_user, name='logout'),
    path('vendors/', vendors, name="vendors"),
    path('add-vendor/', add_vendor, name="add-vendor"),
    path('get-vendors/', get_vendors, name="get-vendors"), 
    path('delete-vendor/', delete_vendor, name="delete-vendor"),        
    path('dashboard/', dashboard, name="dashboard"), 
    path('table/', table, name="table"),           
    path('harvest/', harvest, name="harvest"),
]