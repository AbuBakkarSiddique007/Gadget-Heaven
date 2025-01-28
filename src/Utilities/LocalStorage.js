const getStoredCartList = () => {

    const storedListStr = localStorage.getItem('read-list')
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr)
        return storedList
    }
    else {
        return []
    }
}

const addToStoredCartList = id => {
    const storedList = getStoredCartList()
    if (storedList.includes(id)) {
        console.log(id, "Already exists in the read list");

    }
    else {
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('read-list', storedListStr)
    }
}

export { addToStoredCartList, getStoredCartList }