import React from 'react';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <div className="container">
          <h1>About Devify</h1>
          <p>Empowering the next generation of developers</p>
        </div>
      </div>
      
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>
                At Devify, our mission is to make high-quality tech education accessible to everyone. 
                We believe that learning to code should be engaging, practical, and aligned with industry needs.
                Our platform is designed to help aspiring developers build the skills they need to succeed in 
                today's competitive job market.
              </p>
              
              <h2>Our Story</h2>
              <p>
                Devify was founded in 2023 by Prime, a 10-year-old full stack developer who is passionate about 
                making coding accessible to everyone, especially young people. After learning to code at a very 
                early age, Prime realized that many educational resources weren't designed with young learners in mind. 
                This platform was created to provide a learning experience that's engaging and accessible for coders 
                of all ages, with a special focus on helping kids discover the joy of programming.
              </p>
              
              <h2>Our Approach</h2>
              <p>
                Our teaching methodology is based on three core principles:
              </p>
              <ul>
                <li>
                  <strong>Learn by Doing:</strong> We believe the best way to learn programming is by writing code. 
                  Our courses include numerous exercises and projects that reinforce concepts through practice.
                </li>
                <li>
                  <strong>Real-World Applications:</strong> Our curriculum is designed to teach skills that are 
                  relevant in the industry. We focus on technologies and practices that are actually used by companies.
                </li>
                <li>
                  <strong>Community Support:</strong> Learning is better together. Our platform fosters a supportive 
                  community where students can collaborate, share knowledge, and grow together.
                </li>
              </ul>
            </div>
            
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Courses</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">10k+</div>
                <div className="stat-label">Students</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">30+</div>
                <div className="stat-label">Instructors</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">95%</div>
                <div className="stat-label">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet the Creator</h2>
          <p className="section-subtitle">The young developer behind Devify</p>
          
          <div className="team-grid single-member">
            <div className="team-member">
              <div className="member-image">
                <img src="/images/team/prime.jpg" alt="Prime" />
              </div>
              <h3 className="member-name">Prime</h3>
              <p className="member-role">Founder & Developer</p>
              <p className="member-bio">
                A 10-year-old full stack developer who started coding at age 7. Prime is passionate about making 
                coding accessible to everyone, especially young people. With expertise in HTML, CSS, JavaScript, 
                React, and PHP, Prime created Devify to share knowledge and inspire the next generation of developers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;