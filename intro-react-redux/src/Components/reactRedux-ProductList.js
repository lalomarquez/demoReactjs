import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap'
import { addToCart } from '../Helpers/actionCreators.js'
import { connect } from 'react-redux'

const ProductList = ({ products, addProduct }) => {
    return (
        <div >
            <h4>Componente ProductList</h4>
            <div className="row col-12">
                {products.map((product, i) =>
                    <div key={i}>
                        <Card>
                            <CardImg top width="100%" src={product.image} />
                            <CardBody>
                                <CardTitle>{product.name}</CardTitle>
                                <p>Precio: $ {product.precio}</p>
                                <Button color="primary" onClick={() => addProduct(product)}>Add to Cart</Button>
                            </CardBody>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products
        // products: state.products = [
        //     { id: 1, precio: 234, name: 'Polo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCjhrzcK1vAsqpNCeQcsRyE_OAiCBz0ZU2daUuEz4WIkX37aC-2w' },
        //     { id: 2, precio: 786, name: 'Jeans', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0JGhWiBhl5ADMBzbgWQjn_mC48fAh4K_sy2mQrZ_Gk_JBy3gCeA' },
        // ]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProduct(product) {
            dispatch(addToCart(product))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)