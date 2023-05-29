from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from app.views import CadastroViewSet, verificar

router = routers.DefaultRouter()
router.register(r'cadastros', CadastroViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('entrar/', verificar, name='entrar'),
    path('', include(router.urls)),
]
