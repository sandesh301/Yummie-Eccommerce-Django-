# Generated by Django 4.2.3 on 2023-07-07 06:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(choices=[('kids_meal', 'Kids Meal'), ('finger_foods', 'Finger Foods'), ('superfood_smoothies', 'Superfood Smoothies'), ('snacks', 'Snacks')], max_length=100)),
                ('description', models.TextField()),
                ('image', models.ImageField(upload_to='category_images')),
            ],
        ),
    ]