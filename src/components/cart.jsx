import React, { Component } from "react";
import CartItem from "./cartItem";

class Cart extends Component {
  render() {
    const { products, onIncrement, onDecrement, onDelete, onOrder } =
          this.props;
      
    const productsCount = products.length;

    if (productsCount === 0)
      return <h4 className="text-center mt-3 mb-3">Cart is empty</h4>;

    return (
      <React.Fragment>
        <h3 className="mt-3 mb-3">
          Your Cart{" "}
          <span className="badge badge-pill badge-secondary m-2">
            {productsCount}
          </span>
        </h3>
        {products.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            onOrder={onOrder}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Cart;
