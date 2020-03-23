import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import OrderFormStart from './OrderFormStart';
import OrderFormP1 from './OrderFormP1';
import OrderFormP2 from './OrderFormP2';
import OrderFormP3 from './OrderFormP3';
import OrderFormP4 from './OrderFormP4';
import OrderFormEnd from './OrderFormEnd';
import MeasurementFormStart from './MeasurementFormStart';
import { changeOrderFormPage } from '../redux/actions/orderActions';
import { useDispatch } from 'react-redux';

import '../styles/order_form.scss';

const Form = () => {
  const globalState = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeOrderFormPage(0));
  }, [])

  const renderOrderDisplay = () => {
    switch(globalState.order.currentPage) {
      case 0:
        return <OrderFormStart />
      case 1:
        return <OrderFormP1 />
      case 2:
        return <OrderFormP2 />
      case 3:
        return <OrderFormP3 />
      case 4:
        return <OrderFormP4 />
      case 5:
        return <OrderFormEnd />
    }
  }

  // not currently in used in production -- measurement form not finished 
  const renderMeasurementDisplay = () => {
    switch(globalState.order.currentMeasurementPage) {
      case 0:
        return <MeasurementFormStart />
      case 1:
        return <MeasurementFormP1 />
    }
  }

  return (
    <div id="order-form-wrapper">
      <div className="order-form-container">
        {globalState.order.formDisplayed == "order" ? renderOrderDisplay() : renderMeasurementDisplay()}
      </div>
    </div>
  )
}

export default Form