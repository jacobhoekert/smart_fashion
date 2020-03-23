import React, { useState } from "react";
import FormStyleCard from "./FormStyleCard";
import "../styles/order_form.scss";

const OvercoatFabricsForm = props => {
  const [clicked, setClicked] = useState(null);

  const handleClick = e => {
    props.setSelectedOvercoatFabric(e.currentTarget.id);
    props.setError(null);
  };

  const imagesList = [
    "/overcoat-fabrics/tan.jpg",
    "/overcoat-fabrics/black.jpg",
    "/overcoat-fabrics/dark-blue.jpg",
    "/overcoat-fabrics/dark-grey.jpg",
    "/overcoat-fabrics/grey.jpg",
  ]

  return (
    <>
      <h3>Choose Overcoat Fabric</h3>
      <div className="order-flex-container" style={props.error && {border: "1px solid red"}}>
        {props.list.map((fabric, index) => {
          return (
            <FormStyleCard
              id={index}
              clicked={clicked}
              setClicked={setClicked}
              handleClick={handleClick}
              columnStyle="five-columns"
              image={imagesList[index]}
              alt=""
              title={fabric}
            />
          );
        })}
      </div>
    </>
  );
};

export default OvercoatFabricsForm;
