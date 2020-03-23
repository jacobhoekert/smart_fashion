import React from 'react';
import { useDispatch } from 'react-redux';
import { changeOrderFormPage } from '../redux/actions/orderActions';
import '../styles/order_form_start.scss';

const OrderFormStart = () => {
  const dispatch = useDispatch();

  return (
    <section id="order-form-start">
      <div id="order-form-start-container">
      <h2 className="order-form-start-title">Custom Clothing Order Form </h2>
      <p className="order-form-start-text">Choose which clothing package, styles, and fabric you want! Add some personal contact information at the end, and after you fill out the form, we will get in touch with you shortly about how to get your measurements.</p> 
        <button className="order-form-button" onClick={() => dispatch(changeOrderFormPage(1))}>Start Order Form</button>
      </div>
    </section>
  )
}

export default OrderFormStart