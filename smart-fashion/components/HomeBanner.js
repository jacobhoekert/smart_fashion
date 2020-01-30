import React from 'react';
import Button from './Button';
import '../styles/home_banner.scss';

const HomeBanner = () => {
  return (
    <div>
      <section id="home-banner-section">
        <div id="home-banner-overlay">
          <div id="home-tagline-container">
            <h1 id="tagline-text">The Best Custom Tailor in Chiang Mai for the Best Custom You</h1>
            <Button path="/order" text="Order Online" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeBanner