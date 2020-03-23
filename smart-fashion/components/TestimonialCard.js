import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/testimonial_card.scss';

const TestimonialCard= (props) => {
  return (
    <div className="testimonial-card">
      <p className="testimonial-quote">
        {props.quote}
      </p>
      <div className="testimonial-profile"> 
        <img
         src={props.image}
         alt={props.alt}
         width="50px"
         height="50px"
        />
        <div className="testimonial-info">
          <div className="testimonial-stars">
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
          </div>
          <h4 className="testimonial-name">
            {props.name}
          </h4>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard