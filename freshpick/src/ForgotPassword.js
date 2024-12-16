import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const ForgotPassword = () => {
  const[email,setEmail]=useState('')
  let navigate=useNavigate()
  const submitHadler=(e)=>{
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={submitHadler}>
      <div className='transaction'>
      <div className='form-group'>
        <label style={{fontSize:'20px',marginBottom:'5px',marginTop:'200px'}}>Email</label>
        <input onChange={(e)=>setEmail(e.target.value)} className='form-control' type='email'></input>
        <h6 style={{width:'400px',marginLeft:'-20px',marginTop:'10px'}}>Please Enter your e-mail to reset your password..</h6>
     </div>
     <div>
       <button onClick={()=>email&&navigate('/Fotp')} className='btn btn-success'>Next</button>
     </div>
      </div>
      </form>
      
    </div>
  )
}

export default ForgotPassword
