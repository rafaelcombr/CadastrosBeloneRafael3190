from django.contrib import admin
from app.models import Pessoas

# Register your models here.

class Pessoa(admin.ModelAdmin):
    list_display = ('id', 'nome', 'cpf', 'email') 
    list_display_links = ('id', 'nome', 'cpf', 'email') 
    search_fields = ('nome', 'id',)

admin.site.register(Pessoas, Pessoa)
