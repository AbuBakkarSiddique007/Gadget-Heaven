import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All Products');

    useEffect(() => {
        fetch('/FakeData.json')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    const filteredProducts = selectedCategory === 'All Products'
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <div className="flex justify-center items-start space-x-4">

            {/* Categories */}
            <div className="w-1/5 bg-gray-200 mt-40 rounded-2xl">
                <ul className="mt-10 flex flex-col items-center space-y-4">
                    <button
                        className={`btn text-xl font-bold rounded-2xl p-6 ${selectedCategory === 'All Products'
                            ? 'bg-customPurple text-white'
                            : 'bg-gray-200 text-black'
                            }`}
                        onClick={() => setSelectedCategory('All Products')}
                    >
                        All Products
                    </button>
                    <button
                        className={`btn text-xl font-bold rounded-2xl p-6 ${selectedCategory === 'Smartphones'
                            ? 'bg-customPurple text-white'
                            : 'bg-gray-200 text-black'
                            }`}
                        onClick={() => setSelectedCategory('Smartphones')}
                    >
                        Smartphones
                    </button>
                    <button
                        className={`btn text-xl font-bold rounded-2xl p-6 ${selectedCategory === 'Laptops'
                            ? 'bg-customPurple text-white'
                            : 'bg-gray-200 text-black'
                            }`}
                        onClick={() => setSelectedCategory('Laptops')}
                    >
                        Laptops
                    </button>
                    <button
                        className={`btn text-xl font-bold rounded-2xl p-6 ${selectedCategory === 'Accessories'
                            ? 'bg-customPurple text-white'
                            : 'bg-gray-200 text-black'
                            }`}
                        onClick={() => setSelectedCategory('Accessories')}
                    >
                        Accessories
                    </button>
                </ul>

            </div>

            {/* Products */}
            <div className="w-4/5">
                <h1 className="text-center text-4xl  font-bold mt-10 mb-20">Explore Cutting-Edge Gadgets</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4">
                    {filteredProducts.map(product => (
                        <Product
                            key={product.product_id}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
