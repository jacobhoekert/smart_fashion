import React from 'react';
import Link from 'next/link';
import '../styles/nav_bar.scss';

const NavBar = (props) => {
  return (
    <div id="nav" style={{borderBottom: props.black && "1px solid black"}}>
      <Link href="/"><img id="logo" src={props.black ? "/smart-fashion-logo-dark.svg" : "/smart-fashion-logo.svg"} alt="Smart Fashion Logo"/></Link>
      <div id="nav-items">
        <Link href="/about">
          <p style={{color: props.black && "black"}}>
            About
          </p>
        </Link>
        <Link href="/order">
          <p style={{color: props.black && "black"}}>
            Order Online
          </p>
        </Link>
        <Link href="/blog">
          <p style={{color: props.black && "black"}}>
            Blog
          </p>
        </Link>
        <Link href="/contact">
          <p style={{color: props.black && "black"}}>
            Contact
          </p>
        </Link>
      </div>
    </div>
  )
}

export default NavBar