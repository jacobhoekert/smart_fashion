import React from 'react';
import Link from 'next/link';
import { useDispatch } from "react-redux";
import { setFormDisplayed } from '../redux/actions/orderActions';

import '../styles/order_page_section.scss';

const OrderPageSection = (props) => {
  const dispatch = useDispatch();

  return (
    <div id="order-page-container">
      <h2 className="order-page-title">Choose exactly what you want. <br/> Pick it up at your door. </h2>
      <p className="order-page-text">We need two things from you in order to make your custom clothing. First, fill out our clothing form and choose what you want us to make you. Second, fill out our measurement form so we know how to make it fit you perfectly. We will contact you shortly after you complete the forms!</p> 
      <div className="form-info-container">
        <div className="form-info">
          <h3 className="form-title">Clothing Form</h3>
          <img 
            src="/suit.jpg"
            alt="man putting on suit"
            width="250px"
            height="auto"
          />
          <p className="form-text">Choose which type of clothing, styles, and fabrics you want! We have a great selection of top quality fabrics and styles. Suits, tuxedos, shirts, overcoats, ladies clothes, and even a golf package!</p>
          <button className="order-form-button" onClick={() => dispatch(setFormDisplayed("order"))}>Start Clothing Form</button>
        </div>
        <div className="form-info">
          <h3 className="form-title">Measurements Form</h3>
          <img 
            src="/measuring-tape.jpg"
            alt="measuring tape"
            width="250px"
            height="auto"
          />
          <p className="form-text">Before you fill out your measurements, make sure you know them. Get them from your local tailor, or see our tutorial below for an easy in-home tutorial</p>
          <Link href="/blog/measure"><button className="order-form-button">Self-Measuring Tutorial</button></Link> 
          <button className="order-form-button" onClick={() => dispatch(setFormDisplayed("measure"))}>Start Measurements Form</button>
        </div>
      </div>
    </div>
  )
}

export default OrderPageSection