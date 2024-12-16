import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Fotp = () => {
  const[otp,setOtp]=useState('')
  let navigate=useNavigate()
  const otpHandler=()=>{
    if(otp.length===6){
      otp&&navigate('/NewPassword')
    }
  }
  return (
    <div>
      <div style={{marginTop:'200px'}} className='transaction'>
      <div className='form-group mt-5'>
        <h5>Please enter 6-digit OTP here...</h5>
        <input onChange={(e)=>setOtp(()=>e.target.value)} style={{width:'200px',border:"solid",borderColor:'lightblue',marginTop:'10px'}} className='form-control' type='email'></input>
      </div>
      <div>
       <button style={{marginTop:'30px'}} onClick={otpHandler} className='btn btn-success'>Next</button>
     </div>
      </div>
    </div>
  )
}

export default Fotp
