from django.http.response import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, get_object_or_404, reverse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .models import Vendor

# Create your views here.
def home_page(request):
    return render(request, 'countermatic/index.html')

# User Management
def register(request):
    print('METHOD', request.method)
    if request.method == "GET":
        return render(request, 'countermatic/register.html')
    elif request.method == "POST":
        print('FORM', request.POST)

        # Get data from our form
        form = request.POST
        username = form['username']
        password = form['password']
        email = form['email']

        # Create user. username, email, password.
        user = User.objects.create_user(
            username, email, password)

        login(request, user)

        return HttpResponseRedirect(reverse('countermatic:home'))

def login_user(request):
    # User visits page
    if request.method == "GET":
        return render(request, 'countermatic/login.html')
    # User submits form
    elif request.method == "POST":
        print('FORM', request.POST)
        # Get form data
        form = request.POST
        username = form['username']
        password = form['password']

        # Authenticate User
        user = authenticate(request, username=username, password=password)
        if user != None:
            login(request, user)

        return HttpResponseRedirect(reverse('countermatic:home'))


def logout_user(request):
    logout(request)
    return HttpResponseRedirect(reverse('countermatic:home'))

# User Profile
@login_required
def user_profile(request, username):

    user = get_object_or_404(User, username=request.user)

    context = {
        'user': user,
    }
    return render(request, 'countermatic/user_profile.html', context)

# Configure Vendors
@login_required
def vendors(request):

    Vendors = Vendor.objects.all()

    context = {
        'vendors': Vendors,
        'user' : request.user
    }

    return render(request, 'countermatic/vendors.html', context)

@login_required
def add_vendor(request):

    vendor = Vendor()

    form = request.POST

    vendor.vendor_name = form['vendor_name']
    vendor.sushi_url = form['sushi_url']
    vendor.requestor_id = form['requestor_id']
    vendor.requestor_name = form['requestor_name']
    vendor.customer_id = form['customer_id']
    vendor.customer_name = form['customer_name']
    vendor.user_name = form['vnd_username']
    vendor.password = form['vnd_password']
    vendor.requestor_email = form['requestor_email']
    vendor.api_key = form['api_key']
    vendor.platform = form['platform']
    vendor.user = request.user

    vendor.save()

    return HttpResponseRedirect(reverse('countermatic:vendors'))

# @login_required
# def delete_vendor(request):

#     # vendor.delete()

#     return HttpResponseRedirect(reverse('countermatic:vendors', args=[request.user.username]))

# Request Reports
# @login_required
# def reports(request):

#     user = get_object_or_404(User, username=username)
#     Vendors = Vendor.objects.all()

#     context = {
#         'vendors': Vendors,
#         'user' : user
#     }

#     return render(request, 'countermatic/vendors.html', context)

def harvest (request):

    Vendors = Vendor.objects.all()

    context = {
        'vendors': Vendors,
        'user' : request.user
    }

    return render(request, 'countermatic/harvest.html', context)

def report (request, vendor_id):

    vendor = Vendor.objects.filter(id = vendor_id)

    context = {
        'vendor': vendor,
        'user' : request.user
    }

    return render(request, 'countermatic/harvest/report.html', context)