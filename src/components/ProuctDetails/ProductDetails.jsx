import { useLoaderData, useParams } from "react-router-dom";
import { HiCurrencyDollar } from "react-icons/hi";
import { FcRating } from "react-icons/fc";
import { IoMdHeart } from "react-icons/io";
import { addToStoredCartList } from "../../Utilities/LocalStorage";

const ProductDetails = () => {

    const { product_id } = useParams();
    const data = useLoaderData();
    const id = parseInt(product_id);
    const product = data.find(product => product.product_id === id);
    console.log(product);

    const {
        product_id: currentProductId,
        product_title,
        product_image,
        category,
        price,
        description,
        specification,
        availability,
        rating } = product;

    const handleAddToCart = () => {
        addToStoredCartList(product_id);
    }

    return (
        <div className="border-2 border-black-600">

            {/* Details Nav text section */}
            <div className="text-center mt-10 pb-56 border-2 border-indigo-600">
                <h1 className="text-3xl font-bold">Product Details</h1>
                <p className=" text-2xl mt-5 mb-5">
                    Explore the latest gadgets that will take your experience to
                    <br />
                    the next level. From smart devices to the coolest accessories, we have it all!
                </p>
            </div>

            {/* Details Card section */}
            <div>
                <div className="max-w-6xl flex justify-center items-center border-2 border-red-500 mx-auto rounded-3xl -mt-40">
                    <div className="w-1/3 border-2 border-red-500 ">
                        <figure className="border-2 border-red-500 p-3">
                            <img className="h-[400px] w-full rounded-2xl"
                                src={product_image} />
                        </figure>
                    </div>

                    <div className="border-2 border-red-500  space-y-5 p-5 w-2/3">
                        <h1 className="text-4xl font-bold mt-10">{product_title}</h1>
                        <p className="text-2xl mt-5 flex justify-start items-center gap-2">Price: <HiCurrencyDollar /> {price}</p>
                        <p className="text-2xl mt-5"> {category}</p>
                        <p className="text-2xl mt-5 flex justify-start items-center gap-2">Rating: {rating} <span><FcRating /></span> </p>
                        <p className="text-2xl mt-5">{description}</p>

                        <p className="text-2xl mt-5"><span className="font-bold">Specification:</span>
                            {
                                specification.map((spec, index) => <li key={index} className="text-lg">{spec}</li>)
                            }
                        </p>
                        <div className="flex justify-start items-center gap-5 mt-10">
                            <button onClick={() => handleAddToCart(product_id)} className="btn btn-accent rounded-full">
                                Add to Cart
                            </button>

                            <button className="text-4xl">
                                <IoMdHeart />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;