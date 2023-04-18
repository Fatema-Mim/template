import React from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="flex ">
        <div className="bg-color1  w-56">
            <Sidebar/>
        </div>
        <div className="flex flex-col flex-1 bg-gray-200">
              <div className="container flex-1  mx-auto overflow-y-auto">
                <Outlet/>
              </div>
            </div>
      </div>
    </>
  );
};

export default Main;
