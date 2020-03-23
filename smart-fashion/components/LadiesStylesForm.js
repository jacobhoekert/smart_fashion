import React, { useState } from 'react';
import FormStyleCard from './FormStyleCard';
import '../styles/order_form.scss';

const LadiesStylesForm = (props) => {
  const [clicked, setClicked] = useState(null);

  const handleClick = (e) => {
    props.setSelectedLadiesStyle(e.currentTarget.id);
    props.setError(null);
  }

  return (
    <>
      <h3>Choose Ladies Style</h3>
      <div className="order-flex-container" style={props.error && {border: "1px solid red"}}>
        <FormStyleCard
          id="0"
          clicked={clicked}
          setClicked={setClicked}
          handleClick={handleClick}
          columnStyle="three-columns"
          image="/ladies-styles/ladies-business-suit.jpg"
          alt="womans business suit"
          title="Business Suit"
        />
        <FormStyleCard 
          id="1"
          clicked={clicked}
          setClicked={setClicked}
          handleClick={handleClick}
          columnStyle="three-columns"
          image="/ladies-styles/blouse-and-skirt.jpg"
          alt="business blouse and skirt"
          title="Blouse & Skirt"
        />
        <FormStyleCard 
          id="2"
          clicked={clicked}
          setClicked={setClicked}
          handleClick={handleClick}
          columnStyle="three-columns"
          image="/ladies-styles/dress.jpg"
          alt="dark dress"
          title="Dress"
        />
      </div>
      <p>We’ll work with you directly to make you the suit, blouse, or dress of your dreams. We'll contact you after you fill out the form.</p>
    </>
  )
}

export default LadiesStylesForm