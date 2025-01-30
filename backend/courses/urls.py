from django.urls import path
from .views import CourseListView, CourseDetailView

urlpatterns = [
    path('', CourseListView.as_view(), name='course-list'),
    path('course-<int:pk>/', CourseDetailView.as_view(), name='course-detail'),
]
