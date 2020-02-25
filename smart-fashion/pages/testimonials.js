import React from 'react';
import NavBar from '../components/NavBar';
import ShortBanner from '../components/ShortBanner';
import '../styles/global.scss';

const Testimonials = () => {
  return (
    <>
      <NavBar />
      <ShortBanner
        image="/order-suit.jpg"
        text="Testimonials"
      />
    </>
  )
}

export default Testimonials