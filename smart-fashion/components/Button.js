import React from 'react';
import Link from 'next/link';
import '../styles/button.scss';

const Button = (props) => {
  return (
    <Link href={props.path}><button className="button1">{props.text}</button></Link>
  )
}

export default Button