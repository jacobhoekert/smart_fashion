import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import Burger from '../components/Burger';
import MobileMenu from '../components/MobileMenu';
import HomeBanner from '../components/HomeBanner';
import IntroSection from '../components/IntroSection';
import OrderSection from '../components/OrderSection';
import StylesSection from '../components/StylesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';
import '../styles/global.scss';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

const Home = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    config.autoAddCss = false;
  }, [])
  
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet" async/>
        <script src="https://kit.fontawesome.com/db0374bc7d.js" crossOrigin="anonymous"></script>
      </Head>
      <main>
      <nav>
        <NavBar />
        <Burger open={open} setOpen={setOpen} />
        {open && (
          <div>
            <MobileMenu open={open} setOpen={setOpen} />
          </div>
        )}
      </nav>
      <body>
        <HomeBanner />
        <IntroSection />
        <StylesSection />
        <OrderSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactBanner />
      </body>
      <footer>
        <Footer />
      </footer>
      </main>
    </div>
  )
}

export default Home
