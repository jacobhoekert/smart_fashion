import React, { useState } from "react";
import FormStyleCard from "./FormStyleCard";
import "../styles/order_form.scss";

const SuitFabricsForm = props => {
  const [clicked, setClicked] = useState(null);

  const handleClick = e => {
    props.setSelectedSuitFabric(e.currentTarget.id);
    props.setError(null);
  };

  const imagesList = [
    "/suit-fabrics/black.jpg",
    "/suit-fabrics/grey.jpg",
    "/suit-fabrics/tan.jpg",
    "/suit-fabrics/red.jpg",
    "/suit-fabrics/maroon.jpg",
    "/suit-fabrics/dark-blue.jpg",
    "/suit-fabrics/light-blue.jpg",
    "/suit-fabrics/sky-blue.jpg",
    "/suit-fabrics/dark-grey.jpg",
    "/suit-fabrics/dark-tan.jpg",
    "/suit-fabrics/dark-purple.jpg",
    "/suit-fabrics/light-blue-pattern.jpg",
    "/suit-fabrics/green-pattern.jpg",
    "/suit-fabrics/red-pattern.jpg",
    "/suit-fabrics/dark-blue-pattern.jpg",
    "/suit-fabrics/dark-grey-pattern.jpg",
    "/suit-fabrics/light-grey-pattern.jpg",
    "/suit-fabrics/orange-pattern.jpg",
    "/suit-fabrics/grey-and-light-blue-pattern.jpg",
    "/suit-fabrics/tan-pattern.jpg",
  ]

  return (
    <>
      <h3>{props.isGolf ? "Choose Pants/Shorts Fabric" : "Choose Suit Fabric"}</h3>
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

export default SuitFabricsForm;
