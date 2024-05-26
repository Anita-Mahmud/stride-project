import { useLoaderData } from "react-router-dom";
import Product from "../components/products/Product";


const DashProducts = () => {
    const products = useLoaderData();
    
    return (
        <div className="flex flex-wrap gap-4 justify-center my-20">
            {
                products.map(product=><Product key={product.id} {...product}></Product>)
            }
        </div>
    );
};

export default DashProducts;