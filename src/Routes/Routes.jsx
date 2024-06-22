import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import OurServices from "../Pages/OurServices/OurServices";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PandingWork from "../Pages/PandingWorks/PandingWork";
import Secret from "../components/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../components/WorkCard/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddWorks from "../Pages/Dashboard/AddWorks/AddWorks";
import AdminRoute from "./AdminRoute";
import ManageWork from "../Pages/Dashboard/ManageWork/ManageWork";
import Payment from "../Pages/Dashboard/Payment/Payment";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>

        },
        { path:'ourservice',
        element:<OurServices></OurServices>

        },
        {
         path:'login',
         element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
        {
          path:'pandingwork',
          element:<PandingWork></PandingWork>
        },
        
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        //normal user
        {
          path:'dashboard/cart',
          element:<Cart></Cart>
        },
        {
          path:'dashboard/payment',
          element:<Payment></Payment>
        },
        //admin routes
        { 
          path:'dashboard/users',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>

        },
        {
          path:'dashboard/items',
          element:<AdminRoute><ManageWork/></AdminRoute>

        },
        {
          path:'dashboard/addWork',
          element:<AddWorks></AddWorks>
        }
      ]
    }
  ]);