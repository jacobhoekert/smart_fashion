import React from 'react';
import NavBar from '../components/NavBar';
import ShortBanner from '../components/ShortBanner';
import '../styles/global.scss';

const Contact = () => {
  return (
    <>
      <NavBar />
      <ShortBanner
        image="/order-suit.jpg"
        text="Contact us"
      />
    </>
  )
}

export default Contact