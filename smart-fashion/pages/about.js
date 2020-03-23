import React, {useState} from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import Burger from '../components/Burger';
import MobileMenu from '../components/MobileMenu';
import ShortBanner from '../components/ShortBanner';
import AboutSection from '../components/AboutSection';
import AboutActionSection from '../components/AboutActionSection';
import '../styles/global.scss';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';

const AboutPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>About</title>
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
        <ShortBanner
          image="/order-suit.jpg"
          text="About us"
        />
        <AboutSection />
        <ContactBanner />
      </body>
      <footer>
        <Footer />
      </footer>
      </main>
    </div>
  )
}

export default AboutPage