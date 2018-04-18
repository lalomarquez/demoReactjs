import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from 'reactstrap';
import { removeItemReactRedux } from '../Helpers/actionCreators.js'
import { connect } from 'react-redux'

const ShoppingCart = ({cart,removeFromCart}) => { //const ShoppingCart = (props) => {
        return (
            <div >
                <h4>Componente ShoppingCart</h4>
                <div className="row col-12">
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Items</th>
                                <th>Precio</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((product, i) =>
                                <tr key={i}>
                                    <th scope="row">{product.name}</th>
                                    <td>$ {product.precio}</td>
                                    <td><Button color="danger" onClick={() => removeFromCart(product, i)}>eliminar</Button></td>
                                </tr>
                            )}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>Total: ${cart.reduce((sum, product) => sum + product.precio, 0)}</th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </Table>
                </div>
            </div>
        )
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart(product, i) {
            console.log('INDEX[', i, '] ', 'PRODUCTO: ', product)
            dispatch(removeItemReactRedux(product, i))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)