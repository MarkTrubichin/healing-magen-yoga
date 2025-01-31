import React, { useState, useEffect } from 'react';
import '../styles/courses-page.css';

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/courses/")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="page-title">Our Courses</h1>
        <div className="courses-container">
          {courses.length > 0 ? (
            courses.map((course) => {
              console.log("Course image URL:", course.image); // Лог пути к картинке
              return (
                <div key={course.id} className="course-card">
                  <img src={`http://127.0.0.1:8000${course.image}`} alt={course.title} className="course-image"/>
                  <h2 className="course-title">{course.title}</h2>
                  <button className="view-more-btn">View More</button>
                </div>
              );
            })
          ) : (
            <p className="loading">Loading courses...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;
