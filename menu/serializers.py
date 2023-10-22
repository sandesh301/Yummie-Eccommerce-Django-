from rest_framework import serializers
from .models import Category, FilterOption, Food


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class FilterOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = FilterOption
        fields = '__all__'


class FoodSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='category.category')
    filters = FilterOptionSerializer(many=True)

    filters = serializers.PrimaryKeyRelatedField(
        queryset=FilterOption.objects.all(),
        many=True
    )

    class Meta:
        model = Food
        fields = '__all__'
