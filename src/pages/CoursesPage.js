import React, { useState } from 'react';
import CourseCard from '../components/CourseCard';
import courses from '../data/courses';
import '../styles/CoursesPage.css';

const CoursesPage = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filterCourses = () => {
    let filteredCourses = [...courses];
    
    // Apply level filter
    if (filter !== 'all') {
      filteredCourses = filteredCourses.filter(course => course.level.toLowerCase() === filter);
    }
    
    // Apply search filter
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      filteredCourses = filteredCourses.filter(course => 
        course.title.toLowerCase().includes(term) || 
        course.description.toLowerCase().includes(term) ||
        course.topics.some(topic => topic.toLowerCase().includes(term))
      );
    }
    
    return filteredCourses;
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCourses = filterCourses();

  return (
    <div className="courses-page">
      <div className="courses-header">
        <div className="container">
          <h1>Explore Our Free Courses</h1>
          <p>Learn at your own pace with our comprehensive, project-based courses</p>
        </div>
      </div>
      
      <div className="container">
        <div className="courses-filters">
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Search courses..." 
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <i className="fas fa-search"></i>
          </div>
          
          <div className="filter-options">
            <label>Filter by level:</label>
            <select value={filter} onChange={handleFilterChange}>
              <option value="all">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>
        
        <div className="courses-count">
          <p>Showing {filteredCourses.length} courses</p>
        </div>
        
        <div className="courses-grid">
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <div className="no-courses">
              <h3>No courses found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;