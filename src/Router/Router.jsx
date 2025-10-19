import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Root from "../Pages/Root";
import About from "../Pages/About";
import Profile from "../Pages/Profile";
import SignUp from "../Components/SignUp";
import Signin from "../Pages/Signin";

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
                Component: Profile
            },
            {
                path: '/signup',
                Component: SignUp
            },
            {
                path: '/signin',
                Component: Signin
            }
        ]
    }
])