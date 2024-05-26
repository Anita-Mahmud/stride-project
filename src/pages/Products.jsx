
import { useLoaderData } from 'react-router-dom';
import Product from '../components/products/Product';

const Products = () => {
    const products = useLoaderData();
    
    return (
        <div className="flex flex-wrap gap-12 justify-center mb-20">
            {
                products.map(product=><Product key={product.id} {...product}></Product>)
            }
        </div>
    );
};

export default Products;