import React, { useState } from 'react';
import FormStyleCard from './FormStyleCard';
import '../styles/order_form.scss';

const CuffStylesForm = (props) => {
  const [clicked, setClicked] = useState(null);

  const handleClick = (e) => {
    props.setSelectedCuffStyle(e.currentTarget.id);
    props.setError(null);
  }

  return (
    <>
      <h3>Choose Shirt Cuff Style</h3>
      <div className="order-flex-container" style={props.error && {border: "1px solid red"}}>
        <FormStyleCard
          id="0"
          clicked={clicked}
          setClicked={setClicked}
          handleClick={handleClick}
          columnStyle="two-columns"
          image="/cuff-styles/single-cuff.jpg"
          alt="single cuff example"
          title="Single Cuff"
          desc="A classic, universal style. The single works with a number of dress codes, though it’s slightly less formal and more suited for day."
        />
        <FormStyleCard 
          id="1"
          clicked={clicked}
          setClicked={setClicked}
          handleClick={handleClick}
          columnStyle="two-columns"
          image="/cuff-styles/double-cuff.jpg"
          alt="double cuff, or french example"
          title="Double Cuff"
          desc="Also known as the French. It's folded back with holes to be fastened with cufflinks instead of buttons. A formal option."
        />
      </div>
    </>
  )
}

export default CuffStylesForm