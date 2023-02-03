import React, { Component } from "react";

class CartItem extends Component {
  render() {
    const { product, onIncrement, onDecrement, onDelete, onOrder } = this.props;

    return (
      <div className="mt-3 mb-3">
        <span className="badge badge-pill badge-primary m-2">
          {product.itemName}
        </span>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => onDecrement(product)}
          disabled={this.disableDecrement()}
        >
          -
        </button>
        <span className="badge badge-pill badge-light">{product.quantity}</span>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => onIncrement(product)}
          disabled={this.disableIncrement()}
        >
          +
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => onDelete(product)}
        >
          Remove
        </button>
        <button
          className="btn btn-warning btn-sm m-2"
          onClick={() => onOrder(product)}
        >
          Buy now
        </button>
        <span className="badge badge-pill badge-light m-2">
          Total Price: ₹ {product.price * product.quantity}
        </span>
      </div>
    );
  }

  disableIncrement() {
    const product = this.props.product;

    return product.quantity === product.stock && true;
  }

  disableDecrement() {
    const product = this.props.product;

    return product.quantity === 1 && true;
  }
}

export default CartItem;
