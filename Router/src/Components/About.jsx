import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate(); // this hook use to change the path.

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      About
      <button onClick={handleClick}>Home</button>
    </div>
  );
};

export default About;
