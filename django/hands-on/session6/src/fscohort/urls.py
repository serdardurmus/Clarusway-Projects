from django.urls import path
from .views import home_view, about, student_list, student_add, student_detail, student_delete

urlpatterns = [
    path("", home_view, name="home"),
    path("home/", home_view, name="home"),
    path("about/", about, name="about"),
    path("list/", student_list, name="list"),
    path("add/", student_add, name="add"),
    path("<int:id>", student_detail, name="detail"),
    path("<int:id>/delete", student_delete, name="delete"),
]
