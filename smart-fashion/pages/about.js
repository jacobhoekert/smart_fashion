import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import BannerSection from '../components/HomeBanner';
import '../styles/global.scss';
import ShortBanner from '../components/ShortBanner';

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
      </body>
      </main>
    </div>
  )
}

export default AboutPage