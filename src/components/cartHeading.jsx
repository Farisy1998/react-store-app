const CartHeading = (props) => {
  const { productsCount, totalUnitPrice } = props;

  return (
    <h3 className="mt-2">
      Your Cart{" "}
      <span className="badge badge-pill badge-secondary m-2">
        {productsCount}
      </span>
      <span className="badge badge-pill badge-secondary">
        <i className="fa fa-inr" /> {totalUnitPrice}
      </span>
    </h3>
  );
};

export default CartHeading;
