import React from "react";
import { useNavigate } from "react-router-dom";

const Buttons = () => {
  const navigate = useNavigate(); // this hook use to change the path.

  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        About
      </button>
      <button
        onClick={() => {
          navigate("/projects");
        }}
      >
        Projects
      </button>
      <button
        onClick={() => {
          navigate("/social");
        }}
      >
        Social
      </button>
    </div>
  );
};

export default Buttons;
