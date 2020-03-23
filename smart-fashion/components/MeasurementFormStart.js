import React from 'react';
import { useDispatch } from 'react-redux';
import { changeMeasurementFormPage, setFormDisplayed } from '../redux/actions/orderActions';
import '../styles/order_form_start.scss';

const OrderFormStart = () => {
  const dispatch = useDispatch();

  return (
    <section id="order-form-start">
      <div id="order-form-start-container">
        <h2 className="order-form-start-title">Measurement Form </h2>
        <img 
            src="/measuring-tape.jpg"
            alt="measuring tape"
            width="250px"
            height="auto"
          />
        <button className="order-form-button" onClick={() => dispatch(changeMeasurementFormPage(1))}>Make an Order</button>
        <button className="order-form-button" onClick={() => dispatch(setFormDisplayed(null))}>Cancel</button>

      </div>
    </section>
  )
}

export default OrderFormStart