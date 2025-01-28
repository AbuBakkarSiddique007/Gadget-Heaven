import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { getStoredCartList, getStoredWishList, clearCartList } from '../../Utilities/LocalStorage'; 
import Card from '../Card/Card';

const ListedCart = () => {
    const [cartList, setCartList] = useState([]);
    const [originalCartList, setOriginalCartList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [originalWishList, setOriginalWishList] = useState([]);
    const [sort, setSort] = useState('');
    const [wishSort, setWishSort] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);
    const [showModal, setShowModal] = useState(false); 
    const allProducts = useLoaderData();
    const navigate = useNavigate(); 

    useEffect(() => {
        const storedCartList = getStoredCartList() || [];
        const storedCartListInt = storedCartList.map(product_id => parseInt(product_id));

        if (allProducts) {
            const cartProductList = allProducts.filter(product => storedCartListInt.includes(product.product_id));
            setCartList(cartProductList);
            setOriginalCartList(cartProductList);

            const total = cartProductList.reduce((sum, product) => sum + product.price, 0);
            setTotalAmount(total);
        }

        const storedWishList = getStoredWishList() || [];
        const storedWishListInt = storedWishList.map(product_id => parseInt(product_id));
        if (allProducts) {
            const wishProductList = allProducts.filter(product => storedWishListInt.includes(product.product_id));
            setWishList(wishProductList);
            setOriginalWishList(wishProductList);
        }
    }, [allProducts]);

    const handleCartSort = (sortType) => {
        setSort(sortType);
        let sortedCartList = [];
        if (sortType === 'price') {
            sortedCartList = [...originalCartList].sort((a, b) => a.price - b.price);
        } else if (sortType === 'rating') {
            sortedCartList = [...originalCartList].sort((a, b) => a.rating - b.rating);
        }
        setCartList(sortedCartList);
    };

    const handleWishSort = (sortType) => {
        setWishSort(sortType);
        let sortedWishList = [];
        if (sortType === 'price') {
            sortedWishList = [...originalWishList].sort((a, b) => a.price - b.price);
        } else if (sortType === 'rating') {
            sortedWishList = [...originalWishList].sort((a, b) => a.rating - b.rating);
        }
        setWishList(sortedWishList);
    };

    const handleRemoveFromCart = (productId) => {
        const updatedCartList = cartList.filter(product => product.product_id !== productId);
        setCartList(updatedCartList);
        setOriginalCartList(updatedCartList);

        const updatedTotal = updatedCartList.reduce((sum, product) => sum + product.price, 0);
        setTotalAmount(updatedTotal);
    };

    const handleRemoveFromWishlist = (productId) => {
        const updatedWishList = wishList.filter(product => product.product_id !== productId);
        setWishList(updatedWishList);
        setOriginalWishList(updatedWishList);
    };

    const handleAddToCartFromWishlist = () => {
        navigate('/'); 
    };

    const handlePurchase = () => {
        setCartList([]);
        setOriginalCartList([]);
        setTotalAmount(0);
        clearCartList();
        setShowModal(true); 
    };

    const closeModal = () => {
        setShowModal(false); 
        navigate('/'); 
    };

    return (
        <div className="max-w-6xl mx-auto">
            <div className="border-2 border-black-600">
                <h1 className="text-3xl font-bold text-center mt-10">Dashboard</h1>
                <p className="text-2xl text-center mt-5 mb-5">
                    Explore the latest gadgets that will take your experience to
                    <br />
                    the next level. From smart devices to the coolest accessories, we have it all!
                </p>
            </div>

            <div role="tablist" className="tabs tabs-border">
                {/* Cart Section */}
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Cart" defaultChecked />
                <div className="tab-content border-base-300 bg-base-100 p-10">
                    <div className="flex justify-between items-center border-2 border-red-500">
                        <h2>Listed Cart: ({cartList.length})</h2>
                        <div className="space-x-4">
                            <div className="dropdown mb-4 bg-gray-400">
                                <div tabIndex={0} role="button" className="btn m-1">
                                    {sort ? `Sort by: ${sort}` : 'Sort By'}
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu rounded-box z-1 w-52 p-2 shadow-sm bg-amber-300"
                                >
                                    <li onClick={() => handleCartSort('rating')}>
                                        <a>Rating</a>
                                    </li>
                                    <li onClick={() => handleCartSort('price')}>
                                        <a>Price</a>
                                    </li>
                                </ul>
                            </div>
                            <button className="btn btn-accent rounded-full">
                                Total Amount: ${totalAmount.toFixed(2)}
                            </button>
                            <button
                                className={`btn btn-accent rounded-full ${totalAmount === 0 ? 'btn-disabled' : ''}`}
                                onClick={handlePurchase}
                                disabled={totalAmount === 0}
                            >
                                Purchase
                            </button>
                        </div>
                    </div>
                    <ul>
                        {cartList.map((product) => (
                            <Card
                                key={product.product_id}
                                product={product}
                                handleCancel={() => handleRemoveFromCart(product.product_id)}
                            />
                        ))}
                    </ul>
                </div>

                {/* Wishlist Section */}
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="WishList" />
                <div className="tab-content border-base-300 bg-base-100 p-10">
                    <div className="flex justify-between items-center border-2 border-blue-500">
                        <h2>My Wish List: ({wishList.length})</h2>
                        <div className="dropdown mb-4 bg-gray-400">
                            <div tabIndex={0} role="button" className="btn m-1">
                                {wishSort ? `Sort by: ${wishSort}` : 'Sort By'}
                            </div>
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu rounded-box z-1 w-52 p-2 shadow-sm bg-amber-300"
                            >
                                <li onClick={() => handleWishSort('rating')}>
                                    <a>Rating</a>
                                </li>
                                <li onClick={() => handleWishSort('price')}>
                                    <a>Price</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul>
                        {wishList.map((product) => (
                            <Card
                                key={product.product_id}
                                product={product}
                                handleCancel={() => handleRemoveFromWishlist(product.product_id)}
                                handleAddToCart={handleAddToCartFromWishlist}
                            />
                        ))}
                    </ul>
                </div>
            </div>

            {/* Success Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-6 shadow-lg max-w-md text-center">
                        <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
                        <p className="text-lg mb-6">Your purchase was successful.</p>
                        <button
                            className="btn btn-primary rounded-full"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ListedCart;
