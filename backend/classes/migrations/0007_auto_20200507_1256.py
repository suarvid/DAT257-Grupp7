# Generated by Django 3.0.5 on 2020-05-07 12:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('classes', '0006_auto_20200507_1234'),
    ]

    operations = [
        migrations.AlterField(
            model_name='class',
            name='max_attendees',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='class',
            name='registered_attendees',
            field=models.PositiveIntegerField(default=0),
        ),
    ]