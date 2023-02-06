import React, { Component } from "react";

class CartCard extends Component {
  render() {
    const { product, onIncrement, onDecrement, onDelete, onOrder } = this.props;

    return (
      <div className="card p-2 bg-light text-dark mt-3 mb-3">
        <div className="cart-body">
          <i
            className="fa fa-times pull-right"
            style={{ cursor: "pointer" }}
            onClick={() => onDelete(product)}
          />
          <div className="card-title">
            <h5 className="mb-2">{product.itemName}&nbsp;&nbsp;</h5>
            <span>{product.like && <i className="fa fa-heart" />}</span>{" "}
            <span className="badge badge-pill badge-light">
              <i className="fa fa-inr" /> {product.price}
            </span>
            <span className="badge badge-pill badge-light">
              <i className="fa fa-credit-card" />{" "}
              {product.price * product.quantity}
            </span>
          </div>
          <div className="card-content">
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => onDecrement(product)}
              disabled={product.quantity === 1 && true}
            >
              <i className="fa fa-minus" />
            </button>
            <span className="badge badge-pill badge-light m-1">
              {product.quantity}
            </span>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => onIncrement(product)}
              disabled={product.quantity === product.stock && true}
            >
              <i className="fa fa-plus" />
            </button>
            <button
              className="btn btn-warning btn-sm m-2"
              onClick={() => onOrder(product)}
            >
              <i className="fa fa-check" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartCard;
