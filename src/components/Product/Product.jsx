import React from 'react';
import { Link } from 'react-router-dom';
import { ImCoinDollar } from "react-icons/im";

const Product = ({ product }) => {
    const {
        product_id,
        product_title,
        product_image,
        category,
        price,
        description,
        specification,
        availability,
        rating
    } = product;

    return (
        <div>
            <div className="border-2 border-gray-400  card bg-base-100 w-96 shadow-sm p-3 flex flex-col justify-center mx-auto space-y-3">
                <figure className="border-2 border-gray-300 rounded-xl p-2">
                    <img className="h-[200px] w-full rounded-lg"
                        src={product_image} />
                </figure>
                <h2 className="card-title mt-4">{product_title}</h2>
                <p className='text-lg flex justify-start items-center '> <ImCoinDollar className='text-3xl' /> {price} </p>

                <Link
                    to={`/products/${product_id}`}
                    className="btn btn-accent w-fit rounded-full"
                > View  Details
                </Link>
            </div>
        </div >
    );
};

export default Product;