from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.

class Ad(models.Model):
    PROPERTY_TYPES = [
        ('room', 'غرفة'),
        ('apartment', 'شقة'),
        ('studio', 'استوديو'),
        ('villa', 'فيلا'),
        ('resort', 'منتجع')
    ]
    
    # نوع العقار
    property_type = models.CharField(max_length=20, choices=PROPERTY_TYPES)

    # عدد الغرف
    rooms = models.PositiveIntegerField()

    # عدد الحمامات
    bathrooms = models.PositiveIntegerField()

    # عدد البالغين
    adults = models.PositiveIntegerField()

    # عدد الأطفال
    children = models.PositiveIntegerField()

    # المدينة
    city = models.CharField(max_length=100)

    # الشارع أو المنطقة
    street = models.CharField(max_length=100)

    # صور العقار
    images = models.ImageField(upload_to='property_images/', blank=True, null=True)

    # وصف العقار
    description = models.TextField()

    # السعر
    price = models.DecimalField(max_digits=10, decimal_places=2)

    # تاريخ الإنشاء
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"إعلان عن {self.property_type} في {self.city}"

