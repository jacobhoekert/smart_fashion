import React from 'react';
import Button from './Button';
import '../styles/intro_section.scss';


const IntroSection = (props) => {
  return (
    <section id="intro-section">
      <div id="intro-container">
        <div id="intro-text">
          <h2>Why Choose Smart Fashion?</h2>
          <p>There is an overwhelming amount of tailor shops to choose from in Chiang Mai. But here at Smart Fashion we know how to get you fitted to look and feel your absolute best, without hurting your wallet. We use the same high-quality material as the biggest suit brands across the world.</p>
          <Button path="/about" text="About Us" />
        </div>
        <div id="intro-image"></div>
      </div>
    </section>
  )
}

export default IntroSection