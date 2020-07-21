from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('blog', views.blog, name='blog'),
    path('profile', views.about, name='about'),
    path('post/<int:pk>/', views.post_detail, name='post_detail'),
]