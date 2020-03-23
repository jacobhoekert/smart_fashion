import React, { useState } from 'react';
import FormStyleCard from './FormStyleCard';
import '../styles/order_form.scss';

const ShirtStylesForm = (props) => {
  const [clicked, setClicked] = useState(null);

  const handleClick = (e) => {
    props.setSelectedShirtStyle(e.currentTarget.id);
    props.setError(null);
  }

  return (
    <>
      <h3>Choose Shirt Style</h3>
      <div className="order-flex-container" style={props.error && {border: "1px solid red"}}>
        <FormStyleCard
          id="0"
          clicked={clicked}
          setClicked={setClicked}
          handleClick={handleClick}
          columnStyle="three-columns"
          image="/shirt-styles/regular-fit.png"
          alt="regular fit dress shirt"
          title="Regular Fit"
          desc="Our most generous fit, with two pleats at the back for added comfort"
        />
        <FormStyleCard 
          id="1"
          clicked={clicked}
          setClicked={setClicked}
          handleClick={handleClick}
          columnStyle="three-columns"
          image="/shirt-styles/tailored-fit.png"
          alt="tailored fit dress shirt"
          title="Tailored Fit"
          desc="A more fitted silhouette through the body and sleeves, with no back pleats"
        />
        <FormStyleCard 
          id="2"
          clicked={clicked}
          setClicked={setClicked}
          handleClick={handleClick}
          columnStyle="three-columns"
          image="/shirt-styles/slim-fit.png"
          alt="slim fit dress shirt"
          title="Slim Fit"
          desc="Our slimmest fit with added back darts for a neater waistline"
        />
      </div>
    </>
  )
}

export default ShirtStylesForm