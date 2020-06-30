from django import template
register = template.Library()

@register.simple_tag
def url_replace(request, field, value):
    d = request.GET.copy()
    print(d)
    if d.__contains__(field):
        print("inlist")
        d[field] = value
    else: 
        print("not in list")
        d.appendlist('page', value) 
    return d.urlencode()