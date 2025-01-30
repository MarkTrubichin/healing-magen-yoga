import React, { useState, useEffect } from 'react';
import '../styles/main-page.css';
import '../styles/courses-page.css';

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  const API_URL = process.env.REACT_APP_API_URL;

  console.log('API URL:', process.env.REACT_APP_API_URL);

  useEffect(() => {
    if (!API_URL) {
      console.error("API_URL is not defined!");
      return;
    }
    
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => {
        console.error('Error fetching courses:', error);
      });
  }, [API_URL]);


  
  
  

  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="page-title">Our Courses</h1>
        <div className="courses-container">
          {courses.length > 0 ? (
            courses.map((course) => (
              <div key={course.id} className="course-card">
                <img src={course.image} alt={course.title} className="course-image" />
                <h2 className="course-title">{course.title}</h2>
                <p className="course-price">${course.price}</p>
                <button className="view-more-btn">View More</button>
              </div>
            ))
          ) : (
            <p className="loading">Loading courses...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;
