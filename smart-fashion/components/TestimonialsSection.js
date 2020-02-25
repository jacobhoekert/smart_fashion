import React from 'react';
import Button from './Button';
import '../styles/testimonials_section.scss';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  return (
    <div>
      <section id="testimonials-section">
        <h2>Don't just take our word for it</h2>
        <h3>Customer Reviews</h3>
        <div id="testimonials-container">
          <TestimonialCard 
            quote="&quot;Mr. Raj is a good listener and an excellent tailor following his passion. Located right off the Night Bazzar, don’t waste your time shopping around. He will give you a great suit for a fair price. I came here for a suit and one shirt, and bought two more after seeing the craftsmanship on the first.&quot;"
            image="/order-suit.jpg"
            alt=""
            name="John Smith"
          />
          <TestimonialCard 
            quote="&quot;Mr. Raj is a good listener and an excellent tailor following his passion. Located right off the Night Bazzar, don’t waste your time shopping around. He will give you a great suit for a fair price. I came here for a suit and one shirt, and bought two more after seeing the craftsmanship on the first.&quot;"
            image="/order-suit.jpg"
            alt=""
            name="John Smith"
          />
          <TestimonialCard 
            quote="&quot;Mr. Raj is a good listener and an excellent tailor following his passion. Located right off the Night Bazzar, don’t waste your time shopping around. He will give you a great suit for a fair price. I came here for a suit and one shirt, and bought two more after seeing the craftsmanship on the first.&quot;"
            image="/order-suit.jpg"
            alt=""
            name="John Smith"
          />
          <TestimonialCard 
            quote="&quot;Mr. Raj is a good listener and an excellent tailor following his passion. Located right off the Night Bazzar, don’t waste your time shopping around. He will give you a great suit for a fair price. I came here for a suit and one shirt, and bought two more after seeing the craftsmanship on the first.&quot;"
            image="/order-suit.jpg"
            alt=""
            name="John Smith"
          />
        </div>
        <Button path="/testimonials" text="Read More" />
      </section>
    </div>
  )
}

export default TestimonialsSection