import React, { Component } from "react";
import "./app.css";
import Home from "./components/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import NotFound from "./components/notFound";
import Cart from "./components/cart";
import { getItems } from "./service/items";
import Orders from "./components/orders";
import { paginate } from "./utils/paginate";
import Pagination from "./components/common/pagination";

class App extends Component {
  state = {
    products: getItems().map((product) => {
      const transformedProduct = { ...product, like: false };
      return transformedProduct;
    }),
    cart: [],
    orders: [],
    pageSize: 8,
    currentPage: 1,
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

    if (newStock === 0) {
      products.splice(index, 1);
      this.setState({ products });
    } else {
      products.splice(index, 1, { ...filteredProducts[0], stock: newStock });
      this.setState({ products });
    }

    const cart = [...this.state.cart];
    const transformedCart = cart.filter((item) => item.id !== product.id);
    this.setState({ cart: transformedCart });
  };

  handleOrderCancel = (product) => {
    const products = [...this.state.products];
    const filteredProducts = products.filter((p) => p.id === product.id);

    if (filteredProducts.length === 0) {
      products.push({ ...product });
      this.setState({ products });
    } else {
      const index = products.indexOf(filteredProducts[0]);
      const newStock = filteredProducts[0].stock + product.quantity;
      products.splice(index, 1, { ...filteredProducts[0], stock: newStock });
      this.setState({ products });
    }

    const orders = [...this.state.orders];
    const filteredOrders = orders.filter((item) => item !== product);
    this.setState({ orders: filteredOrders });
  };

  handleLike = (product) => {
    const products = [...this.state.products];

    const transformedProducts = this.transformProducts(products, product);
    this.setState({ products: transformedProducts });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  transformProducts(products, product) {
    return products.map((p) =>
      p.id === product.id ? { ...product, like: !product.like } : p
    );
  }

  render() {
    const { products, cart, orders, pageSize, currentPage } = this.state;
    const productsCount = products.length;
    const paginatedProducts = paginate(products, currentPage, pageSize);

    return (
      <React.Fragment>
        <Router>
          <Navbar />
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <React.Fragment>
                    <Home
                      products={paginatedProducts}
                      cartItems={cart}
                      pageSize={pageSize}
                      currentPage={currentPage}
                      onCartClick={this.handleCartClick}
                      onLike={this.handleLike}
                    />
                    <Pagination
                      pageSize={pageSize}
                      currentPage={currentPage}
                      itemsCount={productsCount}
                      onPageChange={this.handlePageChange}
                    />
                  </React.Fragment>
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
                    onLike={this.handleLike}
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
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
