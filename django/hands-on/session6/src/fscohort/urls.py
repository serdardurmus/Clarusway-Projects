from django.urls import path
from .views import home_view, about, student_list

urlpatterns = [
    path("", home_view),
    path("home/", home_view),
    path("about/", about),
    path("list/", student_list),
]
