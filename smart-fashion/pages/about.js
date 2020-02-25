import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import ShortBanner from '../components/ShortBanner';
import AboutSection from '../components/AboutSection';
import AboutActionSection from '../components/AboutActionSection';
import '../styles/global.scss';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet" async/>
      </Head>
      <main>
      <body>
        <NavBar />
        <ShortBanner
          image="/order-suit.jpg"
          text="About us"
        />
        <AboutSection />
        <AboutActionSection />
        <ContactBanner />
        <Footer />
      </body>
      </main>
    </div>
  )
}

export default AboutPage