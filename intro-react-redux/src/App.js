import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';//Jumbotron

//only redux
// import ProductList from './Components/redux-ProductList.js'
// import ShoppingCart from './Components/redux-ShoppingCart.js'
//react-redux
import ProductList from './Components/reactRedux-ProductList.js'
import ShoppingCart from './Components/reactRedux-ShoppingCart.js'

import ChangeColor from './Components/box.js'
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
        <hr/> 
        <Row>
          <ChangeColor />
        </Row>
      </div>
    );
  }
}

export default App;
