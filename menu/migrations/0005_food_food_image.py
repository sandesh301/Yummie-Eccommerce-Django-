# Generated by Django 4.2.3 on 2023-07-07 09:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0004_rename_name_category_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='food',
            name='food_image',
            field=models.ImageField(blank=True, null=True, upload_to='static/food_images'),
        ),
    ]