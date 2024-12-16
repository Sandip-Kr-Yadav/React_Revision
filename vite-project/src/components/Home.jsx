import React from "react";
import Card from "./Card";
import { data } from "../data/data.js";
const Home = () => {
  return (
    <>
      <div id="main">
        {data.map((val, index) => (
          <Card
            key={index}
            name={val.name}
            image={val.img}
            price={val.price}
          ></Card>
        ))}
      </div>
    </>
  );
};

export default Home;
