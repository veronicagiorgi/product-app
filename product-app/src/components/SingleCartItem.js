const SingleCartItem = ({ onDelete, item, index }) => {

  const handleDelete = () => {
      onDelete(index, item);
  };

  return (
    <div className="d-flex justify-content-between">
      <span>
        {item.title}, {item.price}&euro;
        <br></br>
        x{item.quantity}
      </span>
      <span>
        <button
          type="submit"
          className="btn btn-outline-danger btn-sm"
          onClick={() => {
            handleDelete(index, item);
          }}
        >
          <i className="fa fa-trash"></i>
        </button>
      </span>
    </div>
  );
};
export default SingleCartItem;
