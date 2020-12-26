from django.shortcuts import render
from django.http import HttpResponse
from .forms import StudentForm

# Create your views here.
def home_view(request):
    # print(request.GET.get("q"))
    # print(request.user)
    # print(request.path)
    # print(request.method)
    # print(request.COOKIES)
    # return HttpResponse("Hello world.")

    form = StudentForm()

    my_context = {
        'title': '<h1>clarusway</h1>',
        'dict_1': { 'django': 'best framework'},
        'my_list': [1,2,3,4,5],
        'form': form
    }
    return render(request, "fscohort/home.html", my_context)

def about(request):
    return HttpResponse("About page")