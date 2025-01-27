import { useState } from "react";

const Products = () => {

    const [products, setProducts] = useState([])
    fetch('')
    .then(response => response.json())
    .then(data => setProducts(data))


    return (
        <div>
            {/* Categories */}
            <div>

            </div>


            {/* Products */}
            <div>

            </div>
        </div>
    );
};

export default Products;