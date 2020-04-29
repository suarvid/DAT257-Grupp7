# Generated by Django 3.0.5 on 2020-04-28 12:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('classes', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='class',
            name='max_attendees',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='class',
            name='registered_attendees',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='class',
            name='description',
            field=models.CharField(blank=True, max_length=240),
        ),
    ]
