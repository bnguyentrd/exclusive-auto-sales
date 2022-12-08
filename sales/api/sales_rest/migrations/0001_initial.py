# Generated by Django 4.0.3 on 2022-12-07 18:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AutomobileVO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('import_href', models.CharField(max_length=200, unique=True)),
                ('vin', models.CharField(max_length=17, null=True, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='SalesCustomer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('address', models.CharField(max_length=200)),
                ('phone_number', models.CharField(max_length=10, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='SalesRep',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('employee_id', models.CharField(max_length=25, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='SaleRecord',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sales_price', models.PositiveBigIntegerField()),
                ('sales_automobile', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='sales_auto', to='sales_rest.automobilevo')),
                ('sales_customer', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='sales_customer', to='sales_rest.salescustomer')),
                ('sales_rep', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='sales_rep', to='sales_rest.salesrep')),
            ],
        ),
    ]
