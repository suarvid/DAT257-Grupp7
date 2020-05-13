from django.shortcuts import render
from django.views.generic import TemplateView, ListView, DetailView
from django.contrib.auth.mixins import LoginRequiredMixin
from classes.models import Class
from bookings.models import Booking
from datetime import date
# Create your views here.

# Fix this, filter by if date is leq or geq than todays date


class CompletedClassesListView(ListView):
    queryset = Class.objects.filter(date__lt=date.today()).reverse()
    template_name = 'dataview/completed.html'
    context_object_name = 'classes'
    ordering = ['date']
    #adds a paginator and page_obj to the context
    paginate_by = 20


class ComingClassesListView(ListView):
    queryset = Class.objects.filter(date__gt=date.today())
    template_name = 'dataview/coming.html'
    context_object_name = 'classes'
    ordering = ['date']


class TodaysClassesListView(ListView):
     queryset = Class.objects.filter(date = date.today())
     template_name = 'dataview/home.html'
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
