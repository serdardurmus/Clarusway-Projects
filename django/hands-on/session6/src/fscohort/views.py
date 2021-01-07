from django.shortcuts import render, redirect
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

def student_add(request):
    form = StudentForm()
    if request.method == "POST":
        print(request.POST)
        form = StudentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("list")
    context = {
        'form': form
    }
    return render(request, "fscohort/student_add.html", context)

def student_detail(request, id):
    student = Student.objects.get(id=id)
    context = {
        'student': student
    }
    return render(request, "fscohort/student_detail.html", context)