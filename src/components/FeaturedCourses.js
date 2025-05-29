import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';
import courses from '../data/courses';
import '../styles/FeaturedCourses.css';

const FeaturedCourses = () => {
  // Get the first 4 courses for the featured section
  const featuredCourses = courses.slice(0, 4);

  return (
    <section className="featured-courses section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Courses</h2>
          <p className="section-subtitle">
            Start your development journey with our most popular courses
          </p>
        </div>
        
        <div className="courses-grid">
          {featuredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        <div className="view-all-container">
          <Link to="/courses" className="btn btn-primary">View All Courses</Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;