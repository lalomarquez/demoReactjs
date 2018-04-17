import { createStore} from 'redux'
import actionsRedux from './Constant.js'

const reducer = (state, action) =>  {
    // console.log("=== A )STORE: entra al store, valida por ACCION, genera un nuevo [STATE] y renderiza ===");
    // console.log(state)
    // console.log(action)
    // console.log('=== END A) ===')
    switch (action.type) {
        case actionsRedux.ADD_TO_CART:
            return {
                ...state,
                cart: state.cart.concat(action.product),
            }
        case actionsRedux.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.product.id)                
            }
        default:
            return state;
    }  
}
export default createStore(reducer,{cart:[]})