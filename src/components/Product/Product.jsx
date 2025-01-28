import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const {
        product_id,
        product_title,
        product_image,
        price,
        rating
    } = product;

    // console.log(product);

    return (
        <div className="card w-full sm:w-96 bg-white shadow-lg hover:shadow-xl border border-gray-200 rounded-2xl p-4 mx-auto mb-6 transform transition-all hover:-translate-y-2">
            <figure className="overflow-hidden rounded-xl border border-gray-200">
                <img
                    className="h-[200px] w-full object-contain bg-gray-100"
                    src={product_image}
                    alt={product_title}
                />
            </figure>

            <div className="card-body p-4 space-y-3">
                <h2 className="text-xl font-bold text-gray-800 truncate">{product_title}</h2>

                {/* Price Section */}
                <div className="flex items-center space-x-2">
                    <p className="text-xl font-bold text-gray-800">${price}</p>
                </div>

                <div className="flex items-center space-x-1">
                    <div className="flex text-yellow-400">
                        {Array.from({ length: 5 }, (_, index) => (
                            <span key={index} className={index < Math.round(rating) ? "text-yellow-400" : "text-gray-300"}>
                                ★
                            </span>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500">({rating.toFixed(1)})</p>
                </div>

                <Link
                    to={`/products/${product_id}`}
                    className="btn bg-white border-purple-500 w-fit text-customPurple rounded-full text-sm font-medium py-2 transition-all hover:bg-accent-focus hover:scale-105"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired,
};

export default Product;
