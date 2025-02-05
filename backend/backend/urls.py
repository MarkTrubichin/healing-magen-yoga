from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from django.views.generic.base import RedirectView
from django.views.static import serve
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('api/courses/', include('courses.urls')),
    path('courses/', TemplateView.as_view(template_name='index.html')),
    path('contactus/', TemplateView.as_view(template_name='index.html')),
    path('<path:path>/', RedirectView.as_view(url='/', permanent=False)),
]


urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)



if settings.DEBUG:
    from django.conf.urls.static import static
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
else:
    urlpatterns += [
        re_path(r"^media/(?P<path>.*)$", serve, {"document_root": settings.MEDIA_ROOT}),
    ]

urlpatterns += [
    re_path(r'^(favicon\.ico|manifest\.json|logo192\.png)$', serve, {
        'document_root': settings.BASE_DIR / '../frontend/public',
    }),
]