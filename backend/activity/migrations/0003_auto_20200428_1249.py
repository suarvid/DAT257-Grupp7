# Generated by Django 3.0.5 on 2020-04-28 12:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('activity', '0002_auto_20200428_0846'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activity',
            name='image',
            field=models.ImageField(default='media/pictures/default_activity.jpg', upload_to='media/pictures/activity_pics'),
        ),
    ]
