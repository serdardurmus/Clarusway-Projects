from django import forms
from .models import Student

# class StudentForm(forms.Form):
#     first_name = forms.CharField(max_length=50, required=False)
#     last_name = forms.CharField(max_length=50, required=False)
#     number = forms.IntegerField()

class StudentForm(forms.ModelForm):
    
    # Yöntem 1
    # first_name = forms.CharField( label="Your Name" ,max_length=50, required=False)
    
    class Meta:
        model = Student
        # fields = ("first_name", "last_name")
        fields = "__all__"
       
    # Yöntem 2 Override
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        
        self.fields['first_name'].label = "My Name"
        
