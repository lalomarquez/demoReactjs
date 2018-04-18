import axios from 'axios'

const loadColor = () => {
    return (dispatch) => {
        return axios.get('http://www.colr.org/json/color/random').then(response => {
            dispatch(changeColor('#' + response.data.new_color))
        })
    }
}

const changeColor = (color) => {
    return {
        type: 'CHANGE_COLOR',
        color,
    }
}

export { loadColor, changeColor }

const mapStateToProps = state => {
    return {
        cart: state.cart,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart(product, i) {
            //console.log('INDEX[', i, '] ', 'PRODUCTO: ', product)
            dispatch(removeItemReactRedux(product, i))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)