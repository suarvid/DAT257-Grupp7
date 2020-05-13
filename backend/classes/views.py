from django.shortcuts import render

def doublebooked_error(request):
    return render(request, 'classes/doublebooked.html')