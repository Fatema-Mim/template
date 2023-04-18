import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../pages/Main";
import Dashboard from "../component/Dashboard";
import AboutUs from "../component/AboutUs.jsx/AboutUs";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:"/",
            element:<Dashboard/>
          },
        {
            path:"aboutUs",
            element:<AboutUs/>
          }
      ]
    },
  ]);