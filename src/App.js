import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import Header from './component/Header/Header';
import Market from './component/Market/Market';
import Footer from './component/Footer/Footer';
import Cart from './component/Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Helper from './helper/Helper';


const cartKey = "cart-data";
function App() {
  const [carts, setCarts] = useState(() => {
    let dataLocalStorage = [];
    if(Helper.getLocalStorage(cartKey) === null){
      Helper.saveLocalStorage(cartKey, [])
    }else{
      dataLocalStorage = Helper.getLocalStorage(cartKey);
    }
    return dataLocalStorage;
  });

  const addToCart = (pet) => {
    try {
      let existPet = carts.length && carts.find(item => item.id === pet.id);
      if (!existPet) {
        setCarts([...carts, { ...pet, quantity: 1 }])
      }
      else {
        setCarts(
          carts.map(item => item.id === pet.id ? { ...item, quantity: item.quantity + 1 } : item)
        )
      }
      toast.success("Cart updates success!");
    } catch (error) {
      toast.error("Something went wrong, please try again later!");
    }
  }

  const incrementQuantity = (pet) => {
    setCarts(
      carts.map(item => item.id === pet.id ? { ...item, quantity: item.quantity + 1 } : item)
    )
  }

  const decrementQuantity = (pet) => {
    setCarts(preCart => {
      var result = preCart.map(item => item.id === pet.id ? { ...item, quantity: item.quantity - 1 } : item)
      return result;
    });
    setCarts(preCart => {
      var result = preCart.filter(item => item.quantity !== 0)
      return result;
    });
  }

  const checkout = () => {
    setCarts([]);
    toast.success("Cart has been checkout success");
  }
  
  Helper.saveLocalStorage(cartKey, carts);
  return (
    <React.Fragment>
      <ToastContainer position="bottom-right" autoClose={1000} />
      <Header carts={carts} />
      <Routes>
        <Route path={"/pets-store"} element={<Market addToCart={addToCart} />} />
        <Route path={"/pets-store/market"} element={<Market addToCart={addToCart} />} />
        <Route path={"/pets-store/cart"} element={<Cart 
                                            incrementQuantity= {incrementQuantity}
                                            decrementQuantity = {decrementQuantity} 
                                            checkout = {checkout}
                                            carts={carts} />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
