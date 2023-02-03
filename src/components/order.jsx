import React, { Component } from "react";

class Order extends Component {
  render() {
    const { item, onOrderCancel } = this.props;

    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();

    return (
      <div className="row mt-3 mb-3">
        <div className="col col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <div className="card bg-light text-dark">
            <div className="card-body">
              <button
                className="btn btn-danger btn-sm pull-right"
                onClick={() => onOrderCancel(item)}
              >
                x
              </button>
              <div className="card-title">
                <h4 className="">
                  {item.itemName}
                  <span className="badge badge-pill badge-light">
                    Cost: ₹ {item.totalPrice}
                  </span>
                </h4>
              </div>
              <div className="card-text">
                <span className="badge badge-pill badge-light">
                  Quantity: {item.quantity}
                </span>{" "}
                <span className="badge badge-pill badge-light">
                  Placed on: {`${date}/${month}/${year}`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Order;
