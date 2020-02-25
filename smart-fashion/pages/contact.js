import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import ShortBanner from '../components/ShortBanner';
import ContactForm from '../components/ContactForm';
import '../styles/global.scss';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet" async/>
      </Head>
      <NavBar />
      <ShortBanner
        image="/order-suit.jpg"
        text="Contact us"
      />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact