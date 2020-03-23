import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import Burger from '../components/Burger';
import MobileMenu from '../components/MobileMenu';
import OrderPageSection from '../components/OrderPageSection';
import Form from '../components/Form';
import ShortBanner from '../components/ShortBanner'
import { useSelector, useDispatch } from 'react-redux';
import { setFormDisplayed } from '../redux/actions/orderActions';
import '../styles/global.scss';

const Order = () => {
  const [open, setOpen] = useState(false);
  
  const globalState = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFormDisplayed("order")); // set to true until measurement form feature is added
  }, [])

  return (
    <div>
      <Head>
        <title>Order</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet" async/>
      </Head>
      <>
        { globalState.order.formDisplayed ?
          <>
            <NavBar black={true} />
            <Burger open={open} setOpen={setOpen} black={true} />
              {open && (
                <div>
                  <MobileMenu open={open} setOpen={setOpen} />
                </div>
              )}
            <Form />
          </>
          :
          <>
            <NavBar />
            <Burger open={open} setOpen={setOpen} />
            {open && (
              <div>
                <MobileMenu open={open} setOpen={setOpen} />
              </div>
            )}
            <ShortBanner
              image="/order-suit.jpg"
              text="Order Online"
            />
            <OrderPageSection />
          </>
        }
      </>
     
    </div>
  )
}

export default Order