import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useLoaderData, useParams } from "react-router-dom";
import { HiCurrencyDollar } from "react-icons/hi";
import { IoMdHeart } from "react-icons/io";
import { addToStoredCartList, addToStoredWishList } from "../../Utilities/LocalStorage";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { useState } from "react";
// import { Helmet } from "react-helmet";
import { useEffect } from "react";


const ProductDetails = () => {
    const { product_id } = useParams();
    const data = useLoaderData();
    const id = parseInt(product_id);
    const product = data.find((product) => product.product_id === id);

    const {
        product_id: currentProductId,
        product_title,
        product_image,
        category,
        price,
        description,
        specification,
        availability,
        rating,
    } = product;

    console.log(currentProductId);

    const [isWishListClicked, setIsWishListClicked] = useState(false);

    const handleAddToCart = () => {
        addToStoredCartList(product_id);
        toast.success("Item successfully added to your cart!", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };

    const handleAddToWishList = () => {
        addToStoredWishList(product_id);
        setIsWishListClicked(true);
        toast.success("Item successfully added to your WishList!", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };

    useEffect(() => {
        document.title = `${product_title} - My Gadget Store`;
    }, [product_title]);

    return (
        <div>
            {/* <Helmet>
                <title>Product Details - My Gadget Store</title>
            </Helmet> */}
            <div className="text-center text-white pt-10 pb-56 bg-customPurple">
                <h1 className="text-4xl font-bold">Product Details</h1>
                <p className="text-xl mt-5 mb-5">
                    Explore the latest gadgets that will take your experience to
                    <br />
                    the next level. From smart devices to the coolest accessories, we have it all!
                </p>
            </div>

            <div className="max-w-6xl bg-white flex justify-center items-center mx-auto rounded-3xl -mt-40 shadow-lg">
                <div className="w-1/3 shadow-lg p-3">
                    <figure>
                        <img
                            className="w-full rounded-2xl object-cover"
                            src={product_image}
                            alt={product_title}
                        />
                    </figure>
                </div>

                <div className="space-y-5 p-8 w-2/3">
                    <h1 className="text-4xl font-bold mt-5">{product_title}</h1>

                    <p className="text-2xl mt-5 flex items-center gap-2">
                        <span className="font-semibold">Price:</span>
                        <HiCurrencyDollar /> {price}
                    </p>

                    <p className="text-2xl mt-5">
                        <span className="font-semibold">Category:</span> {category}
                    </p>

                    <p className="text-2xl mt-5 flex items-center gap-2">
                        <span className="font-semibold">Rating:</span>
                        <span className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, index) =>
                                index < Math.floor(rating) ? (
                                    <AiFillStar key={index} className="text-yellow-500" />
                                ) : (
                                    <AiOutlineStar key={index} className="text-gray-400" />
                                )
                            )}
                        </span>
                        <span className="text-gray-600">({rating})</span>
                    </p>

                    <p className="text-xl mt-5 text-gray-700">{description}</p>

                    <p className="text-2xl mt-5">
                        <span className="font-semibold">Availability:</span>
                        {availability ? (
                            <span className="text-green-500"> In Stock</span>
                        ) : (
                            <span className="text-red-500"> Out of Stock</span>
                        )}
                    </p>

                    <div className="text-2xl mt-5">
                        <span className="font-bold">Specification:</span>
                        <ul className="list-disc pl-5">
                            {specification.map((spec, index) => (
                                <li key={index} className="text-lg">
                                    {spec}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex justify-start items-center gap-5 mt-10">
                        <button
                            onClick={() => handleAddToCart(product_id)}
                            className="btn text-white bg-customPurple rounded-full p-5 text-lg font-semibold"
                        >
                            Add to Cart
                        </button>

                        <button
                            onClick={handleAddToWishList}
                            className={`btn rounded-full btn-circle text-customPurple text-lg font-semibold flex items-center gap-2 ${isWishListClicked ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                            disabled={isWishListClicked}
                        >
                            <IoMdHeart className="text-3xl" />
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    );
};

export default ProductDetails;