from . import views
from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('categories/', views.CategorySelectView.as_view(), name='category-list'),
    path('foods/<str:category>/', views.FoodListView.as_view(), name='food-list'),
    path('food/<int:food_id>/', views.FoodDetailView.as_view(), name='food-detail'),
    path('add_menu/', views.HandleMenuView.as_view(), name='handle-menu'),
    path('food/<int:pk>/edit/',
         views.EditFoodView.as_view(), name='edit-food'),
    path('food/<int:pk>/delete/',
         views.DeleteFoodView.as_view(), name='delete-food'),
    path('api/categories/', views.CategoryAPIView.as_view(),
         name='api-category-list'),
    path('api/foods/', views.FoodAPIView.as_view(), name='api-food-list'),
    path('api/foods/<int:food_id>/',
         views.FoodAPIView.as_view(), name='api-food-detail'),
    path('foods/category/<str:category>/',
         views.FoodListByCategoryView.as_view(), name='food-list-by-category'),
    path('food/cost/<str:cost>/',
         views.FoodByCostView.as_view(), name='food-by-cost'),
    path('api/filter-options/', views.FilterOptionListAPIView.as_view(),
         name='filter-options'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
