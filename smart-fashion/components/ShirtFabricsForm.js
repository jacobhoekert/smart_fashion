import React, { useState } from "react";
import FormStyleCard from "./FormStyleCard";
import "../styles/order_form.scss";

const ShirtFabricsForm = props => {
  const [clicked, setClicked] = useState(null);

  const handleClick = e => {
    props.setSelectedShirtFabric(e.currentTarget.id);
    props.setError(null);
  };

  const imagesList = [
    "/shirt-fabrics/black.jpg",
    "/shirt-fabrics/dark-blue.jpg",
    "/shirt-fabrics/light-grey.jpg",
    "/shirt-fabrics/dark-purple.jpg",
    "/shirt-fabrics/light-pink.jpg",
    "/shirt-fabrics/dark-grey.jpg",
    "/shirt-fabrics/white.jpg",
    "/shirt-fabrics/blue.jpg",
    "/shirt-fabrics/light-purple.jpg",
    "/shirt-fabrics/red.jpg",
    "/shirt-fabrics/light-blue.jpg",
    "/shirt-fabrics/tan.jpg",
    "/shirt-fabrics/light-green.jpg",
    "/shirt-fabrics/very-dark-blue.jpg",
    "/shirt-fabrics/maroon.jpg",
    "/shirt-fabrics/brown.jpg",
    "/shirt-fabrics/purple-checkered-p1.jpg",
    "/shirt-fabrics/purple-white-blue-checkered-p2.jpg",
    "/shirt-fabrics/purple-white-checkered-p3.jpg",
    "/shirt-fabrics/red-light-blue-checkered-p4.jpg",
    "/shirt-fabrics/blue-purple-checkered-pattern-p5.jpg",
    "/shirt-fabrics/yellow-blue-checkered-pattern-p6.jpg",
    "/shirt-fabrics/purple-dark-grey-checkered-pattern-p7.jpg",
  ]

  return (
    <>
      <h3>{props.isGolf ? "Choose Polo Shirt Color" : "Choose Shirt Fabric"}</h3>
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

export default ShirtFabricsForm;
