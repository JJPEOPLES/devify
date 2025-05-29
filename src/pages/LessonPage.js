import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { updateProgress } from '../utils/api';
import courses from '../data/courses';
import '../styles/LessonPage.css';

const LessonPage = () => {
  const { courseId, sectionIndex, lessonIndex } = useParams();
  const [course, setCourse] = useState(null);
  const [section, setSection] = useState(null);
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const foundCourse = courses.find(c => c.id === parseInt(courseId));
    if (foundCourse) {
      setCourse(foundCourse);
      
      const sectionIdx = parseInt(sectionIndex);
      const lessonIdx = parseInt(lessonIndex);
      
      if (foundCourse.content && 
          foundCourse.content[sectionIdx] && 
          foundCourse.content[sectionIdx].lessons[lessonIdx]) {
        setSection(foundCourse.content[sectionIdx]);
        setLesson({
          title: foundCourse.content[sectionIdx].lessons[lessonIdx],
          content: getLessonContent(foundCourse.id, sectionIdx, lessonIdx)
        });
      }
      
      // Calculate progress
      const totalLessons = foundCourse.content.reduce((total, section) => total + section.lessons.length, 0);
      const currentLessonNumber = foundCourse.content.slice(0, sectionIdx).reduce((total, section) => total + section.lessons.length, 0) + lessonIdx + 1;
      const newProgress = Math.round((currentLessonNumber / totalLessons) * 100);
      setProgress(newProgress);
      
      // Update progress in API and localStorage
      updateProgress(courseId, newProgress);
    }
    
    setLoading(false);
  }, [courseId, sectionIndex, lessonIndex]);

  // This function would normally fetch the actual lesson content from a backend
  // For now, we'll generate some placeholder content based on the lesson title
  const getLessonContent = (courseId, sectionIdx, lessonIdx) => {
    return (
      <>
        <div className="lesson-video">
          <div className="video-placeholder">
            <i className="fas fa-play-circle"></i>
            <p>Video lesson would appear here</p>
          </div>
        </div>
        
        <div className="lesson-text">
          <h3>Lesson Content</h3>
          <p>Welcome to this lesson on <strong>{courses[courseId - 1].content[sectionIdx].lessons[lessonIdx]}</strong>.</p>
          <p>In this lesson, you'll learn the key concepts and practical applications of this topic. As a 10-year-old developer, I've designed this content to be accessible and engaging for learners of all ages.</p>
          
          <h4>Key Concepts</h4>
          <ul>
            <li>Understanding the fundamentals of {courses[courseId - 1].content[sectionIdx].lessons[lessonIdx]}</li>
            <li>How to implement this in real-world projects</li>
            <li>Best practices and common pitfalls</li>
            <li>Hands-on exercises to reinforce learning</li>
          </ul>
          
          <h4>Code Example</h4>
          <div className="code-block">
            <pre>
              <code>
                {`// Example code related to ${courses[courseId - 1].content[sectionIdx].lessons[lessonIdx]}
function exampleFunction() {
  console.log("This is where specific code examples would be shown");
  return "Learning is fun!";
}

// Try it yourself!
exampleFunction();`}
              </code>
            </pre>
          </div>
          
          <h4>Practice Exercise</h4>
          <p>Now it's your turn to practice what you've learned:</p>
          <ol>
            <li>Open your code editor</li>
            <li>Try implementing the concepts from this lesson</li>
            <li>Experiment with different approaches</li>
            <li>Share your work in our community forum!</li>
          </ol>
          
          <div className="lesson-note">
            <h4>Note from Prime</h4>
            <p>I created this lesson based on my own learning experience. Remember, making mistakes is part of learning - don't be afraid to experiment and try new things!</p>
          </div>
        </div>
      </>
    );
  };

  const navigateToNextLesson = () => {
    const currentSectionIdx = parseInt(sectionIndex);
    const currentLessonIdx = parseInt(lessonIndex);
    
    if (course.content[currentSectionIdx].lessons.length > currentLessonIdx + 1) {
      // Next lesson in same section
      navigate(`/courses/${courseId}/learn/${currentSectionIdx}/${currentLessonIdx + 1}`);
    } else if (course.content.length > currentSectionIdx + 1) {
      // First lesson in next section
      navigate(`/courses/${courseId}/learn/${currentSectionIdx + 1}/0`);
    } else {
      // Course completed
      navigate(`/courses/${courseId}`);
    }
  };

  const navigateToPrevLesson = () => {
    const currentSectionIdx = parseInt(sectionIndex);
    const currentLessonIdx = parseInt(lessonIndex);
    
    if (currentLessonIdx > 0) {
      // Previous lesson in same section
      navigate(`/courses/${courseId}/learn/${currentSectionIdx}/${currentLessonIdx - 1}`);
    } else if (currentSectionIdx > 0) {
      // Last lesson in previous section
      const prevSectionLessons = course.content[currentSectionIdx - 1].lessons.length;
      navigate(`/courses/${courseId}/learn/${currentSectionIdx - 1}/${prevSectionLessons - 1}`);
    } else {
      // Already at first lesson
      navigate(`/courses/${courseId}`);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading lesson content...</p>
      </div>
    );
  }

  if (!course || !section || !lesson) {
    return (
      <div className="error-container">
        <h2>Lesson Not Found</h2>
        <p>Sorry, we couldn't find the lesson you're looking for.</p>
        <Link to="/courses" className="btn btn-primary">Back to Courses</Link>
      </div>
    );
  }

  return (
    <div className="lesson-page">
      <div className="lesson-header">
        <div className="container">
          <div className="course-info">
            <Link to={`/courses/${courseId}`} className="back-link">
              <i className="fas fa-arrow-left"></i> Back to {course.title}
            </Link>
            <div className="progress-container">
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <span className="progress-text">{progress}% Complete</span>
            </div>
          </div>
          <h1 className="lesson-title">{lesson.title}</h1>
          <p className="lesson-subtitle">
            {section.title} • Lesson {parseInt(lessonIndex) + 1} of {section.lessons.length}
          </p>
        </div>
      </div>
      
      <div className="lesson-content container">
        {lesson.content}
        
        <div className="lesson-navigation">
          <button 
            className="btn btn-secondary"
            onClick={navigateToPrevLesson}
          >
            <i className="fas fa-arrow-left"></i> Previous Lesson
          </button>
          
          <button 
            className="btn btn-primary"
            onClick={navigateToNextLesson}
          >
            Next Lesson <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;