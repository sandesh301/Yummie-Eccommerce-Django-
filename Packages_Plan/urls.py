from . import views
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('subscription/', views.SubscriptionPlansView.as_view(),
         name='subscription-plans'),
    path('api/subscriptions/', views.SubscriptionListAPIView.as_view(),
         name='subscription-list'),
    path('faqs/', views.FAQListCreateView.as_view(), name='faq-list-create'),
    path('faqs/<int:pk>/', views.FAQRetrieveUpdateDeleteView.as_view(),
         name='faq-retrieve-update-delete'),
]
