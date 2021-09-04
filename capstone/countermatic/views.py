from django.http.response import JsonResponse, HttpResponseRedirect
from django.shortcuts import render, reverse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .models import Vendor
import datetime, requests
import pycounter

# -----------------------------------------------------
# Homepage
# -----------------------------------------------------
def home_page(request):
    return render(request, 'countermatic/index.html')

# -----------------------------------------------------
# User Management
# -----------------------------------------------------
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

# -----------------------------------------------------
# Configure Vendors
# -----------------------------------------------------
@login_required
def vendors(request):

    Vendors = Vendor.objects.filter(user=request.user)

    context = {
        'vendors': Vendors,
    }

    return render(request, 'countermatic/vendors.html', context)

@login_required
def add_vendor(request):

    vendor = Vendor()

    form = request.POST

    url = form['sushi_url']
    if url[-1] != "/":
        url += "/"

    vendor.vendor_name = form['vendor_name']
    vendor.sushi_url = url
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

@login_required
def delete_vendor(request):
    form = request.POST

    vendor_id = form['vendor_id']

    Vendors = Vendor.objects.filter(user=request.user)
    selected_vendor = Vendors.get(id=vendor_id)
    selected_vendor.delete()
    return HttpResponseRedirect(reverse('countermatic:vendors'))

# -----------------------------------------------------
# Harvest Reports
# -----------------------------------------------------
@login_required
def get_vendors(request):
    Vendors = Vendor.objects.filter(user=request.user)

    json = {
        'vendors': []
    }

    for vendor in Vendors:

        vendor_params = {
            'id': vendor.id,
            'base_url':vendor.sushi_url,
        }

        if vendor.customer_id:
            cust_id = vendor.customer_id
            vendor_params["customer_id"] = cust_id
        if vendor.requestor_id:
            request_id = vendor.requestor_id
            vendor_params["requestor_id"] = request_id
        if vendor.api_key:
            api_key = vendor.api_key
            vendor_params["api_key"] = api_key

        json['vendors'].append(vendor_params)

    return JsonResponse(json)

@login_required
def harvest (request):

    if request.method == "GET":
        Vendors = Vendor.objects.all()

        context = {
            'vendors': Vendors,
            'user' : request.user
        }

        return render(request, 'countermatic/harvest.html', context)

    # User submits form
    elif request.method == "POST":
        # Get form data
        form = request.POST
        vendor = form['vendordrop']
        selected_vendor = Vendor.objects.filter(id=vendor)
        report = form['reportdrop']
        datefrom = form['datefrom']
        fromdateobject = datetime.datetime.strptime(datefrom, '%m/%d/%Y').strftime('%Y-%m-%d')
        dateto = form['dateto']
        todateobject = datetime.datetime.strptime(dateto, '%m/%d/%Y').strftime('%Y-%m-%d')
        base_url = selected_vendor[0].sushi_url
        route = form['radioRouter']

        params = {}

        if selected_vendor[0].customer_id:
            cust_id = selected_vendor[0].customer_id
            params["customer_id"] = cust_id
        if selected_vendor[0].requestor_id:
            request_id = selected_vendor[0].requestor_id
            params["requestor_id"] = request_id
        if selected_vendor[0].api_key:
            api_key = selected_vendor[0].api_key
            params["api_key"] = api_key

        request_url = f"{base_url}reports/{report}?begin_date={fromdateobject}&end_date={todateobject}" 
        
        for key, value in params.items():
            request_url += f"&{key}={value}"
            
        response = requests.get(request_url)
        json_response = response.json()


        print("Report Done!")
        print("Starting Parse")
        
        final_py_data = []
        
        for database in json_response["Report_Items"]:
            metric_list = []
            for metric in database['Performance'][0]['Instance']:
                metric_list.append(metric['Metric_Type'])
            for metric in metric_list:
                new_database = {}
                new_database['platform'] = database['Platform']
                new_database['database'] = database['Database']
                new_database['metric'] = metric
                for i in range (len(database["Performance"])):
                    date_key = database["Performance"][i]["Period"]["Begin_Date"]
                    date_key = datetime.datetime.strptime(date_key, '%Y-%m-%d').strftime('%m/%d/%y')
                    for j in range (len(database["Performance"][i]["Instance"])):
                        if database["Performance"][i]["Instance"][j]["Metric_Type"] == metric:
                            data_value = str(database["Performance"][i]["Instance"][j]["Count"])
                    new_database[date_key] = data_value
                final_py_data.append(new_database)

        context = {
            'json_response': final_py_data,
        }

        if route == "radioTable":
            route_url = 'countermatic/table.html'
        else:
            route_url = 'countermatic/dashboard.html'

        return render(request, route_url, context)

# -----------------------------------------------------
# Visualize Reports
# -----------------------------------------------------
@login_required
def dashboard (request):

    return render(request, 'countermatic/dashboard.html')
@login_required
def table (request):

    return render(request, 'countermatic/table.html')

