from django.urls import path
from .views import home_view, student_list, student_add, student_detail

urlpatterns = [
    path("", home_view, name="home"),
    path("list/", student_list, name="list"),
    path("add/", student_add, name="add"),
    path("<int:id>", student_detail, name="detail"),
    # path("about/", about)
]