from django.http import JsonResponse
from django.shortcuts import get_object_or_404, redirect, render
from django.views import View
from django.views.generic import CreateView, DeleteView, UpdateView
from django.urls import reverse, reverse_lazy
from rest_framework.views import APIView
from rest_framework.response import Response
from menu.models import Category, Food, FilterOption
from .froms import FoodForm
from .serializers import CategorySerializer, FilterOptionSerializer, FoodSerializer
from rest_framework import generics


class CategorySelectView(View):
    def get(self, request):
        return render(request, 'menu/menu.html')


class FoodListView(View):
    def get(self, request, category):
        category_obj = get_object_or_404(Category, category=category)
        foods = Food.objects.filter(category=category_obj)
        context = {'category': category_obj, 'foods': foods}
        return render(request, 'menu/food_list.html', context)


class FoodDetailView(View):
    def get(self, request, food_id):
        food = get_object_or_404(Food, pk=food_id)
        context = {'food': food}
        return render(request, 'menu/food_detail.html', context)


class HandleMenuView(CreateView):
    model = Food
    form_class = FoodForm
    template_name = 'menu/add_menu.html'
    success_url = reverse_lazy('category-list')


class EditFoodView(UpdateView):
    model = Food
    form_class = FoodForm
    template_name = 'menu/edit_food.html'

    def get_success_url(self):
        return reverse_lazy('food-detail', kwargs={'food_id': self.object.id})


class DeleteFoodView(DeleteView):
    model = Food
    template_name = 'menu/delete_food.html'

    def get_success_url(self):
        return reverse('category-list')


class CategoryAPIView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)


class FoodAPIView(APIView):
    def get(self, request):
        foods = Food.objects.all()
        serializer = FoodSerializer(foods, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = FoodSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def put(self, request, food_id):
        food = get_object_or_404(Food, pk=food_id)
        serializer = FoodSerializer(food, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, food_id):
        food = get_object_or_404(Food, pk=food_id)
        food.delete()
        return Response(status=204)


class FoodListByCategoryView(APIView):
    def get(self, request, category):
        foods = Food.objects.filter(category__category=category)
        serializer = FoodSerializer(foods, many=True)
        return Response(serializer.data)


class FoodByCostView(View):
    def get(self, request, cost):
        try:
            food = Food.objects.get(cost_per_item=cost)
            data = {
                'id': food.id,
                'name': food.name,
                'category': food.category.category,
                'description': food.description,
                # Add other fields as needed
            }
            return JsonResponse(data)
        except Food.DoesNotExist:
            return JsonResponse({'error': 'Food item not found.'}, status=404)


class FilterOptionListAPIView(generics.ListAPIView):
    queryset = FilterOption.objects.all()
    serializer_class = FilterOptionSerializer
