import { ImCoinDollar } from 'react-icons/im';

const Card = ({ product, handleCancel, handleAddToCart }) => {
    const { product_title, product_image, price, specification } = product;

    return (
        <div className="mx-auto max-w-6xl mb-2">
            <div className="flex gap-5 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
                <div className="relative w-32 h-32 flex-shrink-0">
                    <img
                        className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
                        loading="lazy"
                        src={product_image}
                        alt={product_title}
                    />
                </div>
                <div className="flex flex-col gap-2 py-2">
                    <p className="text-xl font-bold">{product_title}</p>
                    <div className="text-gray-500 flex gap-1">
                        {specification.map((spec, index) => (
                            <p key={index} className="text-lg">
                                {spec}
                            </p>
                        ))}
                    </div>
                    <p className="text-lg font-bold flex justify-start items-center gap-3">
                        <ImCoinDollar className="text-3xl text-orange-400" /> {price}
                    </p>
                    <div className="flex gap-3">
                        {handleCancel && (
                            <button
                                className="btn btn-danger rounded-full"
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
                        )}
                        {handleAddToCart && (
                            <button
                                className="btn btn-primary rounded-full"
                                onClick={handleAddToCart}
                            >
                                Add to Cart
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
