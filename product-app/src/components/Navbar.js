import { useState } from "react";
import Cart from "./Cart";
import SearchBar from "./SearchBar";

const Navbar = ({ callWhenSubmit, cart, onDelete, counter, filterData }) => {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart((showCart) => !showCart);
  };

  return (
    <header>
      <nav className="navbar p-4" style={{ backgroundColor: "#189AB4" }}>
        <div className="d-flex">
          <a
            className="navbar-brand text-light text-center me-5"
            href="index.html"
          >
            Products
          </a>
          <SearchBar callWhenSubmit={callWhenSubmit} filterData={filterData} />
        </div>
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            handleShowCart();
          }}
        >
          <i className="fa fa-cart-shopping text-light"></i>
          <span className="badge text-bg-secondary ms-2">{counter}</span>
        </button>
      </nav>
      {showCart && <Cart cart={cart} onDelete={onDelete} />}
    </header>
  );
};
export default Navbar;
