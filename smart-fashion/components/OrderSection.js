import React from 'react';
import '../styles/order_section.scss';
import Button from './Button';

const OrderSection = () => {
  return (
    <section id="order-section">
      <div id="order-section-overlay">
        <div id="order-container">
          <h2 className="order-title">We Ship Anywhere. Top Quality. Low Price.</h2>
          <p className="order-text">Looking for a high-quality custom suit but not in the area? Get measured at your local tailor or in the comfort of your own home with our tutorial and fill out our simple order form. We ship to anywhere in the world.</p> 
          <Button path="/order" text="Order Online" />
        </div>
      </div>
    </section>
  )
}

export default OrderSection