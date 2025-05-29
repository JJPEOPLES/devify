import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import courses from '../data/courses';
import { updateProgress } from '../utils/api';
import '../styles/CourseDetailPage.css';

const CourseDetailPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Find the course by ID
    const foundCourse = courses.find(c => c.id === parseInt(id));
    if (foundCourse) {
      setCourse(foundCourse);
      
      // Try to get saved progress from localStorage
      const savedProgress = localStorage.getItem(`course_${id}_progress`);
      if (savedProgress) {
        setProgress(parseInt(savedProgress));
      }
    }
  }, [id]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleProgressUpdate = async () => {
    // Simulate progress update (in a real app, this would be more sophisticated)
    const newProgress = Math.min(progress + 10, 100);
    setProgress(newProgress);
    
    // Save progress using our API utility
    await updateProgress(id, newProgress);
  };

  if (!course) {
    return (
      <div className="container" style={{ padding: '5rem 0', textAlign: 'center' }}>
        <h2>Course not found</h2>
        <p>The course you're looking for doesn't exist.</p>
        <Link to="/courses" className="btn btn-primary">Back to Courses</Link>
      </div>
    );
  }

  return (
    <div className="course-detail-page">
      <div className="course-header">
        <div className="container">
          <div className="course-header-content">
            <div className="course-info">
              <div className="course-level">{course.level}</div>
              <h1 className="course-title">{course.title}</h1>
              <p className="course-description">{course.description}</p>
              
              <div className="course-meta">
                <div className="meta-item">
                  <i className="fas fa-clock"></i>
                  <span>{course.duration}</span>
                </div>
                <div className="meta-item">
                  <i className="fas fa-user"></i>
                  <span>{course.instructor}</span>
                </div>
                <div className="meta-item">
                  <i className="fas fa-star"></i>
                  <span>{course.rating.toFixed(1)}</span>
                </div>
              </div>
            </div>
            
            <div className="course-progress-container">
              <div className="progress-card">
                <h3>Your Progress</h3>
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="progress-percentage">{progress}% Complete</div>
                <button className="btn btn-primary" onClick={handleProgressUpdate}>
                  Update Progress
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="course-tabs">
          <button 
            className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => handleTabChange('overview')}
          >
            Overview
          </button>
          <button 
            className={`tab-button ${activeTab === 'curriculum' ? 'active' : ''}`}
            onClick={() => handleTabChange('curriculum')}
          >
            Curriculum
          </button>
          <button 
            className={`tab-button ${activeTab === 'resources' ? 'active' : ''}`}
            onClick={() => handleTabChange('resources')}
          >
            Resources
          </button>
        </div>
        
        <div className="course-content">
          {activeTab === 'overview' && (
            <div className="overview-tab">
              <div className="overview-section">
                <h2>About This Course</h2>
                <p>{course.description}</p>
                <p>
                  This comprehensive course will take you from beginner to advanced level, 
                  providing you with all the skills you need to excel in {course.title.split(' ')[0]} development.
                </p>
              </div>
              
              <div className="overview-section">
                <h2>What You'll Learn</h2>
                <ul className="topics-list">
                  {course.topics.map((topic, index) => (
                    <li key={index}>
                      <i className="fas fa-check"></i>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="overview-section">
                <h2>Meet Your Instructor</h2>
                <div className="instructor-info">
                  <div className="instructor-image">
                    <img src="/images/instructors/default.jpg" alt={course.instructor} />
                  </div>
                  <div className="instructor-details">
                    <h3>{course.instructor}</h3>
                    <p className="instructor-title">Senior Developer & Educator</p>
                    <p className="instructor-bio">
                      An experienced developer with over 8 years of industry experience, 
                      specializing in {course.title.split(' ')[0]} development. Passionate about teaching 
                      and helping students achieve their coding goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'curriculum' && (
            <div className="curriculum-tab">
              <h2>Course Curriculum</h2>
              <p className="curriculum-intro">
                This course is designed to take you from the basics to advanced concepts in a structured way.
                Each section builds upon the previous one, ensuring a smooth learning experience.
              </p>
              
              <div className="curriculum-sections">
                {course.content ? (
                  course.content.map((section, sectionIndex) => (
                    <div className="curriculum-section" key={sectionIndex}>
                      <div className="section-header">
                        <h3 className="section-title">
                          <span className="section-number">{sectionIndex + 1}.</span> {section.title}
                        </h3>
                        <span className="section-lessons">{section.lessons.length} lessons</span>
                      </div>
                      
                      <ul className="lessons-list">
                        {section.lessons.map((lesson, lessonIndex) => (
                          <li className="lesson-item" key={lessonIndex}>
                            <div className="lesson-info">
                              <i className="fas fa-play-circle"></i>
                              <span className="lesson-title">{lesson}</span>
                            </div>
                            <span className="lesson-duration">15-20 min</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <div className="no-content">
                    <p>Curriculum details are being updated. Please check back soon.</p>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {activeTab === 'resources' && (
            <div className="resources-tab">
              <h2>Course Resources</h2>
              <p className="resources-intro">
                Access supplementary materials to enhance your learning experience.
                These resources will help you practice and reinforce the concepts covered in the course.
              </p>
              
              <div className="resources-list">
                <div className="resource-item">
                  <div className="resource-icon">
                    <i className="fas fa-file-pdf"></i>
                  </div>
                  <div className="resource-info">
                    <h3>Course Slides</h3>
                    <p>Downloadable slides for all lectures in PDF format.</p>
                    <a href="#" className="resource-link">Download</a>
                  </div>
                </div>
                
                <div className="resource-item">
                  <div className="resource-icon">
                    <i className="fas fa-file-code"></i>
                  </div>
                  <div className="resource-info">
                    <h3>Source Code</h3>
                    <p>Complete source code for all projects and exercises.</p>
                    <a href="#" className="resource-link">Download</a>
                  </div>
                </div>
                
                <div className="resource-item">
                  <div className="resource-icon">
                    <i className="fas fa-book"></i>
                  </div>
                  <div className="resource-info">
                    <h3>Reading List</h3>
                    <p>Recommended books and articles for further study.</p>
                    <a href="#" className="resource-link">View</a>
                  </div>
                </div>
                
                <div className="resource-item">
                  <div className="resource-icon">
                    <i className="fas fa-tasks"></i>
                  </div>
                  <div className="resource-info">
                    <h3>Practice Exercises</h3>
                    <p>Additional exercises to reinforce your learning.</p>
                    <a href="#" className="resource-link">Access</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;