from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from django.views.generic.base import RedirectView
from django.views.static import serve
from django.conf import settings
from django.conf.urls.static import static
from django.http import JsonResponse

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('api/courses/', include('courses.urls')),
    path('courses/', TemplateView.as_view(template_name='index.html')),
    # path('<path:path>/', RedirectView.as_view(url='/', permanent=False)),
]

urlpatterns += [
    re_path(r'^manifest\.json$', serve, {'document_root': settings.BASE_DIR / 'frontend/build', 'path': 'manifest.json'}),
    re_path(r'^logo192\.png$', serve, {'document_root': settings.BASE_DIR / 'frontend/build', 'path': 'logo192.png'}),
    re_path(r'^favicon\.ico$', serve, {'document_root': settings.BASE_DIR / 'frontend/build', 'path': 'favicon.ico'}),
]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
