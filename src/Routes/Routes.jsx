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


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
        {
          path:'sec',
          element:<PrivateRoute><Secret></Secret></PrivateRoute>

        }
      ]
    },
  ]);