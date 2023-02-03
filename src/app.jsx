import React, { Component } from "react";
import Home from "./components/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import NotFound from "./components/notFound";
import Cart from "./components/cart";
import { getItems } from "./service/items";
import Orders from "./components/orders";

class App extends Component {
  state = {
    products: getItems(),
    cart: [],
    orders: [],
  };

  handleCartClick = (product) => {
    const cart = [...this.state.cart];

    cart.unshift({ ...product, quantity: 1 });
    this.setState({ cart });
  };

  handleDecrement = (product) => {
    const cart = [...this.state.cart];

    const index = cart.indexOf(product);
    cart[index].quantity--;
    this.setState({ cart });
  };

  handleIncrement = (product) => {
    const cart = [...this.state.cart];

    const cartIndex = cart.indexOf(product);
    cart[cartIndex].quantity++;

    this.setState({ cart });
  };

  handleDelete = (product) => {
    const cart = [...this.state.cart];
    const trasformedCart = cart.filter((item) => item.id !== product.id);
    this.setState({ cart: trasformedCart });
  };

  handleOrder = (product) => {
    const orders = [...this.state.orders];
    const totalPrice = product.price * product.quantity;
    const trasformedProduct = { ...product, totalPrice };
    orders.push({ ...trasformedProduct });
    this.setState({ orders });

    const products = [...this.state.products];
    const filteredProducts = products.filter((p) => p.id === product.id);
    const index = products.indexOf(filteredProducts[0]);
    const newStock = filteredProducts[0].stock - product.quantity;
    products.splice(index, 1, { ...filteredProducts[0], stock: newStock });
    this.setState({ products });

    const cart = [...this.state.cart];
    const transformedCart = cart.filter((item) => item.id !== product.id);
    this.setState({ cart: transformedCart });
  };

  handleOrderCancel = (product) => {
    const products = [...this.state.products];
    const filteredProducts = products.filter((p) => p.id === product.id);
    const index = products.indexOf(filteredProducts[0]);
    const newStock = filteredProducts[0].stock + product.quantity;
    products.splice(index, 1, { ...filteredProducts[0], stock: newStock });
    this.setState({ products });

    const orders = [...this.state.orders];
    const filteredOrders = orders.filter((item) => item !== product);
    this.setState({ orders: filteredOrders });
  };

  render() {
    const { products, cart, orders } = this.state;

    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <main className="container">
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    products={products}
                    onCartClick={this.handleCartClick}
                    cartItems={cart}
                  />
                }
              />
              <Route
                path="/cart"
                element={
                  <Cart
                    products={cart}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                    onOrder={this.handleOrder}
                  />
                }
              />
              <Route
                path="/orders"
                element={
                  <Orders
                    items={orders}
                    onOrderCancel={this.handleOrderCancel}
                  />
                }
              />
              <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
          </main>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
