import os
import json
from django.conf import settings
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response

class CourseListView(APIView):
    def get(self, request):
        courses_dir = os.path.join(settings.BASE_DIR, 'courses/courses_data')

        if not os.path.exists(courses_dir):
            return Response({"error": "Courses directory not found."}, status=500)

        courses_files = [f for f in os.listdir(courses_dir) if f.endswith('.json')] 

        courses = []
        for course_file in courses_files:
            course_path = os.path.join(courses_dir, course_file)
            try:
                with open(course_path) as file:
                    course_data = json.load(file)

                    
                    if "image" in course_data and not course_data["image"].startswith("http"):
                        course_data["image"] = request.build_absolute_uri(course_data["image"])

                    courses.append(course_data)
            except json.JSONDecodeError:
                return Response({"error": f"Error decoding JSON in {course_file}"}, status=500)

        return Response(courses)
