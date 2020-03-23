import React from 'react';
import Link from 'next/link';
import '../styles/button.scss';

const Button = (props) => {
  if (props.path != undefined) {
     // If the href path is long, it is a normal link so use anchor tag, not Next Link
    if (props.path.length > 50) {
      return (
        <a href={props.path}><button className="button1">{props.text}</button></a>
      )
    } else {
      return (
        <Link href={props.path}><button className="button1">{props.text}</button></Link>
      )
    }
  } else {
    return (
      <button className="button1">{props.text}</button>
    )
  }
 
}

export default Button