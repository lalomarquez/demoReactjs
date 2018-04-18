import actionsRedux from './Constant.js'

const addToCart = product => {
    return {
        type: actionsRedux.ADD_TO_CART,
        product: product
    }
}

const removeItem = items => {
    return {
        type: actionsRedux.REMOVE_FROM_CART,
        product: items,
    }
}

const removeItemReactRedux = (product,i) => {    
    return {
        type: actionsRedux.REMOVE_FROM_CART_REACTREDUX,
        index: i,
        //product,        
    }
}

export { addToCart, removeItem, removeItemReactRedux}