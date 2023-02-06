const Like = (props) => {
  const { item, onLike } = props;

  return (
    <i
      className={item.like ? "fa fa-heart" : "fa fa-heart-o"}
      style={{ cursor: "pointer" }}
      onClick={() => onLike(item)}
    />
  );
};

export default Like;
