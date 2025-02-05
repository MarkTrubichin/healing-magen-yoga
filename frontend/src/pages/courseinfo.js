import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/courses-info.css";

function CoursesInfo() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const isDebug = process.env.DEBUG === 'True';
    const apiUrl = isDebug
    ? "http://127.0.0.1:8000/api/courses/"
    : `${window.location.origin}/api/courses/${id}/`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setCourse(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching course:", error));
    }, [id]);

  if (loading) return <p className="loading">Loading course details...</p>;
  if (!course) return <p className="error">Course not found.</p>;

  return (
    <div className="wrapper">
      <div className="info-container">
        <h1 className="title">{course.title}</h1>
        <img src={course.image} alt={course.title} className="image" />
        <p className="description">{course.description}</p>
      </div>
    </div>
  );
}

export default CoursesInfo;
