from django.http.response import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, get_object_or_404, reverse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout

# Create your views here.
def home_page(request):
    return render(request, 'countermatic/index.html')

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

def user_profile(request):
    return ...