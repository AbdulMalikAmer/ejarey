from django.shortcuts import render , redirect
from django.http import HttpResponse
from django.views.generic.edit import CreateView
from django.contrib.auth.models import User
from .forms import signupform
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate , login , logout
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.forms import AuthenticationForm
from django.shortcuts import render, redirect
from .forms import AdForm


# Create your views here.

def signup_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)  # تسجيل الدخول تلقائيًا بعد إنشاء الحساب
            return redirect('index')  # إعادة التوجيه إلى الصفحة الرئيسية
    else:
        form = UserCreationForm()
    return render(request, 'signup.html', {'form': form})

def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('index')  # إعادة التوجيه إلى الصفحة الرئيسية بعد تسجيل الدخول
    else:
        form = AuthenticationForm()
    return render(request, 'login.html', {'form': form})

def logout_view(request):
    logout(request)
    return redirect('index')

def index(request):
    return render (request, 'index.html')

def logo(request):
    return render (request, 'index.html')

def hotels(request):
    return render (request, 'hotels.html')

def add(request):
    return render (request, 'add.html')

def resorts(request):
    return render (request, 'resorts.html')

def shalet(request):
    return render (request, 'shalet.html')

def appartments(request):
    return render (request, 'appartments.html')

def studios(request):
    return render (request, 'studios.html')


def add_ad(request):
    if request.method == 'POST':
        form = AdForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('index')  # استبدل 'home' برابط مناسب
    else:
        form = AdForm()

    return render(request, 'ADD_AD.html', {'form': form})

def ad_manage(request):
    return render (request, 'ad_manage.html')

def notification(request):
    return render (request, 'notification.html')