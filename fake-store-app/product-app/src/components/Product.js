import { useState } from "react";
import Stars from "./Stars";

const Product = ({ product, callWhenSubmit, onAdd }) => {
  const [viewDescription, setViewDescription] = useState(false);

  const handleShowProduct = () => {
    setViewDescription((viewDescription) => !viewDescription);
  };

  const find = (term) => {
    if (term === product.title) {
      callWhenSubmit(term);
    }
    find();
  };

  const handleAddProduct = () => {
    onAdd(product);
  };

  return (
    <div className="card shadow mt-4 h-100">
      <div className="card-header text-center">
        <img
          className="img-fluid"
          src={product.image}
          alt={product.title}
          style={{ width: "auto", height: "250px" }}
        />
      </div>
      <div className="card-body">
        <h5 className="mb-4">{product.title}</h5>
        {/* <p>
          <span className="fw-bold m-0">Category: </span>
          {product.category}
        </p> */}
        <p>
          <span className="fw-bold m-0">Rate: </span>
          <Stars
            value={product.rating.rate}
            max={5}
            empty="fa fa-star-o"
            full="fa fa-star"
          />
        </p>
        <p>
          <span className="fw-bold m-0">Price:</span> {product.price} &euro;
        </p>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <button
          className="btn btn-warning btn-sm my-2"
          onClick={() => {
            handleShowProduct();
          }}
        >
          Description
        </button>
        <button
          className="btn btn-outline-info btn-sm my-2"
          type="submit"
          onClick={() => {
            handleAddProduct();
          }}
        >
          Add to cart <i className="fa fa-regular fa-cart-plus"></i>
        </button>
      </div>
      <div>
        {viewDescription && <div className="p-4">{product.description}</div>}
      </div>
    </div>
  );
};
export default Product;