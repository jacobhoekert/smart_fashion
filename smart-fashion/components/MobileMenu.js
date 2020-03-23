import React from 'react';
import Link from 'next/link';
import '../styles/mobile_menu.scss';

const MobileMenu = ({open, setOpen}) => {
  return (
    <nav id="mobile-menu" style={open ? {transform: 'translateX(0%)', transition: 'all 0.3s ease-in-out'} : {transform: 'translateX(100%)', transition: 'all 0.3s ease-in-out'}}>
      <a><Link href="/"><p>Home</p></Link></a>
      <a><Link href="/about"><p>About</p></Link></a>
      <a><Link href="/order"><p>Order Online</p></Link></a>
      <a><Link href="/blog"><p>Blog</p></Link></a>
      <a><Link href="/contact"><p>Contact</p></Link></a>
    </nav>
  )
}
export default MobileMenu;