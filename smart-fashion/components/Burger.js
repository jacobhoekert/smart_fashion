import React from 'react';
import '../styles/burger.scss';

const Burger = ({open, setOpen, black}) => {
  let color = 'white';

  if (black) {
    color = 'black'
  }

  return (
    <button className={open ? "burger fixed" : "burger"} onClick={() => setOpen(!open)} aria-label="hamburger menu icon">
      <div style={open ? {transform: 'rotate(45deg)', background: 'white'} : {transform: 'rotate(0)', background: color}}/>
      <div style={open ? {transform: 'translateX(-40px)', opacity: '0', background: 'white'} : {transform: 'translateX(0)', opacity: '1', background: color}}/>
      <div style={open ? {transform: 'rotate(-45deg)', background: 'white'} : {transform: 'rotate(0)', background: color}}/>
    </button>
  )
}

export default Burger;