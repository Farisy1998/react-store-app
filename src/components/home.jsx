import React, { Component } from "react";
import HomeCard from "./homeCard";

class Home extends Component {
  render() {
    const { products, cartItems, onCartClick, onLike } = this.props;
    const productsCount = products.length;

    if (productsCount === 0)
      return <h4 className="text-center m-2">No items in stock</h4>;

    return (
      <React.Fragment>
        <div className="row bg-info p-2 m-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="col col-sm-12 col-md-3 col-xl-3 col-xxl-3 mt-3 mb-3"
            >
              <HomeCard
                item={product}
                cartItems={cartItems}
                onCartClick={onCartClick}
                onLike={onLike}
              />
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
