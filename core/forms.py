from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.forms import ModelForm
from django import forms
from .models import Ad



class signupform(UserCreationForm):
    class Meta:
        model = User
        fields = ['username','email','password1','password2']

      
 # تأكد من استيراد النموذج الخاص بك

class AdForm(forms.ModelForm):
    class Meta:
        model = Ad  # النموذج الذي يحتوي على الحقول
        fields = ['property_type','rooms', 'bathrooms', 'adults', 'children', 'city', 'street', 'images', 'description', 'price']
