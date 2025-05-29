import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Start Your Development Journey?</h2>
          <p className="cta-text">
            Join thousands of students who have transformed their careers with Devify.
            Get access to all our courses, projects, and community support.
          </p>
          <div className="cta-buttons">
            <Link to="/signup" className="btn btn-primary">Get Started Today</Link>
            <Link to="/courses" className="btn btn-secondary">Browse Courses</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;