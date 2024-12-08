from django.contrib import admin
from django.urls import path, include
from .views import*
from django.conf import settings
from django.conf.urls.static import static
from . import views 

urlpatterns = [
    path('home/', index, name='index'),
    path('', index, name='index'),
    path('hotels/', hotels, name='hotels'),
    path('add/', add, name='add'),   
    path('resorts/', resorts, name='resorts'),
    path('shalet/', shalet, name='shalet'),
   path('appartments/', appartments_view, name='appartments'),
    path('studios/', studios, name='studios'), 
    path('login/' , login_view, name='login'),  
    path('signup/' , signup_view, name='signup'),
    path('logout' , logout_view, name='logout'),
    path('add_ad/', add_ad, name='add_ad'),
    path('ad_manage/', ad_manage, name='ad_manage'),
    path('notification/', notification, name='notification'),
    path('add-ad/', views.add_ad, name='add_ad'),
]

# إضافة إعدادات الملفات الإعلامية
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)