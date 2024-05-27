import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

import Products from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import DashProducts from "../pages/DashProducts";
import AddProducts from "../pages/AddProducts";
import DashEditProduct from "../pages/DashEditProduct";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
       path:'/',
       element: <MainLayout></MainLayout>,
       children:[
        {
            index:true,
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:3000/shoes')
        },
        {
            path:'/products',
            element:<Products></Products>,
            loader:()=>fetch('http://localhost:3000/shoes')
            
        },
        {
            path:'/about',
            element:<About></About>
            
        },
        {
            path:'/contact',
            element:<Contact></Contact>
            
            
        },
       ],
       
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    },
    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                index:true,
                element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path:'/dashboard/products',
                element:<PrivateRoute><DashProducts></DashProducts></PrivateRoute>,
                
            },
            {
                path:'/dashboard/add/products',
                element:<PrivateRoute><AddProducts></AddProducts></PrivateRoute>
               
            },
            {
                path:'/dashboard/products/edit/:id',
                element:<PrivateRoute><DashEditProduct></DashEditProduct></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:3000/shoes/${params.id}`)
               
            },
        ]
    }
]);

export default router;
