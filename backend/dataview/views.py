from django.shortcuts import render
from django.views.generic import TemplateView, ListView, DetailView
from django.contrib.auth.mixins import LoginRequiredMixin
from classes.models import Class
from bookings.models import Booking
from datetime import date
from django.http import HttpResponseRedirect
from django.urls import reverse
# Create your views here.


class CompletedClassesListView(LoginRequiredMixin, ListView):
    login_url = '/admin/login/'
    queryset = Class.objects.filter(date__lt=date.today()).reverse()
    template_name = 'dataview/completed.html'
    context_object_name = 'classes'
    ordering = ['date']
    # adds a paginator and page_obj to the context
    paginate_by = 20


class ComingClassesListView(LoginRequiredMixin, ListView):
    login_url = '/admin/login/'
    queryset = Class.objects.filter(date__gt=date.today())
    template_name = 'dataview/coming.html'
    context_object_name = 'classes'
    ordering = ['date']


class TodaysClassesListView(LoginRequiredMixin, ListView):
    login_url = '/admin/login/'
    queryset = Class.objects.filter(date=date.today())
    template_name = 'dataview/home.html'
    context_object_name = 'classes'
    ordering = ['date']


class ClassDetailView(LoginRequiredMixin, DetailView):
    login_url = '/admin/login/'
    model = Class
    template_name = 'dataview/detail.html'
    context_object_name = 'class'

    def get_context_data(self, **kwargs):
        context = super(ClassDetailView, self).get_context_data(**kwargs)
        context['bookings'] = Booking.objects.filter(
            classID=self.kwargs['pk']).order_by('name')
        return context


class CancelBookingView(LoginRequiredMixin, DetailView):
    login_url = '/admin/login/'
    model = Booking
    template_name = 'dataview/cancel.html'
    context_object_name = 'toBeCanceled'

    def get_context_data(self, **kwargs):
        context = super(CancelBookingView, self).get_context_data(**kwargs)
        bookingInstance = Booking.objects.get(pk=self.kwargs['pk'])
        context['bookings'] = Booking.objects.filter(classID=bookingInstance.classID).order_by('name')
        return context

def delete_booking(request, pk):
    booking = Booking.objects.get(pk=pk)
    classID = booking.classID
    booking.delete()
    url = reverse('dataDetailView', args=[classID.pk])
    return HttpResponseRedirect(url)
    