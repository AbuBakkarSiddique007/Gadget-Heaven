const getStoredCartList = () => {
    const storedListStr = localStorage.getItem('cart-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }
};

const addToStoredCartList = (id) => {
    const storedList = getStoredCartList();
    if (storedList.includes(id)) {
        console.log(id, 'already exists in the list');
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart-list', storedListStr);
    }
};

const clearCartList = () => {
    localStorage.removeItem('cart-list'); // Clears the cart data from local storage
};

const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('wish-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }
};

const addToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if (!storedList.includes(id)) {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr);
    }
};

export { getStoredCartList, addToStoredCartList, getStoredWishList, addToStoredWishList, clearCartList };
