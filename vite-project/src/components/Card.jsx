import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="Card">
        <img src={props.image} alt="" />
        <h3>Name:{props.name}</h3>
        <h3>Price:{props.price}</h3>
      </div>
    </>
  );
};

export default Card;
