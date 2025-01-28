import React from 'react';

const Temp = () => {
    return (
        <div>
            <div role="tablist" className="tabs tabs-border">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Cart" />
                <div className="tab-content border-base-300 bg-base-100 p-10">
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
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="WishList" defaultChecked />
                <div className="tab-content border-base-300 bg-base-100 p-10">
                    <h2>My Wish List: ({wishList.length})</h2>
                    <ul>
                        {wishList.map(product => (
                            <Card key={product.product_id} product={product} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Temp;

{/* <Tabs >
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
                    <h2>My Wish List: ({wishList.length})</h2>
                    <ul>
                        {wishList.map(product => (
                            <Card key={product.product_id} product={product} />
                        ))}
                    </ul>
                </TabPanel>
            </Tabs> */}