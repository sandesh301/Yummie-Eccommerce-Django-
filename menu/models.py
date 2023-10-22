from django.db import models


class Category(models.Model):
    category = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.category


class FilterOption(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Food(models.Model):
    name = models.CharField(max_length=100)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    description = models.TextField(default="")
    nutrition_facts_ingredients = models.TextField(
        default="Facts not available")
    heating_instruction = models.TextField(
        default="Instructions not available")
    food_image = models.ImageField(
        upload_to='food_images', null=True, blank=True)
    cost_per_item = models.DecimalField(
        max_digits=10, decimal_places=2, default=0.00)
    filters = models.ManyToManyField(FilterOption)

    def __str__(self):
        return self.name
