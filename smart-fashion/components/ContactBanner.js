import React from 'react';
import '../styles/contact_banner.scss';
import Button from './Button';

const ContactBanner = () => {
  return (
    <section id="contact-banner">
      <div id="contact-banner-overlay">
        <div id="contact-banner-container">
          <h2 className="contact-question">Got Any Questions?</h2>
          <p className="contact-text">We would love to help you</p>
          <Button path="/contact" text="123-123-1234" />
          <div className="empty-space"></div>
          <Button path="/contact" text="Send us an email" />
        </div>
      </div>
    </section>
  )
}

export default ContactBanner