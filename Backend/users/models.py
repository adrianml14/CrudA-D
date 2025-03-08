from django.db import models

class User (models.Model):
    id= models.AutoField(primary_key = True)
    name = models.CharField(max_length = 255)
    email = models.CharField(max_length = 255)
    gender = models.CharField(max_length = 10)
    
    def __str__(self):
        return self.name
