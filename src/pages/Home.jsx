import Banner from "../components/home/Banner";
import AllProducts from "../components/products/AllProducts";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Banner></Banner>
            <AllProducts></AllProducts>
        </div>
    );
};

export default Home;