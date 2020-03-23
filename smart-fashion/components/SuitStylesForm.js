import React, { useState } from 'react';
import FormStyleCard from './FormStyleCard';
import '../styles/order_form.scss';

const SuitStylesForm = (props) => {
  const [clicked, setClicked] = useState(null);

  const handleClick = (e) => {
    props.setSelectedSuitStyle(e.currentTarget.id);
    props.setError(null);
  }

  return (
    <>
      <h3>Choose Suit Style</h3>
      <div className="order-flex-container" style={props.error && {border: "1px solid red"}}>
        <FormStyleCard
          id="0"
          clicked={clicked}
          setClicked={setClicked}
          handleClick={handleClick}
          columnStyle="two-columns"
          image="/suit-styles/one-button-suit.jpeg"
          alt="one button suit jacket"
          title="One-Button"
        />
        <FormStyleCard 
          id="1"
          clicked={clicked}
          setClicked={setClicked}
          handleClick={handleClick}
          columnStyle="two-columns"
          image="/suit-styles/two-button-suit.jpg"
          alt="two button suit jacket"
          title="Two-Button"
        />
        <FormStyleCard 
          id="2"
          clicked={clicked}
          setClicked={setClicked}
          handleClick={handleClick}
          columnStyle="two-columns"
          image="/suit-styles/three-button-suit.jpg"
          alt="three button suit jacket"
          title="Three-Button"
        />
        <FormStyleCard 
          id="3"
          clicked={clicked}
          setClicked={setClicked}
          handleClick={handleClick}
          columnStyle="two-columns"
          image="/suit-styles/double-breasted-suit.jpg"
          alt="double breasted suit jacket"
          title="Double-Breasted"
        />
      </div>
    </>
  )
}

export default SuitStylesForm