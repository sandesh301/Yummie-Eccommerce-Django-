# Generated by Django 4.2 on 2023-07-10 05:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0006_alter_food_food_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='food',
            name='nutrition_facts_ingredients',
            field=models.TextField(default='Facts not available'),
        ),
    ]
