from django.db import models

# Create your models here.
# Databes'e tablo koymak için modelleri kullanıyoruz. modellerle tabloları database e koyuypruz

class Student(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    number = models.IntegerField()
    
    def __str__(self):
        return self.first_name