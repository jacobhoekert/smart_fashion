import React from 'react';
import Button from './Button';
import '../styles/styles_section.scss';
import StyleCard from './StyleCard';

const StylesSection = () => {
  return (
    <div>
      <section id="styles-section">
        <h2>We make all styles of tailored clothing</h2>
        <h3>You dream it, we'll make it</h3>
        <div id="styles-container">
          <StyleCard 
            image="/casual.jpg"
            alt="man putting on casual suit"
            title="Casual"
          />
          <StyleCard 
            image="/wedding.jpg"
            alt="man in wedding tuxedo"
            title="Wedding"
          />
          <StyleCard 
            image="/business.jpg"
            alt="man in wedding tuxedo"
            title="Business"
          />
          <StyleCard 
            image="/evening.jpg"
            alt="man in wedding tuxedo"
            title="Evening"
          />
          <StyleCard 
            image="/outerwear.jpg"
            alt="man in wedding tuxedo"
            title="Outerwear"
          />
        </div>
        <p className="styles-contact-text">Don't know what you want? Contact us if you have any questions!</p>
        <Button path="/contact" text="Contact Us" />
      </section>
    </div>
  )
}

export default StylesSection