# Generated by Django 4.0.3 on 2022-12-09 03:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='appointment',
            old_name='VIP',
            new_name='vip',
        ),
    ]