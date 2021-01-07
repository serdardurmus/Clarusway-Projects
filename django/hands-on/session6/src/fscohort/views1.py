from django.shortcuts import render
from django.http import HttpResponse
from .forms import StudentForm

# Create your views here.

# def home_view(request):
#     print(request)
#     print(request.GET)
#     print(request.GET.get("q"))
#     print(request.COOKIES)
#     print(request.user)
#     print(request.path)
#     print(request.method)
#     return HttpResponse("Hello World!")

def home_view(request):
    form = StudentForm()
    my_context = {
        'title': 'serdar',
        'title2': '<b>durmus</b>',
        'dict_1': {
            'django': 'best framework'
        },
        'my_list': [2,3,4,5],
        'form': form
    }
    return render(request, "fscohort/home.html", my_context)

def about(request):
    return HttpResponse("About page!")