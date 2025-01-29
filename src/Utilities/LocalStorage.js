const getStoredCartList = () => {
    const storedListStr = localStorage.getItem('cart-list');
    return storedListStr ? JSON.parse(storedListStr) : [];
};

const addToStoredCartList = (id) => {
    const storedList = getStoredCartList();
    if (!storedList.includes(id)) {
        storedList.push(id);
        localStorage.setItem('cart-list', JSON.stringify(storedList));
    }
};

const removeFromStoredCartList = (id) => {
    const storedList = getStoredCartList();
    const updatedList = storedList.filter(productId => productId !== id);
    localStorage.setItem('cart-list', JSON.stringify(updatedList));
};

const clearCartList = () => {
    localStorage.removeItem('cart-list');
};

const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('wish-list');
    return storedListStr ? JSON.parse(storedListStr) : [];
};

const addToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if (!storedList.includes(id)) {
        storedList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedList));
    }
};

const removeFromStoredWishList = (id) => {
    const storedList = getStoredWishList();
    const updatedList = storedList.filter(productId => productId !== id);
    localStorage.setItem('wish-list', JSON.stringify(updatedList));
};

export {
    getStoredCartList,
    addToStoredCartList,
    removeFromStoredCartList,
    getStoredWishList,
    addToStoredWishList,
    removeFromStoredWishList,
    clearCartList
};
