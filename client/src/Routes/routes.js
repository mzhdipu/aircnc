import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/Shared/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import Main from "../Layout/Main";
import ComingSoon from "../Pages/Shared/ComingSoon";
import Details from "../Pages/Details";
import SearchResult from "../Pages/SearchResult";
import PrivateRoute from "./PrivateRoute";
import Checkout from "../Pages/Checkout";
import DashboardLayout from "../Layout/DashboardLayout";
import Welcome from "../Pages/Dashboard/Welcome";
import MyBookings from "../Pages/Dashboard/MyBookings";
import BecomeAHost from "../Pages/Dashboard/BecomeAHost";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AllBookings from "../Pages/Dashboard/AllBookings";
import AddHome from "../Pages/AddHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/comming-soon",
        element: <ComingSoon />,
      },
      {
        path: "/service-details",
        element: <Details></Details>,
      },
      {
        path: "/search-result",
        element: <SearchResult />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children : [
      {
        path: '',
        element: <Welcome></Welcome> 
      },
      {
        path: '/dashboard/my-bookings',
        element: <MyBookings></MyBookings>
      },
      {
        path: '/dashboard/become-host',
        element: <BecomeAHost></BecomeAHost> 
      },
      {
        path: '/dashboard/all-users',
        element: <AllUsers/>
      },
      {
        path: '/dashboard/all-bookings',
        element: <AllBookings/>
      },
      {
        path: '/dashboard/add-home',
        element: <AddHome/>
      }
    ]
  },
]);

export default router;
