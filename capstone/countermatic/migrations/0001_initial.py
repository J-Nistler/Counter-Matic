# Generated by Django 3.2.4 on 2021-08-11 01:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Vendor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vendor_name', models.CharField(max_length=50)),
                ('sushi_url', models.URLField()),
                ('requestor_id', models.CharField(blank=True, max_length=50, null=True)),
                ('requestor_name', models.CharField(blank=True, max_length=50, null=True)),
                ('customer_id', models.CharField(blank=True, max_length=50, null=True)),
                ('customer_name', models.CharField(blank=True, max_length=50, null=True)),
                ('user_name', models.CharField(blank=True, max_length=50, null=True)),
                ('password', models.CharField(blank=True, max_length=50, null=True)),
                ('requestor_email', models.EmailField(blank=True, max_length=254, null=True)),
                ('api_key', models.CharField(blank=True, max_length=75, null=True)),
                ('platform', models.CharField(blank=True, max_length=50, null=True)),
            ],
        ),
    ]
