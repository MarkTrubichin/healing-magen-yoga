from django.contrib import admin
from django.urls import path, re_path
from api.views import index
from django.views.static import serve
from django.conf import settings
from django.http import JsonResponse



urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
]


urlpatterns += [

    re_path(r'^manifest\.json$', serve, {
        'document_root': settings.BASE_DIR / '../frontend/build',
        'path': 'manifest.json',
    }),
    

    re_path(r'^logo192\.png$', serve, {
        'document_root': settings.BASE_DIR / '../frontend/build',
        'path': 'logo192.png',
    }),

    re_path(r'^favicon\.ico$', serve, {
        'document_root': settings.BASE_DIR / '../frontend/build',
        'path': 'favicon.ico',
    }),
]



if settings.DEBUG:
    urlpatterns += [
        re_path(r'^(?P<path>.*)$', serve, {
            'document_root': settings.BASE_DIR / '../frontend/build',
        }),
    ]

def dummy_api_view(request):
    return JsonResponse({'message': 'API endpoint is not implemented'}, status=501)

urlpatterns += [
    path('api/endpoint/', dummy_api_view),
]