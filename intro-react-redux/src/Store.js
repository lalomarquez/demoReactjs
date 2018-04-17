import { createStore} from 'redux'

const reducer = (state, action) =>  {
    // console.log("=== A )STORE: entra al store, valida por ACCION, genera un nuevo [STATE] y renderiza ===");
    // console.log(state)
    // console.log(action)
    // console.log('=== END A) ===')
    switch (action.type) {
        case "ADD_TO_CART":
        console.log('ADD_TO_CART:' + action.product.idUnique)
            return {
                ...state,
                cart: state.cart.concat(action.product),
            }
        case "REMOVE_FROM_CART":
        //console.log(action)
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.product.id)                
            }
        default:
            return state;
    }  
}
export default createStore(reducer,{cart:[]})