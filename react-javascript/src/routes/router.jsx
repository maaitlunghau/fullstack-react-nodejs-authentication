import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Products from "../pages/Products";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { Navigate } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "/home", element: <Navigate to="/" replace /> },
            { path: "/users", element: <Users /> },
            { path: "/products", element: <Products /> }
        ]
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    }
]);