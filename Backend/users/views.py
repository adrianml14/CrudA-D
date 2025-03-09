from django.http import HttpRequest, HttpResponse
from .models import User
from .serializer import UserSerializer
from rest_framework import generics

# user by  id - get, update, delete
class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# get users
class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

#hola mundo
def helloWorld(HttpRequest):
    return HttpResponse("Hola mondongo")