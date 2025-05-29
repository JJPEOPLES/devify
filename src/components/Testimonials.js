import React, { useState, useEffect } from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      role: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      image: '/images/testimonials/person1.jpg',
      text: 'Devify completely transformed my career. I went from knowing nothing about web development to landing a job as a frontend developer in just 6 months. The courses are well-structured and the instructors are amazing!'
    },
    {
      id: 2,
      name: 'Lisa Johnson',
      role: 'Full Stack Developer',
      company: 'Innovate Labs',
      image: '/images/testimonials/person2.jpg',
      text: 'The MERN stack course was exactly what I needed to level up my skills. The projects were challenging but rewarding, and I now have an impressive portfolio to show potential employers. Worth every penny!'
    },
    {
      id: 3,
      name: 'Robert Chen',
      role: 'Software Engineer',
      company: 'Global Tech',
      image: '/images/testimonials/person3.jpg',
      text: 'As someone who was switching careers, I was worried about learning to code. Devify made the process enjoyable and manageable. The community support is incredible, and I never felt stuck for long.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Students Say</h2>
          <p className="section-subtitle">
            Success stories from developers who started their journey with Devify
          </p>
        </div>
        
        <div className="testimonials-slider">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="testimonial-text">{testimonials[currentIndex].text}</p>
            </div>
            <div className="testimonial-author">
              <div className="author-image">
                <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
              </div>
              <div className="author-info">
                <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                <p className="author-role">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>
          
          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;