import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate(); // this hook use to change the path.

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      Projects
      <button onClick={handleClick}>Home</button>
      {/* <Outlet></Outlet>....THIS WILL BE NECESSARY WHEN WE WNATS TO RENDER CHILDREN ELEMENT IN NESTED ROUTING*/}
    </div>
  );
};

export default Projects;
