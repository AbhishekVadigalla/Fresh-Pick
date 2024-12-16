import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const NewPassword = () => {
  const[pass,setPass]=useState(false)
  const [repass,setRePass]=useState(false)
  const [secure,setSecure]=useState({
    password:'',
    rePassword : ''
  })
  let navigate=useNavigate()
  const passwordHandler=(e)=>{
    setSecure({
      ...secure,[e.target.name]:e.target.value
    })
  }
  const newPass=()=>{
    setPass(true)
  }
  const backGroundColor=()=>{
    if((secure.password).length>=0 &&(secure.password).length<=4){
      return 'red'
    }else if((secure.password).length>4&&(secure.password).length<8){
      return 'yellow'
    }else if((secure.password).length>=8){
      return 'green'
    }
  }
  const rePassword=()=>{
    setRePass(true)
  }
  const nextHandler=()=>{
    if((secure.password===secure.rePassword)&&((secure.password).length>=8)){
      secure.password&&secure.rePassword&& navigate('/Login')
    }else{
      return alert(`Both Passwords Should Match and\n Password Should Contain 8 Characters`)
    }
  }
  return (
    <div>
       <div style={{marginTop:'200px'}} className='transaction'>
       <div className='form-group mt-5'>
          <h5>New Password<sup className='mandatory'>*</sup></h5>
          <input name='password' value={secure.password} onChange={(e)=>{newPass();passwordHandler(e)}} style={{border:"solid",borderColor:'lightblue',marginTop:'5px'}} className='form-control' type='text'></input>
          <h5>{pass?<div>{(secure.password).length<=8?
          <div>
            <h5>Your Password Should Contain At Least Eight Characters</h5>
            <input style={{backgroundColor:backGroundColor(),transition:'background-color 0.5s', width:'300px',height:'15px',borderRadius:'10px',border:'solid',borderColor:'lightgray'}}></input>
          </div>:[]}</div>:[]}</h5>
          <h5 className='mt-4'>Re-Type New Password<sup className='mandatory'>*</sup></h5>
          <input name='rePassword' value={secure.rePassword} onChange={(e)=>{rePassword();passwordHandler(e)}} style={{border:"solid",borderColor:'lightblue',marginTop:'5px'}} className='form-control' type='text'></input>
          <h5>{repass?<h5>{(secure.password!==secure.rePassword)?<h5>Both Passwords Should Match</h5>:[]}</h5>:[]}</h5>
      </div>
      <div>
       <button style={{marginTop:'30px'}} onClick={nextHandler} className='btn btn-success'>Next</button>
     </div>
      </div>
      {/* <h1>{JSON.stringify(secure)}</h1> */}
    </div>
  )
}

export default NewPassword
