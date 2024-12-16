import React, { useState } from 'react'
import { json } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  let navigate=useNavigate()
  const [user,setUser]=useState({
    email : "",
    password : ""
  })
  const userHandler=(e)=>{
    setUser({
      ...user,[e.target.name]:e.target.value
    })
  }
  return (
    <div style={{backgroundColor:'lightwheat',minHeight:'100vh'}}>
      <h1 style={{fontWeight:'650',fontFamily:"serif",fontSize:'40px'}}>FreshPick</h1>
      <div className='container'>
        <div className='row'>
        <h2 className='mt-5'>Login to your Account</h2>
          <div className='login mt-4'>
            <div className='form-group'>
              <label>Email<sup  className='mandatory'>*</sup></label>
              <input name='email' type='email' value={user.email} onChange={userHandler} style={{width:'300px',marginTop:'3px'}} className='form-control'></input>
              <label style={{marginTop:'12px'}}>Password<sup  className='mandatory mt-'>*</sup></label>
              <input name='password' value={user.password} onChange={userHandler} style={{width:'300px',marginTop:'3px'}} className='form-control'></input>
              <h5 onClick={()=>navigate('/ForgotPassword')} style={{color:'blue',marginTop:'8px',cursor:"pointer"}}>Forgot Password..?</h5>
              <button onClick={()=>user.email && user.password && navigate('/Home')} style={{fontWeight:'bold'}} class="btn btn-success" 
              type="submit">Login</button>
              <h5 className='mt-4'>Don't have an Account..?</h5>
              <button onClick={()=>navigate('/Register')} style={{display:'inline'}} class="btn btn-primary" type="submit">Register</button> 
            </div>
          </div>
        </div>
      </div>
      {/* <h1>{JSON.stringify(user.password)}</h1> */}
    </div>
  )
}

export default Login
