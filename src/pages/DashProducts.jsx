
import DashSingleProduct from "../components/dashboard/DashSingleProduct";
import { useEffect, useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DashProducts = () => {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/shoes/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
    toast.error('Product deleted successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  };
    
    return (
       <div>
        <ToastContainer></ToastContainer>
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