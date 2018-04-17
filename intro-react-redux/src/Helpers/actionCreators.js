import actionsRedux from '../Helpers/Constant.js'

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

export {addToCart,removeItem}