import PropTypes from 'prop-types';
import { ImCoinDollar } from 'react-icons/im';

const Card = ({ product, handleCancel, handleAddToCart }) => {
    const { product_title, product_image, price, description } = product;

    return (
        <div className="mx-auto max-w-6xl mb-6">
            <div className="flex gap-5 bg-white border border-gray-300 rounded-xl overflow-hidden items-start justify-start shadow-md">
                <div className="relative w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden">
                    <img
                        className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-300"
                        loading="lazy"
                        src={product_image}
                        alt={product_title}
                    />
                </div>
                <div className="flex flex-col gap-3 py-4 px-6">
                    <p className="text-2xl font-semibold text-gray-800">{product_title}</p>
                    <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
                    <p className="text-lg font-bold flex justify-start items-center gap-3 mt-3">
                        <ImCoinDollar className="text-3xl text-orange-400" /> ${price.toFixed(2)}
                    </p>
                    <div className="flex gap-3 mt-4">
                        {handleCancel && (
                            <button
                                className="btn btn-danger rounded-full py-2 px-6 text-white bg-red-500 hover:bg-red-600 transition"
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
                        )}
                        {handleAddToCart && (
                            <button
                                className="btn btn-primary rounded-full py-2 px-6 text-white bg-green-500 hover:bg-green-600 transition"
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

Card.propTypes = {
    product: PropTypes.object.isRequired,
    handleCancel: PropTypes.func,
    handleAddToCart: PropTypes.func,
};


export default Card;
