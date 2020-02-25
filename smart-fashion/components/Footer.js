import React from 'react';
import '../styles/footer.scss';


const Footer = () => {
  return (
    <section id="footer">
      <div id="footer-container">
        <div id="contact-info-container">
          <img id="dark-logo" src="/smart-fashion-logo-dark.svg" alt="Smart Fashion Logo" />
          <a id="footer-email" className="footer-info" href="mailto:smartfashionchiangmai@gmail.com">smartfashionchiangmai@gmail.com</a>
          <p id="footer-phone1" className="footer-info">Mr. Max: <strong>+66 88-8782866</strong></p>
          <p id="footer-phone2" className="footer-info">Mr. Raj: <strong>+66 83-6367660</strong></p>
          <p id="footer-whatsapp" className="footer-info">Numbers work with WhatsApp</p>
        </div>
        <div id="footer-right-container">
          <div id="social-icons">
            <p>FB  INSTA  YT</p>
          </div>
          <p id="address">Branch No. 89/2 Changklan Road Kalere <br />Night Bazaar Chiang Mai, Thailand 50100</p>
        </div>
      </div>
      <hr />
      <div id="footer-bottom">
        <p>Copyright © 2020 SMART Fashion</p>
      </div>
    </section>
  )
}

export default Footer