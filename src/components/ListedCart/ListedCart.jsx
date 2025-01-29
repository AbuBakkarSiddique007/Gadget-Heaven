import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { getStoredCartList, getStoredWishList, clearCartList, removeFromStoredCartList, removeFromStoredWishList } from '../../Utilities/LocalStorage';
import Card from '../Card/Card';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { Helmet } from 'react-helmet';

const ListedCart = () => {
    const [cartList, setCartList] = useState([]);
    const [originalCartList, setOriginalCartList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [originalWishList, setOriginalWishList] = useState([]);
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

    console.log(originalWishList);
    useEffect(() => {
        document.title = "My Cart - My Gadget Store";
    }, []);


    const handleSortByPrice = () => {
        const sortedCartList = [...originalCartList].sort((a, b) => b.price - a.price);
        setCartList(sortedCartList);
    };
    const handleRemoveFromCart = (productId) => {
        const updatedCartList = cartList.filter(product => product.product_id !== productId);
        setCartList(updatedCartList);
        setOriginalCartList(updatedCartList);
        removeFromStoredCartList(productId);
        const updatedTotal = updatedCartList.reduce((sum, product) => sum + product.price, 0);
        setTotalAmount(updatedTotal);

        toast.warn('Item successfully removed from your Cart!', {
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

    const handleRemoveFromWishlist = (productId) => {
        const updatedWishList = wishList.filter(product => product.product_id !== productId);
        setWishList(updatedWishList);
        setOriginalWishList(updatedWishList);
        removeFromStoredWishList(productId);

        toast.warn('Item successfully removed from your WishList!', {
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
        <div>
            <Helmet>
                <title>Dashboard - My Gadget Store</title>
            </Helmet>

            {/* Dashboard Text */}
            <div className="p-10 shadow-lg pt-5 pb-10 bg-customPurple text-white">
                <h1 className="text-3xl font-bold text-center mt-10">Dashboard</h1>
                <p className="text-2xl text-center mt-5 mb-5">
                    Explore the latest gadgets that will take your experience to
                    <br />
                    the next level. From smart devices to the coolest accessories, we have it all!
                </p>
            </div>

            {/* Tabs */}
            <div role="tablist" className="tabs tabs-border flex justify-center items-center mt-10 max-w-6xl mx-auto">

                {/* Cart Section */}
                <input type="radio" name="my_tabs_2" role="tab" className="tab btn text-xl" aria-label="Cart" defaultChecked />
                <div className="tab-content border-base-300 bg-base-100 p-10">

                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg mb-2">
                        <h2 className="text-white text-2xl font-semibold">Listed Cart: ({cartList.length})</h2>

                        <div className="flex items-center space-x-6">
                            {/* Sort by Price button */}
                            <button
                                className="btn btn-outline text-white bg-transparent border-2 border-white rounded-full px-4 py-2 hover:bg-white hover:text-gray-800 focus:outline-none"
                                onClick={handleSortByPrice}
                            >
                                Sort by Price
                            </button>

                            {/* Total amount button */}
                            <button className="btn btn-accent rounded-full px-6 py-3 text-lg font-medium bg-yellow-500 text-white hover:bg-yellow-400 focus:outline-none">
                                Total Amount: ${totalAmount.toFixed(2)}
                            </button>

                            {/* Purchase button */}
                            <button
                                className={`btn rounded-full px-6 py-3 text-lg font-medium bg-green-500 text-white ${totalAmount === 0 ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-green-400'}`}
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
                <input type="radio" name="my_tabs_2" role="tab" className="tab btn text-xl ml-2" aria-label="WishList" />
                <div className="tab-content border-base-300 bg-base-100 p-10">

                    <div className="flex justify-between items-center p-4 text-white rounded-xl shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-2">
                        <h2 className="text-2xl font-semibold">
                            WishList: ({wishList.length})
                        </h2>
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

export default ListedCart;
