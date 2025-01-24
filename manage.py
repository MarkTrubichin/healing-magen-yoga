import os
import sys

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(os.path.join(os.path.dirname(os.path.abspath(__file__)), "backend"))

current_path = os.path.dirname(os.path.abspath(__file__))
sys.path.append(os.path.join(current_path, "backend"))

if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
    from django.core.management import execute_from_command_line
    execute_from_command_line(sys.argv)
