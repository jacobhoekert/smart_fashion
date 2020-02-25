import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import ShortBanner from '../components/ShortBanner';
import '../styles/global.scss';

const Order = () => {
  return (
    <div>
      <Head>
        <title>Order</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet" async/>
      </Head>
      <NavBar />
      <ShortBanner
        image="/order-suit.jpg"
        text="Order your custom suit in less than a minute"
      />
    </div>
  )
}

export default Order