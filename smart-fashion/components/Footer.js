import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

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
            <a href="https://www.facebook.com/rooneytailor2015/"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.instagram.com/smartfashion143/"><FontAwesomeIcon icon={faInstagramSquare} /></a>
            <a href=""><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
          <p id="address">log no 16 first floor) Night Bazaar Chiang mai 104/1Changklan RD <br/> Mueang Chiang Mai District, Chiang Mai 50100, Thailand </p>
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