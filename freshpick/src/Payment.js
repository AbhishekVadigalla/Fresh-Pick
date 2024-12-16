import React from 'react'
import { useNavigate } from 'react-router-dom'
const Payment = ({cartItems}) => {
  let totalCost=0
  cartItems.map(info=>totalCost+=parseInt(info.Price*info.quantity))
  let navigate=useNavigate()
  const removeCartItems=()=>{
    for(let i=0;i<cartItems.length;){
      cartItems.shift(0)
      localStorage.setItem("cartItems",JSON.stringify(cartItems))
    }
  }
  return (
    <div>
      <div>
      <button  onClick={()=>navigate('/Cart')} class="btn btn-warning">Cart</button>
        <h2 className='mt-5'>Please Pay ₹{totalCost} to the below QR </h2>
        <img style={{height : "300px",width:"300px"}} src="/Images/QR.jpg" alt='Something Went Wrong...!' className='mt-5'/>
      </div>
      <div className='transaction'>
        <div className='form-group '>
          <label style={{fontSize:'20px',fontWeight:'600'}}>Transaction Id</label>
          <input style={{width:'300px',border:'solid', borderColor:'lightBlue'}} className='form-control'></input>
        </div>
      </div>
      <a onClick={()=>{removeCartItems();navigate('/OrderUpdate')}} href="#" class="btn btn-primary mt-5">Place Order</a>
    </div>
  )
}

export default Payment
