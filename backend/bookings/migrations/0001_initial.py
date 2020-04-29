# Generated by Django 3.0.5 on 2020-04-29 11:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('classes', '0004_class_price'),
    ]

    operations = [
        migrations.CreateModel(
            name='Booking',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('email', models.CharField(max_length=120)),
                ('phone_number', models.IntegerField(default=0)),
                ('classID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='classes.Class')),
            ],
            options={
                'unique_together': {('classID', 'phone_number')},
            },
        ),
    ]
