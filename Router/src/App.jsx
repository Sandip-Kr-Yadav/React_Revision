import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Social from "./Components/Social";
import Params from "./Components/Params";
import Buttons from "./Components/Buttons";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar></Navbar>
        <Home />
        <Buttons></Buttons>
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar></Navbar>
        <About />
      </div>
    ),
  },
  {
    path: "/social",
    element: (
      <div>
        <Navbar></Navbar>
        <Social />
      </div>
    ),
  },
  {
    path: "/projects",
    element: (
      <div>
        <Navbar></Navbar>
        <Projects />
      </div>
    ),

    // EXAMPLE OF NESTED ROUTING /projects/sorting  and <Outlet> TAG MUST BE USED IN PARENT ELEMENT...
    // children:[
    //   {
    //     path:'visusl',     DO NOT USE '/' HERE.
    //     element:<div>Sorting</div>
    //   },
    //   {},......  ! can have many !
    // ]
  },
  {
    path: "/:extra", //Here extra is called Route Parameter. After ':' we can write anything but element will be shown of what is written down.
    element: (
      <div>
        <Navbar></Navbar>
        <Params></Params>
      </div>
    ),
  },
  {
    path: "*", // all path which are not given above will come under it
    element: <div>404 Page not Found</div>,
  },
]);
function App() {
  return (
    <>
      <div>
        {/* <Navbar></Navbar>If We use Link tag the we cannot write it here we have to write it inside router tag and if not used Link tag then it's okay to write it here */}
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
