# Generated by Django 3.0.5 on 2020-04-28 08:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('activity', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='activity',
            old_name='content',
            new_name='description',
        ),
    ]
