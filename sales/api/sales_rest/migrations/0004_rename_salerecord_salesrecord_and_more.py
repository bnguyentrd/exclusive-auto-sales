# Generated by Django 4.0.3 on 2022-12-08 02:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0003_rename_salesrecord_salerecord_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='SaleRecord',
            new_name='SalesRecord',
        ),
        migrations.AlterField(
            model_name='salesrep',
            name='employee_id',
            field=models.CharField(max_length=25, unique=True),
        ),
    ]
