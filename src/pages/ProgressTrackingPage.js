import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import courses from '../data/courses';
import { getProgress, resetProgress } from '../utils/api';
import '../styles/ProgressTrackingPage.css';

const ProgressTrackingPage = () => {
  const [courseProgress, setCourseProgress] = useState([]);

  useEffect(() => {
    // Load progress data from API and localStorage
    const loadProgress = async () => {
      const progressData = await getProgress();
      
      const progress = courses.map(course => {
        return {
          id: course.id,
          title: course.title,
          image: course.image,
          level: course.level,
          progress: progressData[course.id] || 0
        };
      });
      
      setCourseProgress(progress);
    };
    
    loadProgress();
  }, []);

  const handleResetProgress = async (courseId) => {
    // Reset progress using our API utility
    await resetProgress(courseId);
    
    // Update state
    setCourseProgress(prevProgress => 
      prevProgress.map(course => 
        course.id === courseId ? { ...course, progress: 0 } : course
      )
    );
  };

  // Group courses by progress status
  const inProgressCourses = courseProgress.filter(course => course.progress > 0 && course.progress < 100);
  const completedCourses = courseProgress.filter(course => course.progress === 100);
  const notStartedCourses = courseProgress.filter(course => course.progress === 0);

  return (
    <div className="progress-tracking-page">
      <div className="progress-header">
        <div className="container">
          <h1>My Learning Progress</h1>
          <p>Track your progress across all courses</p>
        </div>
      </div>
      
      <div className="container">
        <div className="progress-summary">
          <div className="summary-card">
            <div className="summary-number">{inProgressCourses.length}</div>
            <div className="summary-label">In Progress</div>
          </div>
          <div className="summary-card">
            <div className="summary-number">{completedCourses.length}</div>
            <div className="summary-label">Completed</div>
          </div>
          <div className="summary-card">
            <div className="summary-number">{notStartedCourses.length}</div>
            <div className="summary-label">Not Started</div>
          </div>
        </div>
        
        {inProgressCourses.length > 0 && (
          <div className="progress-section">
            <h2 className="section-title">In Progress</h2>
            <div className="courses-list">
              {inProgressCourses.map(course => (
                <div className="progress-course-card" key={course.id}>
                  <div className="course-image">
                    <img src={course.image} alt={course.title} />
                    <div className="course-level">{course.level}</div>
                  </div>
                  <div className="course-info">
                    <h3 className="course-title">{course.title}</h3>
                    <div className="progress-bar-container">
                      <div 
                        className="progress-bar" 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <div className="progress-details">
                      <span className="progress-percentage">{course.progress}% Complete</span>
                      <button 
                        className="reset-button"
                        onClick={() => handleResetProgress(course.id)}
                      >
                        Reset Progress
                      </button>
                    </div>
                    <Link to={`/courses/${course.id}`} className="btn btn-primary">
                      Continue Learning
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {completedCourses.length > 0 && (
          <div className="progress-section">
            <h2 className="section-title">Completed</h2>
            <div className="courses-list">
              {completedCourses.map(course => (
                <div className="progress-course-card" key={course.id}>
                  <div className="course-image">
                    <img src={course.image} alt={course.title} />
                    <div className="course-level">{course.level}</div>
                  </div>
                  <div className="course-info">
                    <h3 className="course-title">{course.title}</h3>
                    <div className="progress-bar-container">
                      <div 
                        className="progress-bar completed" 
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                    <div className="progress-details">
                      <span className="progress-percentage">100% Complete</span>
                      <button 
                        className="reset-button"
                        onClick={() => handleResetProgress(course.id)}
                      >
                        Reset Progress
                      </button>
                    </div>
                    <Link to={`/courses/${course.id}`} className="btn btn-secondary">
                      Review Course
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {notStartedCourses.length > 0 && (
          <div className="progress-section">
            <h2 className="section-title">Not Started</h2>
            <div className="courses-list">
              {notStartedCourses.map(course => (
                <div className="progress-course-card" key={course.id}>
                  <div className="course-image">
                    <img src={course.image} alt={course.title} />
                    <div className="course-level">{course.level}</div>
                  </div>
                  <div className="course-info">
                    <h3 className="course-title">{course.title}</h3>
                    <div className="progress-bar-container">
                      <div className="progress-bar" style={{ width: '0%' }}></div>
                    </div>
                    <div className="progress-details">
                      <span className="progress-percentage">0% Complete</span>
                    </div>
                    <Link to={`/courses/${course.id}`} className="btn btn-primary">
                      Start Learning
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="php-server-note">
          <div className="note-content">
            <h3>Note About Progress Tracking</h3>
            <p>
              Your progress is stored locally in your browser and synchronized with our server 
              for persistent storage across devices. If you clear your browser data, you can 
              still recover your progress by visiting this page again.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTrackingPage;