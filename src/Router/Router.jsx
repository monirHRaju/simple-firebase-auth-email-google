import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Root from "../Pages/Root";
import About from "../Pages/About";
import Profile from "../Pages/Profile";
import SignUp from "../Components/SignUp";
import Signin from "../Pages/Signin";
import PrivateRoute from "./PrivateRoute";
import Orders from "../Pages/Orders";
import Dashboard from "../Pages/Dashboard";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/profile',
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
            },
            {
                path: '/signup',
                Component: SignUp
            },
            {
                path: '/signin',
                Component: Signin
            },
            {
                path: '/orders',
                element: <PrivateRoute>
                    <Orders></Orders>
                </PrivateRoute>
            },
            
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },

        ]
    }
])