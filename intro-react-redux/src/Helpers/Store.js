import { createStore, applyMiddleware } from 'redux'
import acciones from './Constant.js'
//import thunk from 'redux-thunk'

const reducer = (state, action) => {
    // console.log("=== A )STORE: entra al store, valida por ACCION, genera un nuevo [STATE] y renderiza ===");
    switch (action.type) {
        case acciones.ADD_TO_CART:
            return {
                ...state,
                cart: state.cart.concat(action.product),
            }
        case acciones.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.product.id)
            }
        case acciones.REMOVE_FROM_CART_REACTREDUX:
            return {
                ...state,
                cart: state.cart.filter((product, index) => index !== action.index)
            }
        // case acciones.GET_USER_API:
        //     return {
        //         ...state,
        //         users: action.users
        //     }
        default:
            return state
    }
}

var initialState = {
    cart: [],
    products: [
        { id: 1, precio: 234, name: 'Polo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCjhrzcK1vAsqpNCeQcsRyE_OAiCBz0ZU2daUuEz4WIkX37aC-2w' },
        { id: 2, precio: 786, name: 'Jeans', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0JGhWiBhl5ADMBzbgWQjn_mC48fAh4K_sy2mQrZ_Gk_JBy3gCeA' },
    ]
}

const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
}

export default createStore(reducer, initialState, applyMiddleware(logger))