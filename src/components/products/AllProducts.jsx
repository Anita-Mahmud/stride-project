import { Link, useLoaderData } from "react-router-dom";
import Product from "./Product";


const AllProducts = () => {
    const products = useLoaderData();
    return (
        <div className="my-20">
            <h2 className="text-4xl font-bold text-center my-10">All Products</h2>
          <div className="flex flex-wrap gap-12 justify-center">
            {
                products.slice(0,3).map(product=><Product key={product.id} {...product}></Product>)
            }
          </div>
          <div className="flex justify-center my-10">
          <button className="btn btn-outline btn-info">
            <Link to="/products">Show All Products</Link>
          </button>
          </div>
        </div>
    );
};

export default AllProducts;