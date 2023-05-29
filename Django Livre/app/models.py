from django.db import models

# Create your models here.

class Pessoas(models.Model):
    nome  = models.CharField(max_length=100)
    cpf   = models.CharField(max_length=14)
    email = models.EmailField()

    def __str__(self):
        return self.nome