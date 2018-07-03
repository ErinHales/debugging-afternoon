import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import StoreFront from './components/StoreFront/StoreFront';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();

    this.state = {
      shoppingCart: []
    }

    this.addToShoppingCart = this.addToShoppingCart.bind(this);
    this.removeFromShoppingCart = this.removeFromShoppingCart.bind(this);
  }

  addToShoppingCart(product) {
    this.setState({
      shoppingCart: [...this.state.shoppingCart, product]
    })

  }

  removeFromShoppingCart(product) {
    let newShoppingCart = this.state.shoppingCart;
    newShoppingCart.splice(newShoppingCart.indexOf(product), 1);
    this.setState({
      shoppingCart: newShoppingCart
    })
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/storefront" component={StoreFront} />
          <Route path="/shoppingcart" component={ShoppingCart} />
        </Switch>
      </div>
    );
  }
}

export default App;
