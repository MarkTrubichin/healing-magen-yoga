import os
import json
from django.conf import settings
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response

class CourseListView(APIView):
    def get(self, request):
        try:
            courses_dir = os.path.join(settings.BASE_DIR, 'courses/courses_data')

            if not os.path.exists(courses_dir):
                return Response({"error": "Courses directory not found."}, status=500)

            courses_files = [f for f in os.listdir(courses_dir) if f.endswith('.json')]

            if not courses_files:
                return Response({"error": "No course files found."}, status=500)

            courses = []

            for course_file in courses_files:
                course_path = os.path.join(courses_dir, course_file)
                try:
                    with open(course_path) as file:
                        course_data = json.load(file)
                        
                        # Исправляем путь к изображению, если он указан относительно
                        if "image" in course_data and not course_data["image"].startswith("http"):
                            course_data["image"] = f"{settings.MEDIA_URL}{course_data['image'].lstrip('/')}"
                        
                        courses.append(course_data)
                except json.JSONDecodeError:
                    return Response({"error": f"Error decoding JSON in {course_file}"}, status=500)

            return Response(courses)

        except Exception as e:
            return Response({"error": f"An unexpected error occurred: {str(e)}"}, status=500)

class CourseDetailView(APIView):
    def get(self, request, pk):
        try:
            course_file = f'course_{pk}.json'
            course_path = os.path.join(settings.BASE_DIR, 'courses/courses_data', course_file)

            if not os.path.exists(course_path):
                raise Http404("Course not found")

            with open(course_path) as file:
                course_data = json.load(file)

            # Исправляем путь к изображению, если он указан относительно
            if "image" in course_data and not course_data["image"].startswith("http"):
                course_data["image"] = f"{settings.MEDIA_URL}{course_data['image'].lstrip('/')}"

            return Response(course_data)

        except FileNotFoundError:
            raise Http404("Course not found")

        except json.JSONDecodeError:
            return Response({"error": f"Error decoding JSON in {course_file}"}, status=500)

        except Exception as e:
            return Response({"error": f"An unexpected error occurred: {str(e)}"}, status=500)
