import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import HomeBanner from '../components/HomeBanner';
import IntroSection from '../components/IntroSection';
import '../styles/global.scss';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet" async/>
    </Head>
    <main>
    <body>
      <NavBar />
      <HomeBanner />
      <IntroSection />
    </body>
    </main>
  </div>
)

export default Home
