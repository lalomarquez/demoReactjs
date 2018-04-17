import React, { Component } from 'react';
import ProductList from './Components/redux-ProductList.js'
import ShoppingCart from './Components/redux-ShoppingCart.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col } from 'reactstrap';//Jumbotron

class App extends Component {
  render() {
    return (
        <div className="container">
          <Row>
            <Col>
              <ProductList />
            </Col>
            <Col>
              <ShoppingCart />
            </Col>                        
          </Row>
        </div>
    );
  }
}

export default App;
