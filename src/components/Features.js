import React from 'react';
import '../styles/Features.css';

const Features = () => {
  const features = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Interactive Learning',
      description: 'Learn by doing with hands-on exercises and real-world projects that reinforce your skills.'
    },
    {
      icon: 'fas fa-users',
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of experience in software development.'
    },
    {
      icon: 'fas fa-certificate',
      title: 'Certification',
      description: 'Earn certificates upon completion to showcase your skills to potential employers.'
    },
    {
      icon: 'fas fa-comments',
      title: 'Community Support',
      description: 'Join our community of developers to get help, share knowledge, and collaborate on projects.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Learning',
      description: 'Access your courses anytime, anywhere with our mobile-friendly platform.'
    },
    {
      icon: 'fas fa-sync',
      title: 'Regular Updates',
      description: 'Our courses are regularly updated to keep up with the latest technologies and best practices.'
    }
  ];

  return (
    <section className="features section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Devify</h2>
          <p className="section-subtitle">
            We provide the best learning experience for aspiring developers
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;