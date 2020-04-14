from django.shortcuts import render, redirect
from django.contrib import messages
from rest_framework import viewsets
from .serializers import ProfileSerializer
from .models import Profile
from .forms import UserRegisterForm, UserUpdateForm, ProfileUpdateForm

# Create your views here.


def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(
                request, f'Konto skapat för {username}! Du kan nu logga in med ditt valda användarnamn och lösenord'
            )
            return redirect('login')
    else:
        form = UserRegisterForm()
    return render(request, 'users/register.html', {'form': form})

class ProfileView(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()