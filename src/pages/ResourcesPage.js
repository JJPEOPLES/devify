import React from 'react';
import '../styles/ResourcesPage.css';

const ResourcesPage = () => {
  const resources = [
    {
      category: 'Documentation',
      items: [
        {
          title: 'HTML Reference',
          description: 'Complete reference guide for HTML elements, attributes, and tags.',
          link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
          icon: 'fas fa-file-code'
        },
        {
          title: 'CSS Reference',
          description: 'Comprehensive guide to CSS properties and selectors.',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          icon: 'fas fa-file-code'
        },
        {
          title: 'JavaScript Reference',
          description: 'Complete JavaScript language and browser APIs documentation.',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          icon: 'fas fa-file-code'
        },
        {
          title: 'React Documentation',
          description: 'Official React documentation with guides and API reference.',
          link: 'https://reactjs.org/docs/getting-started.html',
          icon: 'fab fa-react'
        }
      ]
    },
    {
      category: 'Tools',
      items: [
        {
          title: 'VS Code',
          description: 'Powerful code editor with built-in debugging and Git integration.',
          link: 'https://code.visualstudio.com/',
          icon: 'fas fa-code'
        },
        {
          title: 'GitHub',
          description: 'Version control platform for collaborating on code projects.',
          link: 'https://github.com/',
          icon: 'fab fa-github'
        },
        {
          title: 'CodePen',
          description: 'Online code editor for front-end development and testing.',
          link: 'https://codepen.io/',
          icon: 'fas fa-pen'
        },
        {
          title: 'Chrome DevTools',
          description: 'Built-in developer tools for debugging and performance analysis.',
          link: 'https://developers.google.com/web/tools/chrome-devtools',
          icon: 'fab fa-chrome'
        }
      ]
    },
    {
      category: 'Tutorials',
      items: [
        {
          title: 'CSS Tricks',
          description: 'Tutorials and articles about CSS techniques and best practices.',
          link: 'https://css-tricks.com/',
          icon: 'fas fa-magic'
        },
        {
          title: 'JavaScript.info',
          description: 'Modern JavaScript tutorial with detailed explanations.',
          link: 'https://javascript.info/',
          icon: 'fab fa-js'
        },
        {
          title: 'React Tutorial',
          description: 'Step-by-step guide to building your first React application.',
          link: 'https://reactjs.org/tutorial/tutorial.html',
          icon: 'fab fa-react'
        },
        {
          title: 'Node.js Guides',
          description: 'Official guides for getting started with Node.js development.',
          link: 'https://nodejs.org/en/docs/guides/',
          icon: 'fab fa-node-js'
        }
      ]
    },
    {
      category: 'Practice',
      items: [
        {
          title: 'Frontend Mentor',
          description: 'Real-world HTML, CSS and JavaScript challenges for practice.',
          link: 'https://www.frontendmentor.io/',
          icon: 'fas fa-laptop-code'
        },
        {
          title: 'CodeWars',
          description: 'Improve your coding skills with programming challenges.',
          link: 'https://www.codewars.com/',
          icon: 'fas fa-code'
        },
        {
          title: 'LeetCode',
          description: 'Platform to help you enhance your coding skills and prepare for interviews.',
          link: 'https://leetcode.com/',
          icon: 'fas fa-code'
        },
        {
          title: 'HackerRank',
          description: 'Practice coding challenges and prepare for technical interviews.',
          link: 'https://www.hackerrank.com/',
          icon: 'fas fa-code'
        }
      ]
    }
  ];

  return (
    <div className="resources-page">
      <div className="resources-header">
        <div className="container">
          <h1>Development Resources</h1>
          <p>Curated collection of tools, documentation, and learning materials to support your development journey</p>
        </div>
      </div>
      
      <div className="container">
        <div className="resources-content">
          {resources.map((category, index) => (
            <div className="resource-category" key={index}>
              <h2 className="category-title">{category.category}</h2>
              <div className="resource-grid">
                {category.items.map((item, itemIndex) => (
                  <div className="resource-card" key={itemIndex}>
                    <div className="resource-icon">
                      <i className={item.icon}></i>
                    </div>
                    <h3 className="resource-title">{item.title}</h3>
                    <p className="resource-description">{item.description}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="resource-link">
                      Visit Resource <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="resources-note">
          <div className="note-content">
            <h3>Looking for more resources?</h3>
            <p>
              This is just a starting point. As you progress through our courses, 
              you'll discover more specialized resources tailored to your learning path.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;