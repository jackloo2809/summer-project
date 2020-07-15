from django.shortcuts import render, get_object_or_404
from django.utils import timezone
from .models import Post
from .forms import PostForm
from django.shortcuts import redirect

def home(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('-published_date')[:3]
    return render(request, 'homepage.html', {'posts':posts})

def blog(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    print(request.POST)
    """
    #----------------- FILTER --------------------
    myfilter = Blog_filter(request.GET, queryset=posts)
    posts = myfilter.qs
    orderVal = request.GET.get('order')
    if orderVal == 'up':
        posts = posts.filter(published_date__lte=timezone.now()).order_by('published_date')
    elif orderVal == 'down':
        posts = posts.filter(published_date__lte=timezone.now()).order_by('-published_date')


     #------------------paginator -----------------
    p = Paginator(posts, 4)
    page_number = request.GET.get('page')
    page_obj = p.get_page(page_number)
    """

    return render(request, 'blog.html', {'posts': posts,})

def profile(request):
    return render(request, 'profile.html', {})

def post_detail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'blog/post_detail.html', {'post': post})

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
