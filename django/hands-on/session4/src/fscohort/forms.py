from django import forms
from .models import Student

# 
# class StudentForm(forms.Form):
#     first_name = forms.CharField(max_length=50, label="Your Name")
#     last_name = forms.CharField(max_length=50, label="Your Surname")
#     number = forms.IntegerField()


# Modelform
class StudentForm(forms.ModelForm):

    first_name = forms.CharField(label="Your Name")  # override ettik. first_name, Your name oldu

    class Meta:
        model = Student
        # fields = ("first_name", "last_name")
        fields = '__all__'

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        self.fields['first_name'].label="My Name"  # override ettik. Your name, My Name oldu