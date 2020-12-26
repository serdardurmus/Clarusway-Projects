# Django Hands-on Trainings

# install
- .gitignore
- py -m venv myenv  // Bu zorunlu değil, best pracsis
- .\myenv\Scripts\activate
- pip install django
- pip freeze // yukarıdaki kodun yüklendiğini anlıyoruz
- pip freeze >.\requirement.txt    (update)
- django-admin startproject clarusway(proje adi)
- mv .\clarusway\ src // iki tane iç içe clarusway klasörü oluyor. 1.nin adını değiştiriyoruz.

- py manage.py startapp fscohort

- py manage.py runserver

- py manage.py makemigrations
- py manage.py migrate

- py manage.py createsuperuser

- py manage.py shell
- from fscohort.models import Student
- s1 = Student(sir_name="John", last_name="D", number=123)
- s1.save()
s3 = Student.objects.create(sir_name="Mert", last_name="M", number=753) // save e gerek yok
#
// django
/*/*/*/*/*/*/*/*/*/*/
CREATE PROJECT & APP
/*/*/*/*/*/*/*/*/*/*/
$ python -m pip install --upgrade pip
$ py -m venv env
$ .\env\Scripts\activate
$ pip install django
$ pip freeze
$ pip freeze > requirement.txt
$ django-admin startproject clarusway
$ cd clarusway
$ py manage.py startapp fscohort
$ py manage.py runserver // server ı çalıştırma // sonuna çalışmasını istediğimiz portu yazabiliyoruz
$ py manage.py migrate
$ py manage.py createsuperuser
$ py manage.py check // ile hataları da kontrol edebiliriz
https://docs.djangoproject.com/en/3.1/topics/db/models/
/*/*/*/*/*/*/*/*/
M O D E L
/*/*/*/*/*/*/*/*/
fscohort/models.py
from django.db import models
class Student(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    number = models.IntegerField()
MODEL oluşturduktan sonra
$ py manage.py makemigrations  // birleştirmeye hazırlama
$ py manage.py migrate  // birleştirme
$ py manage.py runserver  // serverı tekrar çalıştırıyoruz
// Modelimizi admin.py içeririsine import ediyoruz
from .models import Student
admin.site.register(Student)