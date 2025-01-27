import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('/FakeData.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    }
        , [])
    console.log(products);



    return (
        <div className="flex justify-center items-start space-x-4 border-2 border-red-600">

            {/* Categories */}
            <div className="w-1/5 border-2 border-red-500 mt-40">
                <h1 className="text-center text-4xl  font-bold mt-10">Categories</h1>

                <ul className="mt-10 flex flex-col items-center space-y-4">
                    <button className="btn btn-su text-xl font-bold">Smartphones</button>
                    <button className="btn btn-su text-xl font-bold">Laptops</button>
                    <button className="btn btn-su text-xl font-bold">Accessories</button>
                </ul>
            </div>


            {/* Products */}
            <div className="w-4/5 border-2 border-red-500">
                <h1 className="text-center text-4xl  font-bold mt-10 mb-20">Explore Cutting-Edge Gadgets</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center border-2 border-red-500">
                    {
                        products.map(product => <Product
                            key={product.product_id}
                            product={product}
                        ></Product>)
                    }
                </div>

            </div>



        </div>
    );
};

export default Products;