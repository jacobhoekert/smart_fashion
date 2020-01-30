import React from 'react';
import Link from 'next/link';
import '../styles/nav_bar.scss';

const NavBar = () => {
  return (
    <div id="nav">
      <Link href="/"><img id="logo" src="/smart-fashion-logo.svg" alt="Smart Fashion Logo"/></Link>
      <div id="nav-items">
        <Link href="/about"><p>About</p></Link>
        <Link href="/order"><p>Order Online</p></Link>
        <Link href="/contact"><p>Contact</p></Link>
      </div>
    </div>
  )
}

export default NavBar