# Generated by Django 3.0.5 on 2020-05-19 08:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('instructors', '0002_auto_20200504_1247'),
        ('classes', '0010_auto_20200514_0856'),
    ]

    operations = [
        migrations.AlterField(
            model_name='class',
            name='instructor',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='instructors.Instructor'),
        ),
        migrations.AlterField(
            model_name='class',
            name='registered_attendees',
            field=models.PositiveIntegerField(default=0, editable=False),
        ),
    ]
