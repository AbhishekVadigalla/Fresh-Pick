import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const BillPage = ({cartItems}) => {
  const [showInput,setShowInput]=useState(false)
  const [formData,setFormData]=useState({
    phoneNo : '',
    fullName : '',
    email : '',
    address : '',
    pinCode : '',
    city : '',
    state : '',
  })
  let navigate=useNavigate()
  let totalCost=0
  cartItems.map(info=>totalCost+=parseInt(info.Price*info.quantity))
  const dataHandler=(e)=>{
    setFormData({
      ...formData,[e.target.name]:e.target.value
    })
  }
  const destination=(des)=>{
    document.querySelector('.des1').classList.remove('newClass')
    document.querySelector('.des1').innerHTML='Home'
    document.querySelector('.des2').classList.remove('newClass')
    document.querySelector('.des2').innerHTML='Work'
    document.querySelector('.des3').classList.remove('newClass')
    document.querySelector('.des3').innerHTML='Other'
    const addClass=document.querySelector('.'+des)
    addClass.classList.add('newClass')
    addClass.innerHTML='✓'+addClass.innerHTML
  }
  const newfunction=(inp)=>{
    setShowInput(inp)
  }
  const submit=(e)=>{
    e.preventDefault()
  }
  return (
    <div className='mb-4'>
      <div className='Header'>
      <nav class="navbar  navbar-dark bg-dark ">
          <div class="container-fluid">
            <a class="navbar-brand">Billing</a>
            <form class="d-flex" role="search">
              <button onClick={()=>navigate('/Home')} class="btn btn-outline-success" type="submit">Home</button>
              <button style={{marginLeft:'6px'}} onClick={()=>navigate('/Cart')} class="btn btn-outline-warning" type="submit">Cart</button>
            </form>
          </div>
        </nav>
      </div>

      <table class="table mt-4 table-hover border">
        <thead>
         <tr>
          <th scope="col">S.No</th>
          <th scope="col">Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Single Product Price(₹)</th>
          <th scope="col">Total Price(₹)</th>
        </tr>
       </thead>
       <tbody>
       {cartItems.map((info,id) => (
            <tr key={id}>
              <th scope="row">{id + 1}</th>
              <td>{info.Name}</td>
              <td>{info.quantity}</td>
              <td>{info.Price}</td>
              <td>{info.Price * info.quantity}</td>
            </tr>
          ))}
          <tr>
            <td><strong>Total Amount</strong></td>
            <td><strong>Rs.{totalCost}/-</strong></td>
          </tr>
        </tbody>
      </table>
      <div className='container'>
        <form onSubmit={submit}>
          <div className='form-group'>
            <label className='form-label mt-2'>PHONE NUMBER<sup class='mandatory'>*</sup> : </label>
            <input onChange={dataHandler} className='form-control' name='phoneNo' value={formData.phoneNo}></input>
            <label className='form-label mt-2'>FULL NAME<sup class='mandatory'>*</sup> : </label>
            <input onChange={dataHandler} className='form-control' name='fullName' value={formData.fullName}></input>
            <label className='form-label mt-2'>EMAIL<sup class='mandatory'>*</sup> : </label>
            <input onChange={dataHandler} style={{marginBottom:"25px"}} className='form-control' value={formData.email} type='email' name='email'></input> 
            <h4>ADDRESS : </h4>
            <label className='form-label mt-2'>HOUSE NO.,BUILDING,ROAD,AREA<sup class='mandatory'>*</sup></label>
            <input onChange={dataHandler} className='form-control' name='address' value={formData.address}></input>
            <label className='form-label mt-2'>PINCODE<sup class='mandatory'>*</sup> : </label>
            <input onChange={dataHandler} className='form-control' name='pinCode' value={formData.pinCode}></input>
            <label className='form-label mt-2'>CITY<sup class='mandatory'>*</sup> : </label>
            <input onChange={dataHandler} className='form-control' name='city' value={formData.city}></input>
            <label className='form-label mt-2'>STATE<sup class='mandatory'>*</sup> : </label>
            <input onChange={dataHandler} className='form-control' name='state' value={formData.state}></input>
            <h6 style={{fontSize:'15px',marginTop:"10px"}}>SAVE ADDRESS AS</h6>
            <div>
              <button onClick={()=>{destination('des1');newfunction(false)}} class='des1'>Home</button>
              <button onClick={()=>{destination('des2');newfunction(false)}} class='des2'>Work</button>
              <button onClick={()=>{destination('des3');newfunction(true)}}class='des3'>Other</button>
              {showInput&&<input style={{border:'solid',borderColor:'lightBlue'}} className='form-control mt-4'></input>}
            </div>
          </div>
        </form>
        <a onClick={()=>navigate('/Payment')} href="#" class="btn btn-warning">Proceed To Payment</a>
      </div>
      {/* <h1>{JSON.stringify(formData)}</h1> */}
    
  </div>
  )
}

export default BillPage
