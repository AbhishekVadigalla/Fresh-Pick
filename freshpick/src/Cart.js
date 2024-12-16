import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate } from 'react-router-dom';
const Cart = ({cartItems,removeFromCart,setCartItems}) => {
  let navigate=useNavigate()
  let totalCost=0
  cartItems.map(info=>totalCost+=parseInt(info.Price*info.quantity))
  const increaseQuantity=(id)=>{
    cartItems=cartItems.map(info=>{if(info.id===id){info.quantity+=1}return info})
    setCartItems(cartItems)
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
  }
  const decreaseQuantity=(id)=>{
    cartItems=cartItems.map(info=>{if(info.id===id){
      if(info.quantity>1){info.quantity-=1}
      }return info})
    setCartItems(cartItems)
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
    console.log(cartItems)
  }
  return (
    <div style={{backgroundColor:'grey',minHeight:'100vh'}}>
      <div className='Header'>
      <nav class="navbar  navbar-dark bg-dark ">
          <div class="container-fluid">
            <a class="navbar-brand">Your Cart</a>
            <form class="d-flex" role="search">
              <button onClick={()=>navigate('/Home')} class="btn btn-outline-success" type="submit">Home</button>
            </form>
          </div>
        </nav>
      </div>
          <div>
            {cartItems.length===0?<h3 style={{color:'lightblue'}} className='text-center mt-4'>You Have No Items In The Cart😞</h3>:
            <div>
              <div className='container-fluid'>
                <div className='row'>
                {
          cartItems.map((info)=>
          <div className='col-md-3 col-12 mt-4 mb-4'>
             <div class="card" style={{width: "18rem"}}>
              <img style={{height:'200px'}} src={info.Image} class="card-img-top" alt="Something Went Wrong..."/>
              <div class="card-body">
                <h3 class="card-title">{info.Name}</h3>
                <h6 class="card-text">{info.Description}</h6>
                <button disabled={info.quantity===1?true:false} onClick={()=>decreaseQuantity(info.id)} class='dec'><strong>-</strong></button> 
                <button className='quantity'><b>{info.quantity}</b></button> 
                <button onClick={()=>increaseQuantity(info.id)} className='inc'><strong>+</strong></button>
                <h5 className="card-title mt-3">Price : ₹{info.Price*info.quantity}</h5>             
                <a onClick={()=>removeFromCart(info.id)} href="#" class="btn btn-danger">Remove From Cart</a>
              </div>
            </div>
          </div>)
        }
                </div>
              </div> 
        </div>}
      </div>
      <div>
        {cartItems.length>0?
        <div>
          <h3 style={{color:'lightyellow'}} className='mt-5 mb-4'>Total Cost : ₹{totalCost}/- </h3> 
          <a onClick={()=>navigate('/BillPage')} href="#" class="btn btn-warning mb-5">Proceed To Buy</a>
        </div>:[]}
      </div>
    </div>
  )
}
export default Cart
