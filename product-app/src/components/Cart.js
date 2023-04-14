import SingleCartItem from "./SingleCartItem";

const Cart = ({ cart, onDelete }) => {

if(cart.length === 0){
  return <div className="alert alert-warning w-100">Il tuo carrello è vuoto.</div>
} else {
  return (
    <>
      <div className="alert alert-warning w-100">
        <ul>
          {cart.map((el, index) => {
            return (
              <li className="list-unstyled w-50" key={index}>
                <SingleCartItem
                  item={el}
                  onDelete={onDelete}
                  index={index}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
  
};
export default Cart;
