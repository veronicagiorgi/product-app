import Product from "./Product";

const ProductList = ({ products, callWhenSubmit, onAdd, disabled }) => {
  return (
    <div className="row mt-5">
      {products.map((el) => {
        return (
          <div className="col-12 col-sm-6 col-lg-4 mb-3" key={el.id}>
            <Product
              product={el}
              callWhenSubmit={callWhenSubmit}
              onAdd={onAdd}
              disabled={disabled}
            />
          </div>
        );
      })}
    </div>
  );
};
export default ProductList;