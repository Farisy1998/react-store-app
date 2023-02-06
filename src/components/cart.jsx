import React, { Component } from "react";
import CartCard from "./cartCard";
import CartHeading from "./cartHeading";

class Cart extends Component {
  render() {
    const { products, onIncrement, onDecrement, onDelete, onOrder, onLike } =
      this.props;

    const productsCount = products.length;

    if (productsCount === 0)
      return <h5 className="text-center mt-3 mb-3">Cart is empty</h5>;

    return (
      <React.Fragment>
        <div className="row justify-content-center">
          <CartHeading
            productsCount={productsCount}
            totalUnitPrice={this.getTotalUnitPrice()}
          />
        </div>
        <div className="row justify-content-center">
          <div className="col col-sm-5 col-md-3 col-xl-3 col-xxl-3 bg-light mb-2">
            {products.map((product) => (
              <CartCard
                key={product.id}
                product={product}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onDelete={onDelete}
                onOrder={onOrder}
                onLike={onLike}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }

  getTotalUnitPrice() {
    let totalUnitPrice = 0;

    for (const product of this.props.products) totalUnitPrice += product.price;

    return totalUnitPrice;
  }
}

export default Cart;
