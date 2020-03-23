import React from 'react';
import Button from './Button';
import '../styles/home_banner.scss';

const HomeBanner = () => {
  return (
    <div>
      <section id="home-banner-section">
        <div id="home-banner-overlay">
          <div id="home-tagline-container">
            <h1 id="tagline-text">Smart choice.<br/> We have the best <br />custom suits and clothing in Chiang Mai.</h1>
            <Button path="/order" text="Get Started" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeBanner