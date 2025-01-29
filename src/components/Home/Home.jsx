import Banner from "../Banner/Banner";
import Products from "../Products/Products";
// import { Helmet } from "react-helmet";
import { useEffect } from "react";


const Home = () => {

    useEffect(() => {
        document.title = "Home - My Gadget Store";
    }, []);
    return (
        <div>
            {/* <Helmet>
                <title>Home - My Gadget Store</title>
            </Helmet> */}
            <Banner></Banner>
            <Products></Products>


        </div>
    );
};

export default Home;