import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CourseCard.css';

const CourseCard = ({ course }) => {
  const { id, title, description, level, duration, instructor, image, price, rating } = course;

  return (
    <div className="course-card">
      <div className="course-image">
        <img src={image} alt={title} />
        <div className="course-level">{level}</div>
      </div>
      <div className="course-content">
        <h3 className="course-title">{title}</h3>
        <p className="course-description">{description}</p>
        <div className="course-meta">
          <div className="meta-item">
            <i className="fas fa-clock"></i>
            <span>{duration}</span>
          </div>
          <div className="meta-item">
            <i className="fas fa-user"></i>
            <span>{instructor}</span>
          </div>
        </div>
        <div className="course-footer">
          <div className="course-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <i 
                  key={i} 
                  className={`fas fa-star ${i < Math.floor(rating) ? 'filled' : ''}`}
                ></i>
              ))}
            </div>
            <span>{rating.toFixed(1)}</span>
          </div>
          <div className="course-price">${price}</div>
        </div>
        <Link to={`/courses/${id}`} className="btn btn-primary course-btn">View Course</Link>
      </div>
    </div>
  );
};

export default CourseCard;