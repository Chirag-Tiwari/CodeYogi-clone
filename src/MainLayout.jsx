import React, { useState } from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function MainLayout() {
  const [showSideBar, updateShowSideBar] = useState(false);

  return (
    <div className="flex items-stretch h-full ">
      <SideBar></SideBar>
      <GiHamburgerMenu
        className="text-gray-600 text-2xl ml-2 sm:hidden"
        onClick={() => {
          console.log("hello world");
        }}
      />
      <div className="p-5 bg-gray-100 grow">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
