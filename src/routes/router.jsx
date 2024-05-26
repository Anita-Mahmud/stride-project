import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

import Products from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
]);

export default router;
