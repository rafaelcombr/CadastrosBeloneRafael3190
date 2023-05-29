from rest_framework import serializers
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from app.serializer import CadastroSerializer
from app.models import Pessoas
from rest_framework import viewsets
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json




class CadastroViewSet(viewsets.ModelViewSet):
    queryset = Pessoas.objects.all()
    serializer_class = CadastroSerializer

@csrf_exempt
def verificar(request):
    data = json.loads(request.body)
    username = data.get('username')
    password = data.get('password')


    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return JsonResponse({'message': 'Login successful'})
    else:
        return JsonResponse({'message': 'Login failed'}, status=401)