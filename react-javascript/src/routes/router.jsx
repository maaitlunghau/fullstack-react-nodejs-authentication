import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Products from "../pages/Products";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { Navigate } from "react-router-dom";
import AdminLayout from "@/layout/AdminLayout";
import Dashboard from "@/pages/Dashboard";
import AdminUsers from "@/pages/AdminUsers";
import AdminProducts from "@/pages/AdminProducts";

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
        path: "/admin",
        element: <AdminLayout />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: "", element: <Navigate to="/admin" replace /> },
            { path: "dashboard", element: <Navigate to="/admin" replace /> },
            { path: "users", element: <AdminUsers /> },
            { path: "products", element: <AdminProducts /> }
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