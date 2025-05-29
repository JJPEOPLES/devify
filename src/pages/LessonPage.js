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

  // Generate text-based lesson content based on the lesson title and course
  const getLessonContent = (courseId, sectionIdx, lessonIdx) => {
    const course = courses[courseId - 1];
    const sectionTitle = course.content[sectionIdx].title;
    const lessonTitle = course.content[sectionIdx].lessons[lessonIdx];
    
    // Generate different content based on the course and section
    let mainContent = '';
    let codeExample = '';
    
    // HTML & CSS Course
    if (course.id === 1) {
      if (sectionTitle.includes('HTML')) {
        mainContent = `
          <p>HTML (HyperText Markup Language) is the standard language for creating web pages. It uses a series of elements or tags to define the structure of content.</p>
          
          <p>In this lesson on <strong>${lessonTitle}</strong>, we'll explore how to use HTML to create well-structured web content that browsers can understand and display correctly.</p>
          
          <h4>Understanding HTML Elements</h4>
          <p>HTML elements are the building blocks of HTML pages. An HTML element is defined by a start tag, some content, and an end tag:</p>
          
          <p><code>&lt;tagname&gt;Content goes here...&lt;/tagname&gt;</code></p>
          
          <p>Elements can be nested (placed inside other elements), which allows you to build complex structures from simple components.</p>
        `;
        
        codeExample = `<!DOCTYPE html>
<html>
<head>
  <title>My First Web Page</title>
</head>
<body>
  <h1>Welcome to My Website</h1>
  <p>This is a paragraph of text.</p>
  <ul>
    <li>This is a list item</li>
    <li>This is another list item</li>
  </ul>
</body>
</html>`;
      } else if (sectionTitle.includes('CSS')) {
        mainContent = `
          <p>CSS (Cascading Style Sheets) is the language used to style HTML documents. It describes how HTML elements should be displayed on screen, paper, or other media.</p>
          
          <p>In this lesson on <strong>${lessonTitle}</strong>, we'll learn how to use CSS to control the layout and appearance of web pages.</p>
          
          <h4>CSS Syntax</h4>
          <p>A CSS rule consists of a selector and a declaration block. The selector points to the HTML element you want to style, and the declaration block contains one or more declarations separated by semicolons.</p>
          
          <p>Each declaration includes a CSS property name and a value, separated by a colon.</p>
        `;
        
        codeExample = `/* CSS Syntax Example */
selector {
  property: value;
  property: value;
}

/* Practical Example */
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 20px;
}

h1 {
  color: #333;
  text-align: center;
}`;
      }
    } 
    // JavaScript Course
    else if (course.id === 2) {
      mainContent = `
        <p>JavaScript is a programming language that allows you to implement complex features on web pages. It's an essential technology for creating interactive websites.</p>
        
        <p>In this lesson on <strong>${lessonTitle}</strong>, we'll explore key JavaScript concepts and how to apply them in real-world scenarios.</p>
        
        <h4>JavaScript Fundamentals</h4>
        <p>JavaScript is a versatile language that runs in the browser, enabling dynamic content, interactive features, and much more. Understanding its core concepts is essential for web development.</p>
      `;
      
      codeExample = `// JavaScript Example
function greetUser(name) {
  return "Hello, " + name + "! Welcome to JavaScript.";
}

// Using the function
const username = "Learner";
const message = greetUser(username);
console.log(message);  // Outputs: Hello, Learner! Welcome to JavaScript.

// Try changing the username and see what happens!`;
    }
    // React Course
    else if (course.id === 3) {
      mainContent = `
        <p>React is a JavaScript library for building user interfaces, particularly single-page applications where you need a fast, interactive user experience.</p>
        
        <p>In this lesson on <strong>${lessonTitle}</strong>, we'll explore how React components work and how to build efficient UIs with React.</p>
        
        <h4>React Components</h4>
        <p>Components are the building blocks of any React application. A component is a self-contained module that renders some output. Components can be nested inside other components to create complex applications from simple building blocks.</p>
      `;
      
      codeExample = `// React Component Example
import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
    </div>
  );
}

export default App;`;
    }
    // Default content for other courses
    else {
      mainContent = `
        <p>Welcome to this lesson on <strong>${lessonTitle}</strong>.</p>
        
        <p>In this comprehensive text-based lesson, you'll learn the key concepts and practical applications of this topic. As a 10-year-old developer, I've designed this content to be accessible and engaging for learners of all ages.</p>
        
        <h4>Learning Objectives</h4>
        <p>By the end of this lesson, you will be able to:</p>
        <ul>
          <li>Understand the core principles of ${lessonTitle}</li>
          <li>Apply these concepts in practical scenarios</li>
          <li>Recognize common patterns and best practices</li>
          <li>Solve problems related to this topic</li>
        </ul>
      `;
      
      codeExample = `// Example code related to ${lessonTitle}
function exampleFunction() {
  console.log("This demonstrates the concept we're learning");
  return "Learning is fun!";
}

// Try modifying this code to see what happens
exampleFunction();`;
    }
    
    return (
      <div className="lesson-text">
        <h3>{lessonTitle}</h3>
        <div className="lesson-introduction" dangerouslySetInnerHTML={{ __html: mainContent }}></div>
        
        <h4>Code Example</h4>
        <div className="code-block">
          <pre>
            <code>{codeExample}</code>
          </pre>
        </div>
        
        <h4>Practice Exercise</h4>
        <p>Now it's your turn to practice what you've learned:</p>
        <ol>
          <li>Read through the lesson content carefully</li>
          <li>Try the code examples in your own development environment</li>
          <li>Modify the examples to see how changes affect the outcome</li>
          <li>Complete the challenge below to test your understanding</li>
        </ol>
        
        <div className="practice-challenge">
          <h5>Challenge</h5>
          <p>Based on what you've learned in this lesson, try to:</p>
          <ul>
            <li>Create your own version of the example</li>
            <li>Add at least one new feature or modification</li>
            <li>Test your solution to make sure it works as expected</li>
          </ul>
        </div>
        
        <div className="lesson-note">
          <h4>Note from Prime</h4>
          <p>I created this lesson based on my own learning experience. Remember, making mistakes is part of learning - don't be afraid to experiment and try new things! If you have questions, you can always ask in our community forum.</p>
        </div>
      </div>
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