import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DashEditProduct = () => {
    const product = useLoaderData();
   const navigate = useNavigate();
    const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [brand, setBrand] = useState(product.brand);
  const [id, setId] = useState(product.id);
  const [description, setDescription] = useState(product.description);
  const [image_url, setImageURL] = useState(product.image_url);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const data = { id, title, brand, price, description, image_url };

    await fetch(`http://localhost:3000/shoes/${product.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
      
        toast.success(`Product Updated Successfully`, {
position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
setTimeout(()=>{
  navigate('/dashboard/products');
},2000)

    }
  
    );
   
    
  };
    return (
        
        <div>
          
          <ToastContainer></ToastContainer>

        <h1 className="text-5xl font-bold text-center">Edit Product</h1>
        
        <div className="my-16">
          <form onSubmit={handleSubmit}>
          <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="id"
                placeholder="ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="brand"
                placeholder="Brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="number"
                name="price"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="image_url"
                placeholder="Image URL"
                value={image_url}
                onChange={(e) => setImageURL(e.target.value)}
              />
            </div>
           
            <div className="mt-2 flex justify-center items-center">
              <input
                className="btn mt-4 w-full bg-red-500 text-white p-4"
                type="submit"
                value="Edit product"
              />
            </div>
           
          </form>
         
        </div>
      </div>
    );
};

export default DashEditProduct;