from django.shortcuts import render, get_object_or_404
from django.utils import timezone
from .models import Post
from .forms import PostForm
from django.shortcuts import redirect

def home(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('-published_date')[:3]
    return render(request, 'home.html', {'posts':posts, 'page_title':'home'})

def blog(request):
    title = request.GET.get('title','')

    posts = Post.objects.filter(published_date__lte=timezone.now(), title__icontains=title).order_by('published_date')
    return render(request, 'blog.html', {'posts': posts, 'page_title':'blog'})

def about(request):
    return render(request, 'about.html', {'page_title':'about'})

def post_detail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'post_detail.html', {'post': post,'page_title':'blog'})

def post_new(request):
    if request.method == "POST":
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.published_date = timezone.now()
            post.save()
            return redirect('post_detail', pk=post.pk)
    else:
        form = PostForm()
    return render(request, 'blog/post_edit.html', {'form': form})

def post_edit(request, pk):
    post = get_object_or_404(Post, pk=pk)
    if request.method == "POST":
        form = PostForm(request.POST, instance=post)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.published_date = timezone.now()
            post.save()
            return redirect('post_detail', pk=post.pk)
    else:
        form = PostForm(instance=post)
    return render(request, 'blog/post_edit.html', {'form': form})
