import React, { useState } from 'react';
import FormStyleCard from './FormStyleCard';
import '../styles/order_form.scss';

const OvercoatStylesForm = (props) => {
  const [clicked, setClicked] = useState(null);

  const handleClick = (e) => {
    props.setSelectedOvercoatStyle(e.currentTarget.id);
    props.setError(null);
  }

  return (
    <>
      <h3>Choose Overcoat Style</h3>
      <div className="order-flex-container" style={props.error && {border: "1px solid red"}}>
        <FormStyleCard
          id="0"
          clicked={clicked}
          setClicked={setClicked}
          handleClick={handleClick}
          columnStyle="three-columns"
          image="/overcoat-styles/overcoat-1.jpg"
          alt="black overcoat"
          title="Style 1"
        />
        <FormStyleCard 
          id="1"
          clicked={clicked}
          setClicked={setClicked}
          handleClick={handleClick}
          columnStyle="three-columns"
          image="/overcoat-styles/overcoat-2.jpg"
          alt="tan overcoat"
          title="Style 2"
        />
        <FormStyleCard 
          id="2"
          clicked={clicked}
          setClicked={setClicked}
          handleClick={handleClick}
          columnStyle="three-columns"
          image="/overcoat-styles/overcoat-3.jpg"
          alt="dark grey plaid overcoat"
          title="Style 3"
        />
        <FormStyleCard 
          id="3"
          clicked={clicked}
          setClicked={setClicked}
          handleClick={handleClick}
          columnStyle="three-columns"
          image="/overcoat-styles/overcoat-4.jpg"
          alt="tan overcoat"
          title="Style 4"
        />
        <FormStyleCard 
          id="4"
          clicked={clicked}
          setClicked={setClicked}
          handleClick={handleClick}
          columnStyle="three-columns"
          image="/overcoat-styles/overcoat-5.jpg"
          alt="grey speckled overcoat"
          title="Style 5"
        />
        <FormStyleCard 
          id="5"
          clicked={clicked}
          setClicked={setClicked}
          handleClick={handleClick}
          columnStyle="three-columns"
          image="/overcoat-styles/overcoat-6.jpg"
          alt="brown overcoat"
          title="Style 6"
        />
      </div>
    </>
  )
}

export default OvercoatStylesForm