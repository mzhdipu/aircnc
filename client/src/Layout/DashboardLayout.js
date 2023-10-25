import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Dashboard/Sidebar";
import { AuthContext } from "../contexts/AuthProvider";
import { getRole } from "../api/user";
import Spinner from "../Components/Spinner/Spinner";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getRole(user?.email).then((data) => {
      setRole(data);
      console.log(data);
      setLoading(false);
    });
  }, [user?.email]);

  return (
    <div className="md:flex relative min-h-screen gap-5">
      {loading ? (
        ''
      ) : (
        <>
          <Sidebar role={role} className="w-64"></Sidebar>
          <div className="flex-1 ml-64">
            <div className="p-5">
              <Outlet></Outlet>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardLayout;
