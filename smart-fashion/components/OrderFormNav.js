import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/order_form_nav.scss';

const OrderFormNav = (props) => {
  return (
    <div className="order-form-nav-container">
      <button className="button2" onClick={props.handlePrevClick}><FontAwesomeIcon className="left-arrow-icon" icon={faArrowLeft}/> Prev </button>
      <button className="button2" onClick={props.handleNextClick}>{props.isSubmit ? "Submit" : "Next" }<FontAwesomeIcon className="right-arrow-icon" icon={faArrowRight}/></button>
    </div>
  )
}

export default OrderFormNav