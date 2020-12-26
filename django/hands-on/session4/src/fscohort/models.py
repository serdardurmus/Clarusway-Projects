from django.db import models

# Create your models here.
class Student(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    number = models.IntegerField()

    def __str__(self):
        # return self.first_name + " " + self.last_name
        return "{} {}".format(self.first_name, self.last_name)