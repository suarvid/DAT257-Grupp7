# Generated by Django 3.0.5 on 2020-05-14 06:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('locations', '0001_initial'),
        ('classes', '0009_auto_20200513_1411'),
    ]

    operations = [
        migrations.AlterField(
            model_name='class',
            name='location',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='locations.Location'),
        ),
    ]
