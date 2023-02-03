import React, { Component } from "react";

class Home extends Component {
  render() {
      const { products, onCartClick } = this.props;
      const filteredProducts = products.filter(p => p.stock > 0);

    return (
      <table className="table mt-3 mb-3">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Stock</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.itemName}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => onCartClick(product)}
                  disabled={this.toogleDisable(product.id)}
                >
                  Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  toogleDisable(productId) {
    const cart = this.props.cartItems;

    const targetProduct = cart.filter((item) => item.id === productId);

    return targetProduct.length !== 0 && true;
  }
}

export default Home;
