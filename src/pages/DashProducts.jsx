import { useLoaderData } from "react-router-dom";
import Product from "../components/products/Product";
import DashSingleProduct from "../components/dashboard/DashSingleProduct";
import { useEffect, useState } from "react";


const DashProducts = () => {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/shoes/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };
    
    return (
       <div>
        <h1 className="text-center text-3xl font-bold m-8">All Products</h1>
        <div className="flex flex-wrap gap-4 justify-center my-10">
            {
                products.map(product=><DashSingleProduct key={product.id} {...product}  
                onDelete={handleDeleteProduct}></DashSingleProduct>)
            }
        </div>
       </div>
    );
};

export default DashProducts;