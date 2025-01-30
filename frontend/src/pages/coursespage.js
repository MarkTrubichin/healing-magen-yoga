import React from 'react';
import '../styles/main-page.css';
import '../styles/courses-page.css';

function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Beginner Yoga Course",
      price: "$49.99",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Sequoiadendron_giganteum_at_Kenilworth_Castle.jpg/640px-Sequoiadendron_giganteum_at_Kenilworth_Castle.jpg",
    },
    {
      id: 2,
      title: "Intermediate Yoga Course",
      price: "$59.99",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Sequoiadendron_giganteum_at_Kenilworth_Castle.jpg/640px-Sequoiadendron_giganteum_at_Kenilworth_Castle.jpg",
    },
    {
      id: 3,
      title: "Advanced Yoga Course",
      price: "$69.99",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Sequoiadendron_giganteum_at_Kenilworth_Castle.jpg/640px-Sequoiadendron_giganteum_at_Kenilworth_Castle.jpg",
    },
    {
      id: 4,
      title: "Yoga for Flexibility",
      price: "$39.99",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Sequoiadendron_giganteum_at_Kenilworth_Castle.jpg/640px-Sequoiadendron_giganteum_at_Kenilworth_Castle.jpg",
    }
  ];

  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="page-title">Our Courses</h1>
        <div className="courses-container">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <img src={course.image} alt={course.title} className="course-image" />
              <h2 className="course-title">{course.title}</h2>
              <p className="course-price">{course.price}</p>
              <button className="view-more-btn">View More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;
