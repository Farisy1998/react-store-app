const OrderHeading = (props) => {
    const { itemsCount } = props;

    return (
      <h3>
        Your Orders{" "}
        <span className="badge badge-pill badge-secondary m-2">
          {itemsCount}
        </span>
      </h3>
    );
}
 
export default OrderHeading;