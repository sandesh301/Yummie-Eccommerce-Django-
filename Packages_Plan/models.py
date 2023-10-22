from django.db import models


class Subscription(models.Model):
    items_per_week = models.IntegerField()
    cost_per_item = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Subscription: {self.items_per_week} items/week, Rs.{self.cost_per_item} per item"


class FAQ(models.Model):
    topic = models.CharField(max_length=100)
    question = models.TextField()
    answer = models.TextField()

    def __str__(self):
        return self.topic
