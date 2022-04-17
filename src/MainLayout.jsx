import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <div className="flex items-stretch h-full " >
            <SideBar></SideBar>
            <div className="p-5 bg-gray-100 grow">
                <Outlet />
            </div>
        </div>
    );
}

export default MainLayout;