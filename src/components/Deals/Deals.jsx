import { useState, useEffect } from "react";

const Deals = () => {
    const [deals, setDeals] = useState([]);

    useEffect(() => {
        fetch("/FakeData.json")
            .then(response => response.json())
            .then(products => {
                const discountedProducts = products
                    .map(product => {
                        if (product.price > 1000) {
                            return {
                                ...product,
                                oldPrice: product.price,
                                newPrice: Math.round(product.price * 0.85),
                                discount: Math.round(product.price * 0.15),
                            };
                        }
                        return null;
                    })
                    .filter(product => product !== null)
                    .sort((a, b) => b.discount - a.discount);

                setDeals(discountedProducts);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);
    return (
        <div className="p-10">
            <h2 className="text-3xl font-bold mb-5">🔥 Hot Deals & Discounts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {deals.map((deal) => (
                    <div
                        key={deal.product_id}
                        className="card w-full sm:w-80 bg-white shadow-lg hover:shadow-xl border border-gray-200 rounded-2xl p-4 mx-auto mb-6 transform transition-all hover:-translate-y-2"
                    >
                        <figure className="overflow-hidden rounded-xl border border-gray-200">
                            <img
                                className="h-[200px] w-full object-contain bg-gray-100"
                                src={deal.product_image}
                                alt={deal.product_title}
                            />
                        </figure>

                        <div className="card-body p-4 space-y-3">
                            <h2 className="text-xl font-bold text-gray-800 truncate">{deal.product_title}</h2>

                            {/* Price Section */}
                            <div className="flex items-center space-x-2">
                                <p className="text-lg font-bold text-gray-800">${deal.newPrice}</p>
                                <p className="text-sm text-gray-500 line-through">${deal.oldPrice}</p>
                                <span className="text-red-500 text-sm font-semibold">(-${deal.discount} Off)</span>
                            </div>

                            {/* Rating Section */}
                            <div className="flex items-center space-x-1">
                                <div className="flex text-yellow-400">
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <span key={index} className={index < Math.round(deal.rating) ? "text-yellow-400" : "text-gray-300"}>
                                            ★
                                        </span>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-500">({deal.rating.toFixed(1)})</p>
                            </div>

                            <button className="btn bg-red-500 text-white w-full rounded-full text-sm font-medium py-2 transition-all hover:bg-red-600 hover:scale-105">
                                Grab Deal
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Deals;
