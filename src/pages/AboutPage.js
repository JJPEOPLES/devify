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
                Devify was founded in 2023 by a team of passionate developers and educators who saw a gap in 
                the way programming was being taught. Traditional education often focuses too much on theory 
                and not enough on practical, real-world applications. We set out to create a learning platform 
                that balances theory with hands-on practice, helping students build a strong portfolio while 
                they learn.
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
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">The passionate people behind Devify</p>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="/images/team/member1.jpg" alt="Team Member" />
              </div>
              <h3 className="member-name">Alex Johnson</h3>
              <p className="member-role">Founder & CEO</p>
              <p className="member-bio">
                Former senior developer at Google with 15+ years of experience in web development.
              </p>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src="/images/team/member2.jpg" alt="Team Member" />
              </div>
              <h3 className="member-name">Sarah Williams</h3>
              <p className="member-role">Head of Education</p>
              <p className="member-bio">
                PhD in Computer Science with a passion for making complex concepts accessible.
              </p>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src="/images/team/member3.jpg" alt="Team Member" />
              </div>
              <h3 className="member-name">Michael Chen</h3>
              <p className="member-role">Lead Developer</p>
              <p className="member-bio">
                Full stack developer specializing in React and Node.js ecosystems.
              </p>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src="/images/team/member4.jpg" alt="Team Member" />
              </div>
              <h3 className="member-name">Emily Rodriguez</h3>
              <p className="member-role">Community Manager</p>
              <p className="member-bio">
                Dedicated to creating a supportive learning environment for all students.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;