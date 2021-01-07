from django.shortcuts import render
from django.http import HttpResponse
from .forms import StudentForm
from .models import Student
# Create your views here.


def home_view(request):
    
    return render(request, "fscohort/home.html")

def student_list(request):
    students = Student.objects.all()
    context = {
        'students': students
    }
    return render(request, "fscohort/student_list.html", context)

def about(request):
    return HttpResponse("About page!")