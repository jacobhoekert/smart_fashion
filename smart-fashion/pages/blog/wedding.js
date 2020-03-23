import React, {useState} from 'react';
import Head from 'next/head';
import NavBar from '../../components/NavBar';
import Burger from '../../components/Burger';
import MobileMenu from '../../components/MobileMenu';
import ShortBanner from '../../components/ShortBanner';
import '../../styles/global.scss';
import '../../styles/blog-post.scss';
import Footer from '../../components/Footer';

const WeddingBlog = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet" async/>
        <script src="https://kit.fontawesome.com/db0374bc7d.js" crossOrigin="anonymous"></script>
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
      <ShortBanner
        image="/order-suit.jpg"
        text="Blog"
      />
      <div className="blog-post">
          <img src="/wedding-tuxedo.jpg" alt="man in wedding tuxedo" />
          <h1>Choosing the Perfect Wedding Tuxedo</h1>
          <p>
          Your special day is coming up! Getting a nice tuxedo for yourself and a beautiful wedding gown for the bride seems like the ideal wedding attire.<br/><br/>

          However, these days, it can be very expensive to get your wedding tuxedo at the right price; in fact, tuxedos can be super expensive, and most tailors will charge you insanely high prices for your suit.<br/><br/>

          But, what if you could get your tuxedo made at SUPER CHEAP prices while maintaining the quality of the highest name brands?<br/><br/>

          We offer wedding tuxedo tailoring services that are focused on bringing the highest quality in terms of material choice, designing and tailoring for prices that would beat even a suit rental. <br/><br/>

          How do we do it? Well, we are a professional tailoring service that is based in Thailand, and we deal with internal tuxedo and suit delivery throughout the world. <br/><br/>

          Whether you’re someone from Thailand or someone from America, Europe, or Australia, we guarantee prices that will make your jaw drop even after international shipping.<br/><br/>

          <h2>Tuxedos and Suits Are Different</h2>
          At first glance, suits and tuxedos might seem pretty similar. But before we establish what a tuxedo is, let’s talk about what a tux is not. A tuxedo is a little more than a black suit; it’s a statement. It is what you wear to highlight yourself on a certain occasion. It’s quite fancier than a suit and is usually worn in some special event.<br/><br/>

          While that description misses some of the finer details of the tux, it also assumes that all tuxedos are black and white. Bowties are traditionally worn with tuxedos. However, it’s not essential to it.<br/><br/>

          Suits and tuxedos are different because a tux has more silk satin in the design, especially on the lapels, which gives it a unique look.<br/><br/>

          Suits are made with the same materials for both the jacket and the pants—no special lapels, no satin leg stripes. Tuxedos have special buttons that are silken, while jacket buttons while suits have normal buttons.<br/><br/>

          So, should you wear a tuxedo at the event? The tuxedo is designed to give you a look that is higher than everyday suits.<br/><br/>

          If you are wearing a tuxedo, you may be celebrating something special. Only you can decide if the dress is the one you need. Going deep into the spirit, doing meditation, and walking in the desert is a spiritual pursuit, and the dress can best evoke your soul. <br/><br/>

          <h2>Dressing Matters</h2>
          For example, if you are a groom and your bride is wearing a princess dress at the wedding, then wearing a suit standing next to her may seem too casual.<br/><br/>

          Conversely, if you are holding a sunset beach wedding and the bride is wearing a flowing, less traditional dress, you might look like a fool in a black tuxedo. <br/><br/>

          Go to the suit. These are just things to consider. When you choose an evening gown, the details will make a difference.<br/><br/>

          The style of the tuxedo is mainly determined by the jacket. Although picking one may sound simple… when sorting the look, you need to pay attention to many things, such as lapels, buttons, and even fabrics.<br/><br/>

          Notch Lapels
          Notched lapels are the standard for today’s men’s suits, from sports jackets to suits, which means they are more casual than other lapel types.<br/><br/>

          They have a “gap” at the junction of the jacket neckline and the lapel. Notched lapels are casual lapels, but they are versatile, and you can find them on suits and tuxedo jackets. Just avoid wearing them in the most formal black-tie event.<br/><br/>

          <h3>Shawl Collar</h3>
          The shawl is not only suitable for the little old lady. The collar is characterized by a modern circular shape, mainly in tuxedos and evening gowns.<br/><br/>

          The shawl lapels are found almost exclusively on clothing that fits a black tie, but some would think that they are not as formal as collared lapels. <br/><br/>

          You can also say that they have more trouble. Use your judgment based on events and personal style.<br/><br/>

          <h3>Peak Lapel</h3>
          The peak lap is slightly wider than the notched lap, and its edge is “top” toward your face. The highest lapels first appeared in highly formal, highly traditional clothing such as tuxedo and suit jackets, such as tuxedos. <br/><br/>

          It is generally considered more formal than a scored lapel, and because it is less common, it is more like a statement. <br/><br/>

          But please don’t shy away – the directionality of the lapel is very strong, which can make you look taller and slimmer. Win and win.<br/><br/>

          <h3>Double-Breasted Jacket</h3>
          The front flap of the double-breasted jacket overlaps the two sets of buttons. Traditionally, from the gangs of the 1930s to the Wall Street agents of the 80s, today’s double-breasted suits are slimmer, perfect for those who want a bold look.<br/><br/>

          Although more formal than the single-breasted brothers, we say you can wear DB anywhere: office, burger, and wedding – this is why we make double-breasted evening gowns.<br/><br/>

          <h3>Coat Material</h3>
          Wool is a widely used fabric for suits and tuxedos. Its pleats are exquisite and have a smooth appearance that makes the look smoother.<br/><br/>

          It is well known for its insulation, breathability, and durability, which basically makes it a versatile revival for suits and ties. Wool is hard to make mistakes.<br/><br/>

          In the cold weather, try a velvet evening gown to make a difference in a low-key posture. Plush velvet adds a rich texture to your look and feels warm in the fall and winter, but its appearance is out of date during the warmer months.<br/><br/>

          Velvet feels heavier, but when you wear a velvet jacket, it looks as light as a wool jacket. This is good news for the dance floor.<br/><br/>

          <h2>Choose Smart Fashion for the Perfect Wedding Tuxedo</h2>
          Don’t get lost in the insanely high prices of local tailors and brands; we will provide the highest quality tuxedo for your wedding making you look like a king ready to conquer on your special day.

          </p>
      </div>
      <Footer />
    </div>
  )
}

export default WeddingBlog