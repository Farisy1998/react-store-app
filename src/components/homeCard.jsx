import React, { Component } from "react";
import Like from "./common/like";

class HomeCard extends Component {
  render() {
    const { item, onLike, onCartClick } = this.props;

    return (
      <div className="card bg-light">
        <div className="card-body">
          <div className="card-title">
            <span>{item.itemName}</span>
            <span className="pull-right pull-top">
              <Like item={item} onLike={onLike} />
            </span>
          </div>
          <div className="card-content">
            <span className="badge badge-pill badge-light">
              <i className="fa fa-inr" /> {item.price}
            </span>
            <span className="badge badge-pill badge-light">
              <i className="fa fa-archive" /> {item.stock}
            </span>
            <button
              className="btn btn-success btn-sm pull-right"
              onClick={() => onCartClick(item)}
              disabled={this.toogleDisable(item.id)}
            >
              <i className="fa fa-cart-plus" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  toogleDisable(productId) {
    const cart = this.props.cartItems;

    const targetProducts = cart.filter((item) => item.id === productId);

    return (
      targetProducts.length !== 0 && targetProducts[0].id === productId && true
    );
  }
}

export default HomeCard;
