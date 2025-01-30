from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404

fake_courses = [
    {"id": 1, "title": "Beginner Yoga", "price": "49.99", "image": "https://www.davidhechler.com/wp-content/uploads/2016/07/500x500-dummy-image.jpg"},
    {"id": 2, "title": "Intermediate Yoga", "price": "59.99", "image": "https://www.davidhechler.com/wp-content/uploads/2016/07/500x500-dummy-image.jpg"},
    {"id": 3, "title": "Advanced Yoga", "price": "69.99", "image": "https://www.davidhechler.com/wp-content/uploads/2016/07/500x500-dummy-image.jpg"},
    {"id": 4, "title": "Yoga for Flexibility", "price": "39.99", "image": "https://www.davidhechler.com/wp-content/uploads/2016/07/500x500-dummy-image.jpg"},
]

class CourseListView(APIView):
    def get(self, request):
        return Response(fake_courses)

class CourseDetailView(APIView):
    def get(self, request, pk):
        course = next((c for c in fake_courses if c["id"] == pk), None)
        if course is None:
            raise Http404
        return Response(course)
