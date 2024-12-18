import React from "react";
import { useParams } from "react-router-dom";

const Params = () => {
  const { extra } = useParams(); // varable name must be same to what we have written in path

  return (
    <div>
      <h1>{extra}</h1>
    </div>
  );
};

export default Params;
