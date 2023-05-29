from rest_framework import serializers
from app.models import Pessoas

class CadastroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pessoas
        fields = ('id','nome','cpf', 'email',)