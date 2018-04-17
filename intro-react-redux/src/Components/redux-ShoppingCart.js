import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Table  } from 'reactstrap';
import store from '../Store.js'
import actionsRedux from '../Helpers/Constant.js'

class ShoppingCart extends React.Component {
    constructor(){
        super()          
        this.state = {
            cart : []
        }
        //console.log("C) VIEW, component [ShoppingCart]")        
         store.subscribe(() => {            
            //console.log("B) SUBSCRIBE, component [ShoppingCart]")            
            this.setState({                
                cart: store.getState().cart,
            })            
        })        
    }

    RemoveItem(index){
        //console.log("D) DISPATCH: se genera el envio con la ACCION [REMOVE_FROM_CART], component [ShoppingCart]")
        const rows = this.state.cart;
        rows.splice(index, 1);
        store.dispatch({
                type: actionsRedux.REMOVE_FROM_CART,
                product: rows,
            })
    }

    handleClick = index => () => {
        this.RemoveItem(index);
    }

    render(){
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
                                {this.state.cart.map((product, i) =>
                                    <tr key={i}>
                                        <td>{product.idUnique}</td>
                                        <th scope="row">{product.name}</th>
                                        <td>$ {product.precio}</td>                                    
                                        <td><Button color="danger" onClick={this.handleClick(i)}>eliminar</Button></td>
                                    </tr>
                                )} 
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th>Total: ${this.state.cart.reduce((sum, product) => sum + product.precio,0)}</th>
                                    <th></th>
                                </tr>
                            </tfoot>
                        </Table>
                    </div>
                </div>
                )
    }
}
export default ShoppingCart;