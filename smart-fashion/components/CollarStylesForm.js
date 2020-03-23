import React, { useState } from 'react';
import FormStyleCard from './FormStyleCard';
import '../styles/order_form.scss';

const CollarStylesForm = (props) => {
  const [clicked, setClicked] = useState(null);

  const handleClick = (e) => {
    props.setSelectedCollarStyle(e.currentTarget.id);
    props.setError(null);
  }

  return (
    <>
      <h3>Choose Shirt Collar Style</h3>
      <div className="order-flex-container" style={props.error && {border: "1px solid red"}}>
        <FormStyleCard
          id="0"
          clicked={clicked}
          setClicked={setClicked}
          handleClick={handleClick}
          columnStyle="three-columns"
          image="/collar-styles/classic-collar.jpg"
          alt=""
          title="Classic"
          desc="The most universal collar style. Ideal for both work and everyday wear. This collar looks great with or without a tie."
        />
        <FormStyleCard 
          id="1"
          clicked={clicked}
          setClicked={setClicked}
          handleClick={handleClick}
          columnStyle="three-columns"
          image="/collar-styles/button-down-collar.jpg"
          alt=""
          title="Button Down"
          desc=" Also known as the Oxford. It's sporty and low-key. Usually worn without a tie, the button-down is a versatile everyday option."
        />
        <FormStyleCard 
          id="2"
          clicked={clicked}
          setClicked={setClicked}
          handleClick={handleClick}
          columnStyle="three-columns"
          image="/collar-styles/wing-collar.jpg"
          alt=""
          title="Wing"
          desc="A traditional evening wear style. Perfect for formal occasions, black tie events, and for when the dress code is set to impress."
        />
      </div>
    </>
  )
}

export default CollarStylesForm