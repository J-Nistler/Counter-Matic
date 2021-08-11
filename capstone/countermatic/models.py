from django.db import models

# Create your models here.
class Vendor(models.Model):
    vendor_name = models.CharField(max_length = 50)
    sushi_url = models.URLField()
    requestor_id = models.CharField(max_length = 50, null=True, blank=True)
    requestor_name = models.CharField(max_length = 50, null=True, blank=True)
    customer_id = models.CharField(max_length = 50, null=True, blank=True)
    customer_name = models.CharField(max_length = 50, null=True, blank=True)
    user_name = models.CharField(max_length = 50, null=True, blank=True)
    password = models.CharField(max_length = 50, null=True, blank=True)
    requestor_email = models.EmailField(null=True, blank=True)
    api_key = models.CharField(max_length = 75, null=True, blank=True)
    platform = models.CharField(max_length = 50, null=True, blank=True)

    def __str__(self):
        return self.vendor_name