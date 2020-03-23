import React, {useEffect} from 'react';
import OrderFormNav from './OrderFormNav';
import { useSelector, useDispatch } from 'react-redux';
import { changeOrderFormPage } from '../redux/actions/orderActions';
import '../styles/order_form_end.scss';
import { db } from '../firebaseConfig';
import axios from "axios";


const OrderFormEnd = () => {
  const globalState = useSelector(state => state);
  const orderForm = globalState.order;

  const dispatch = useDispatch();

  useEffect(() => {
    // filter out properties with undefined values 
    const stringifiedOrderForm = JSON.stringify(orderForm);
    const filteredOrderForm = JSON.parse(stringifiedOrderForm);
    // add the order form to the database
    db.collection('orders').add(filteredOrderForm)
      .then(console.log("Document Successfully written!"))
      .catch(err => console.log("Error writing document: ", err));

    // send email with order
    axios({
      method: "POST",
      url: "http://localhost:3000/api/sendOrderForm",
      data: orderForm
    })
  }, []);

  return (
    <section id="order-form-end">
      <div id="order-form-end-container">
        <h2 className="order-form-end-title">Thanks for your order!</h2>
        <p className="order-form-end-text">Looking for a high-quality custom suit but not in the area? Get measured at your local tailor or in the comfort of your own home with our tutorial and fill out our simple order form. We ship to anywhere in the world.</p>
        <button className="order-form-button" onClick={() => dispatch(changeOrderFormPage(0))}>Make Another Order</button>
      </div>
    </section>
  )
}

export default OrderFormEnd