from django.contrib import admin

# Register your models here.
from .models import *


admin.site.register(Category)
admin.site.register(Food)
admin.site.register(FilterOption)
