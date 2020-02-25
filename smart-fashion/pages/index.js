import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import HomeBanner from '../components/HomeBanner';
import IntroSection from '../components/IntroSection';
import OrderSection from '../components/OrderSection';
import StylesSection from '../components/StylesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';
import '../styles/global.scss';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet" async/>
      <script src="https://kit.fontawesome.com/db0374bc7d.js" crossorigin="anonymous"></script>
    </Head>
    <main>
    <body>
      <NavBar />
      <HomeBanner />
      <IntroSection />
      <StylesSection />
      <OrderSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactBanner />
      <Footer />
    </body>
    </main>
  </div>
)

export default Home
