import React, { Component } from "react";
import OrderCard from "./orderCard";
import OrderHeading from "./orderHeading";

class Orders extends Component {
  render() {
    const { items, onOrderCancel } = this.props;
    const itemsCount = items.length;

    if (itemsCount === 0)
      return <h5 className="text-center mt-3 mb-3">No orders are pending</h5>;

    return (
      <React.Fragment>
        <div className="row justify-content-center">
          <OrderHeading itemsCount={itemsCount} />
        </div>
        <div className="row justify-content-center">
          <div className="col col-sm-6 col-md-3 col-xl-3 col-xxl-3 bg-light mb-2">
            {items.map((item) => (
              <OrderCard
                key={item.id + item.quantity + item.price + item.totalPrice}
                item={item}
                onOrderCancel={onOrderCancel}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Orders;
