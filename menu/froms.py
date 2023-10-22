from django import forms
from .models import Food


class FoodForm(forms.ModelForm):
    class Meta:
        model = Food
        fields = ['name', 'category', 'description',
                  'nutrition_facts_ingredients', 'heating_instruction', 'food_image']
