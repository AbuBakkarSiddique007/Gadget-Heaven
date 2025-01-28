import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { useLoaderData } from 'react-router-dom';
import { getStoredCartList } from '../../Utilities/LocalStorage';
import Card from '../Card/Card';

const ListedCart = () => {
    const [cartList, setCartList] = useState([]);
    const [sort, setSort] = useState('')

    const allProducts = useLoaderData()
    useEffect(() => {
        const storedCartList = getStoredCartList() || [];
        const storedCartListInt = storedCartList.map(product_id => parseInt(product_id));

        if (allProducts) {
            const cartProductList = allProducts.filter(product => storedCartListInt.includes(product.product_id));
            setCartList(cartProductList);
        }
    }, [allProducts]);




    const handleSort = sortType => {
        setSort(sortType)

        if (sortType === 'price') {
            const sortedCartList = [...cartList].sort((a, b) => a.price - b.price)
            setCartList(sortedCartList)
        }

        if (sortType === 'rating') {
            const sortedCartList = [...cartList].sort((a, b) => a.rating - b.rating)
            setCartList(sortedCartList)
        }
    }

    return (
        <div className='max-w-6xl mx-auto'>
            <div className=' border-2 border-black-600'>
                <h1 className='text-3xl font-bold text-center mt-10'>
                    Dashboard
                </h1>
                <p className='text-2xl text-center mt-5 mb-5'>
                    Explore the latest gadgets that will take your experience to
                    <br />
                    the next level. From smart devices to the coolest accessories, we have it all!
                </p>
            </div>


            <Tabs >
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <div className='flex justify-between items-center border-2 border-red-500'>
                        <h2>Listed Cart : ({cartList.length})</h2>
                        <div className='space-x-4'>
                            <div className="dropdown mb-4 bg-gray-400">
                                <div tabIndex={0} role="button" className="btn m-1">

                                    {sort ? `Sort by: ${sort} ` : 'Sort By'}

                                </div>
                                <ul tabIndex={0} className="dropdown-content menu  rounded-box z-1 w-52 p-2 shadow-sm bg-amber-300">
                                    <li onClick={() => handleSort('rating')} ><a>Rating</a></li>
                                    <li onClick={() => handleSort('price')}><a>price</a></li>
                                </ul>
                            </div>
                            <button className='btn btn-accent rounded-full'>Total Amount: $</button>
                            <button className='btn btn-accent rounded-full'>Purchase </button>
                        </div>
                    </div>

                    <ul>
                        {
                            cartList.map(product => <Card
                                key={product.product_id}
                                product={product}
                            ></Card>)
                        }
                    </ul>
                </TabPanel>
                <TabPanel>
                    <h2>My Wish List</h2>
                    {/* Add Wish List rendering logic */}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedCart;
