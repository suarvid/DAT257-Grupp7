from django.shortcuts import render
from django.views.generic import TemplateView, ListView, DetailView
from django.contrib.auth.mixins import LoginRequiredMixin
from classes.models import Class
from bookings.models import Booking
# Create your views here.



class ClassListView(ListView):
    model = Class
    template_name = 'dataview/list.html'
    context_object_name = 'classes'
    ordering = ['date']

# try defining a separate dictionary for the detail view since it needs two models
# https://stackoverflow.com/questions/12187751/django-pass-multiple-models-to-one-template
class ClassDetailView(DetailView):
    model = Class
    template_name = 'dataview/detail.html'
    context_object_name = 'class'

    def get_context_data(self, **kwargs):
        context = super(ClassDetailView, self).get_context_data(**kwargs)
        context['bookings'] = Booking.objects.filter(classID = self.kwargs['pk']).order_by('name')
        return context