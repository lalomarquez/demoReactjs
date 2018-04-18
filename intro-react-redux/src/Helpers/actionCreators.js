import action from './Constant.js'
//import axios from 'axios'

const addToCart = product => {
    return {
        type: action.ADD_TO_CART,
        product: product
    }
}

const removeItem = items => {
    return {
        type: action.REMOVE_FROM_CART,
        product: items,
    }
}

const removeItemReactRedux = (product,i) => {    
    return {
        type: action.REMOVE_FROM_CART_REACTREDUX,
        index: i,
        //product,        
    }
}

// const getUsers = () => {
//     return dispatch => {
//         return axios.get(instance).then(response => {
//             dispatch({
//                 type: action.GET_USER_API,
//                 users: response.data
//             })
//         })
//     }
// }

// const instance = axios.create({
//     baseURL: 'http://apiprestamoexpress:666/api/Users/',
//     timeout: 1000,
//     headers: {'X-Custom-Header': 'foobar'}
//   });

export { addToCart, removeItem, removeItemReactRedux}