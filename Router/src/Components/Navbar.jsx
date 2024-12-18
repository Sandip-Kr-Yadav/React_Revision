import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      {/* <h1>Hello there</h1>
      Using normal <a> tag here whole page will be refreshed  and this can be used outside of router.
      <div className=" text-white bg-gray-500 p-[20px] flex justify-between border-[2px] border-black border-solid mb-[40px]">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/social">Social</a>
        <a href="/projects">Projects</a>
      </div> */}
      <div>
        {/* Here we are using <Link> or <NavLink> tag. In this the whole page will be not be refreshed 
        And also Here as we are using Link Tag so we have to use only inside router which we made it in App.jsx*/}
        <div className=" text-white bg-gray-500 p-[20px] flex justify-between border-[2px] border-black border-solid mb-[25px]">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/social">Social</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
