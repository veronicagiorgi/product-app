import { useState, useEffect, useCallback } from "react";
import { getAllProducts } from "./api";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

const App = () => {

  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    updateData();
  }, []);

  const updateData = async () =>{
    const updatedProducts = await getAllProducts();
    setProducts(updatedProducts);
  };

  const handleSearchBarSubmit = (term)=>{
    updateData(term);
  };

  const handleAddProdToCart =(newProduct)=>{
    setCounter(counter + 1);
    let newProductInThCart;
    let trovato = false;
    cart.forEach((element) => {
      if (element.id === newProduct.id) {
            console.log("duplicato"); 
            newProductInThCart = {
            id: element.id,
            index: cart.length,
            quantity: element.quantity + 1,
            title: element.title,
            price: element.price
          }
          trovato = true;
      }
    });

    if (!trovato) {
      newProductInThCart = {
        id: newProduct.id,
        index: cart.length,
        quantity: 1,
        title: newProduct.title,
        price: newProduct.price
      };
    };
      
    const newCart = cart.filter((el) => {
      return el.id !== newProduct.id;
    });
    
   // newProductInThCart = {id:newProduct.id, index:cart.length, quantity: 1, title: newProduct.title }
    const newCartProd = [...newCart, newProductInThCart];
   newCartProd.forEach(element => {
    console.log("element: ", element);
   });
    console.log("new cart: " , newCartProd);
    setCart(newCartProd);
  };

  const handleDelete = (index,item) =>{
    setCounter(counter -1);
     
    if (item.quantity >= 1) {
      // console.log(item.quantity);
      item.quantity -= 1;
      const updatedCart = [...cart];
      setCart(updatedCart);
    }
    if(item.quantity === 0){
      const updatedCart = cart.filter((el, indexFilter) => {
        return index !== indexFilter;
      });
      setCart(updatedCart);
    }   
  };

  const filterData = (term) => {
    let updatedData = products;
    if (term !== "") {
      updatedData = products.filter((element) => {
        return (
          element.title.toLowerCase().includes(term.toLowerCase()) ||
          element.description.toLowerCase().includes(term.toLowerCase())
        );
      });
    };
    setProducts(updatedData);
    //console.log(updatedData)
  };
  const cachedFilterData = useCallback(filterData, []);

    return (
      <>
        <Navbar
          callWhenSubmit={handleSearchBarSubmit}
          cart={cart}
          onDelete={handleDelete}
          counter={counter}
          filterData={cachedFilterData}
        />
        <div className="container">
          <div>
            <ProductList products={products} onAdd={handleAddProdToCart} />
          </div>
        </div>
      </>
    );
  }; 
export default App;
