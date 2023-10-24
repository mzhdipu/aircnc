import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div>
      <div className="md:flex relative min-h-screen gap-5">
        <Sidebar className='w-64'></Sidebar>
        <div className="flex-1 ml-64">
            <div className="p-5">
                <Outlet></Outlet>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
