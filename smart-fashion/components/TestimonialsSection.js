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
            quote="&quot;Fantastic shop, great service, and great quality suit. For the quality of the suit, the price was unbeatable. Suit fit great. I’m a simple person, but they were very willing to meet demands. I believe any future suit purchases will come from this shop.&quot;"
            image="/tripadvisor-logo.png"
            alt="tripadvisor logo"
            name="Adam"
          />
          <TestimonialCard 
            quote="&quot;High quality fabrics. Professional and doing it on the time. If you are looking for a suit. This is the place!&quot;"
            image="/tripadvisor-logo.png"
            alt="tripadvisor logo"
            name="May Batat"
          />
          <TestimonialCard 
            quote="&quot;I bought 3 suits and 7 shirts, and everything looks great and fits perfectly. My suits look just as good as the $1,000 suits I see back home, but for much cheaper. If you get a suit made here you won’t be disappointed.&quot;"
            image="/tripadvisor-logo.png"
            alt="tripadvisor logo"
            name="JD Tyler"
          />
          <TestimonialCard 
            quote="&quot;Me and my family commissioned literally dozens of items of clothing here (shorts, trousers, shirts and a suit) and we cannot be happier with the outcome. All clothes have been skillfully made with craftsmanship and are a pleasure to wear.
            If you are in Chiang-Mai and looking for something custom-made, I highly recommend you to drop-by here!&quot;"
            image="/tripadvisor-logo.png"
            alt="tripadvisor logo"
            name="Talete P"
          />
        </div>
        <Button path="https://www.tripadvisor.com/Attraction_Review-g293917-d8858176-Reviews-Smart_Fashion-Chiang_Mai.html" text="Read More"/>
      </section>
    </div>
  )
}

export default TestimonialsSection