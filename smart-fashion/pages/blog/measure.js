import React, {useState} from "react";
import Head from "next/head";
import NavBar from "../../components/NavBar";
import Burger from '../../components/Burger';
import MobileMenu from '../../components/MobileMenu';
import ShortBanner from "../../components/ShortBanner";
import "../../styles/global.scss";
import "../../styles/blog-post.scss";
import Footer from "../../components/Footer";

const WeddingBlog = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Quicksand&display=swap"
          rel="stylesheet"
          async
        />
        <script
          src="https://kit.fontawesome.com/db0374bc7d.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <nav>
        <NavBar />
        <Burger open={open} setOpen={setOpen} />
        {open && (
          <div>
            <MobileMenu open={open} setOpen={setOpen} />
          </div>
        )}
      </nav>
      <ShortBanner image="/order-suit.jpg" text="Blog" />
      <div className="blog-post">
        <img src="/measuring-tape.jpg" alt="man in wedding tuxedo" />
        <h1>How to Measure Yourself for a Custom Suit</h1>
        <p>One of the biggest questions that we get from our international customers is, “How in the world do I measure myself for a custom suit?!” The truth is that it is easy! You just have to follow the appropriate steps. The video below is a great example of how simple it can be.</p>
        <iframe
          width="560"
          height="400"
          src="https://www.youtube.com/embed/qbh6AHh12Oo"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default WeddingBlog;
