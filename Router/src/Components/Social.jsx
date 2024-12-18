import React from "react";
import { useNavigate } from "react-router-dom";

const Social = () => {
  const navigate = useNavigate(); // this hook use to change the path.

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      Social
      <button onClick={handleClick}>Home</button>
    </div>
  );
};

export default Social;
