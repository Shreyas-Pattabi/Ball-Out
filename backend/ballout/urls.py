from django.urls import path
from . import views

urlpatterns = [
    path('free_players/', views.get_free_players, name='get_free_players'),
    path('create_account/', views.create_user, name='create_user'),
    path('login/', views.login, name='login'),
]