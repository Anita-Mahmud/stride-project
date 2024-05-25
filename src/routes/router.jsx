import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

import Products from "../pages/Products";

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
            
        }
       ]
    }
]);

export default router;
