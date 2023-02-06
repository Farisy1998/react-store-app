import React, { Component } from "react";

const OrderCard = (props) => {
  const { item, onOrderCancel } = props;

  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  return (
    <div className="card bg-light text-dark mt-3 mb-3">
      <div className="card-body">
        <i
          className="fa fa-times pull-right"
          style={{ cursor: "pointer" }}
          onClick={() => onOrderCancel(item)}
        />

        <div className="card-title">
          <h4>{item.itemName}</h4>
        </div>
        <div className="card-text">
          {item.like && <i className="fa fa-heart m-2" />}
          <span className="badge badge-pill badge-light">
            <i className="fa fa-credit-card" /> {item.totalPrice}
          </span>
          <span className="badge badge-pill badge-light">
            <i className="fa fa-archive" /> {item.quantity}
          </span>
          <span className="badge badge-pill badge-light">
            <i className="fa fa-calendar" />
            &nbsp;&nbsp;{`${date}/${month}/${year}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
