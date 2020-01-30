import React from 'react';
import NavBar from '../components/NavBar';
import ShortBanner from '../components/ShortBanner';
import '../styles/global.scss';

const Order = () => {
  return (
    <>
      <NavBar />
      <ShortBanner
        image="/order-suit.jpg"
        text="Order your custom suit in less than a minute"
      />
    </>
  )
}

export default Order