import React, { Component } from "react";

class CartItem extends Component {
  render() {
    const { product, onIncrement, onDecrement, onDelete, onOrder } = this.props;

    return (
      <div className="row mt-3 mb-3">
        <div className="col col-sm-12 col-md-5 col-lg-4 col-xl-4">
          <div className="card p-2 bg-light text-dark">
            <div className="cart-body">
              <button
                className="btn btn-danger btn-sm pull-right"
                onClick={() => onDelete(product)}
              >
                x
              </button>
              <div className="card-title">
                <h5 className="mb-3">
                  {product.itemName}:{" "}
                  <span className="badge badge-pill badge-light p-2">
                    Total Price: ₹ {product.price * product.quantity}
                  </span>
                </h5>
              </div>
              <div className="card-content">
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => onDecrement(product)}
                  disabled={product.quantity === 1 && true}
                >
                  -
                </button>
                <span className="badge badge-pill badge-light">
                  {product.quantity}
                </span>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => onIncrement(product)}
                  disabled={product.quantity === product.stock && true}
                >
                  +
                </button>
                <button
                  className="btn btn-warning btn-sm m-2"
                  onClick={() => onOrder(product)}
                >
                  ✓
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
