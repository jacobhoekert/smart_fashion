import React from 'react';
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
            <i className="star">star_border</i>
            <i className="star">star_border</i>
            <i className="star">star_border</i>
            <i className="star">star_border</i>
            <i className="star">star_border</i>
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