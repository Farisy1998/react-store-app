import React, { Component } from "react";
import Order from "./order";

class Orders extends Component {
  render() {
    const { items, onOrderCancel } = this.props;
    const itemsCount = items.length;

    if (itemsCount === 0) return <h4 className="text-center mt-3 mb-3">No orders</h4>;

    return (
      <React.Fragment>
        <h3>
          Your Orders{" "}
          <span className="badge badge-pill badge-secondary m-2">
            {itemsCount}
          </span>
          <span className="badge badge-pill badge-secondary m-2">
            ₹ {this.getTotalItemsPrice(items)}
          </span>
        </h3>
        {items.map((item) => (
          <Order
            key={item.id + item.quantity + item.price + item.totalPrice}
            item={item}
            onOrderCancel={onOrderCancel}
          />
        ))}
      </React.Fragment>
    );
  }

  getTotalItemsPrice(items) {
    let totalPrice = 0;

    for (let item of items) {
      totalPrice += item.totalPrice;
    }

    return totalPrice;
  }
}

export default Orders;
