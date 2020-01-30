import React from 'react';
import Button from './Button';
import '../styles/intro_section.scss';


const IntroSection = (props) => {
  return (
    <section id="intro-section">
      <div id="intro-container">
        <div id="intro-text">
          <h2>Why Choose Smart Fashion?</h2>
          <p>Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing. Apartments frequently or motionless on reasonable.</p>
          <Button path="/about" text="About Us" />
        </div>
        <div id="intro-image"></div>
      </div>
    </section>
  )
}

export default IntroSection