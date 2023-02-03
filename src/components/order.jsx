import React, { Component } from "react";

class Order extends Component {
  render() {
    const { item, onOrderCancel } = this.props;

    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();

    return (
      <div className="col-2 mt-3 mb-3">
        <table className="table table-borderless">
          <tbody>
            <tr>
              <td>
                <span className="badge badge-pill badge-success">
                  {item.itemName}
                </span>
              </td>
              <td>
                <span className="badge badge-pill badge-light">
                  {item.quantity}
                </span>
              </td>
              <td>
                <span className="badge badge-pill badge-light">
                  Cost: ₹ {item.totalPrice}
                </span>
              </td>
              <td>
                <span className="badge badge-pill badge-light">
                  Placed on: {`${date}/${month}/${year}`}
                </span>
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onOrderCancel(item)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Order;
