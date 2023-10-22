from .serializers import FAQSerializer, SubscriptionSerializer
from .models import FAQ, Subscription
from rest_framework import generics
from django.views import View
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response


class SubscriptionPlansView(View):
    def get(self, request):
        plans = Subscription.objects.all()
        return render(request, {'plans': plans})


class SubscriptionListAPIView(APIView):
    def get(self, request):
        subscriptions = Subscription.objects.all()
        serializer = SubscriptionSerializer(subscriptions, many=True)
        return Response(serializer.data)


class FAQListCreateView(generics.ListCreateAPIView):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer


class FAQRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer
