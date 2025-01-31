from django.urls import path
from .views import CourseListView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', CourseListView.as_view(), name='course-list'),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)