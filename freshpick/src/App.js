import React, { useState } from 'react';
import './style.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Cart from './Cart';
import BillPage from './BillPage';
import Payment from './Payment';
import OrderUpdate from './OrderUpdate';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Fotp from './Fotp';
import NewPassword from './NewPassword';
import Register from './Register';
import Otp from './Otp';
function App() {
  const [cartItems,setCartItems] = useState(() => {
    const cartItems = localStorage.getItem('cartItems');
    return cartItems ? JSON.parse(cartItems) : [];
  });
  const addToCart=(item,id)=>{
    item["quantity"]=1
    let existing=false
    let updatedCartItems=cartItems.map(info=>{
      if(info.id===id){
        existing=true;
        return {...info,quantity:info.quantity+1}   
    }
    return info;
  })
    if(!existing){
     updatedCartItems= [...cartItems,item]
    }
    setCartItems(updatedCartItems)
    localStorage.setItem("cartItems",JSON.stringify(updatedCartItems))
    alert(`Product is Added to your Cart`)
  }
  const removeFromCart=(id)=>{
    const updatedCartItems=cartItems.filter(cartItem=>cartItem.id!==id)
    setCartItems(updatedCartItems)
    localStorage.setItem('cartItems',JSON.stringify(updatedCartItems))
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/NewPassword' element={<NewPassword/>}/>
          <Route path='/Fotp' element={<Fotp/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
          <Route path='/' element={<Home addToCart={addToCart}/>} />
          <Route path='/Cart' element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} setCartItems={setCartItems}/>}/>
          <Route path='/Home' element={<Home addToCart={addToCart}/>}/>
          <Route path='/BillPage' element={<BillPage cartItems={cartItems}/>}/>
          <Route path='/Payment' element={<Payment cartItems={cartItems}/>}/>
          <Route path='/OrderUpdate' element={<OrderUpdate/>}/>
          <Route path='/Otp' element={<Otp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
