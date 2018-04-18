import React from 'react'
import UUID from 'uuid-random'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap'
import store from '../Helpers/Store.js'
import { addToCart } from '../Helpers/actionCreators.js'

class ProductList extends React.Component {
    constructor() {
        super()
        this.state = {
            products: [
                { id: 1, precio: 234, name: 'Polo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCjhrzcK1vAsqpNCeQcsRyE_OAiCBz0ZU2daUuEz4WIkX37aC-2w' },
                { id: 2, precio: 786, name: 'Jeans', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0JGhWiBhl5ADMBzbgWQjn_mC48fAh4K_sy2mQrZ_Gk_JBy3gCeA' },
                { id: 3, precio: 99, name: 'Wind breaker', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjI9aXJOMovmcRht-qroNLrS5C4_F-169VbCE2ZrKjCu4cYBu' },
                { id: 4, precio: 156, name: 'sweatshirt', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsxY8BP5AQiVMa2WqIW_dUv3fEPqp1xTGtXuUn7dRm6ut8RyquOg' },
                { id: 5, precio: 666, name: 'T-shirt', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjTIkwz6QAPrQBW-Z15tK-aoheW6s2wtFNY6gHeV_iYwym0t85' }
            ]
        }
        // console.log("C) VIEW, component [ProductList]");
        // console.log(this.state)
    }

    addProduct(product) {
        //D) DISPATCH: se genera el envio con la ACCION [ADD_TO_CART], component [ProductList]
        product.idUnique = UUID()
        console.log('addProduct: ' + product.name)
        store.dispatch(addToCart(product))
    }

    render() {
        return (
            <div >
                <h4>Componente ProductList</h4>
                <div className="row col-12">
                    {this.state.products.map((product, i) =>
                        <div key={i}>
                            <Card>
                                <CardImg top width="100%" src={product.image} />
                                <CardBody>
                                    <CardTitle>{product.name}</CardTitle>
                                    <p>Precio: $ {product.precio}</p>
                                    <Button color="primary" onClick={() => this.addProduct(product)}>Add to Cart</Button>
                                </CardBody>
                            </Card>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
export default ProductList;