from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home_view(request):
    return HttpResponse("Hi, this is fscohort Home Page")

def about_view(request):
    return HttpResponse("Hi, this is fscohort About Page")