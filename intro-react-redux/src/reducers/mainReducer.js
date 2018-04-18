import { createStore, applyMiddleware } from 'redux'
import acciones from './Constant.js'

let defaultState = {
    color: 'red'
}

const mainReducer = (state = defaultState, action) => {
    switch (action.type) {
        case acciones.CHANGE_COLOR:
            return {
                ...state,
                color: action.color
            }
        default:
            return state
    }
}

export default createStore(mainReducer, defaultState)