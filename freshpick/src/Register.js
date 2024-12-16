import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  let navigate=useNavigate()
  const [char,setChar]=useState(false)
  const [cha,setCha]=useState(false)
  const [userDetails,setUserDetails]=useState({
    userName : '',
    email : '',
    phoneNo : '',
    password : '',
    rePassword : ''
  })
  const regDetails=(e)=>{
    setUserDetails({...userDetails,[e.target.name]:e.target.value})
  }
  const password=()=>{
    setChar(true)
  }
  const backGroundColor=()=>{
    if((userDetails.password).length>=0 &&(userDetails.password).length<=4){
      return 'red'
    }else if((userDetails.password).length>4&&(userDetails.password).length<8){
      return 'yellow'
    }else if((userDetails.password).length>=8){
      return 'green'
    }
  }
  const rePass=()=>{
    setCha(true)
  }
  const otpHandler=()=>{
    if((userDetails.password===userDetails.rePassword)&&((userDetails.password).length>=8)){
      userDetails.userName&&userDetails.email&&userDetails.phoneNo&&userDetails.password&&userDetails.rePassword&&navigate('/Otp')
    }else{
      return alert(`Both Passwords Should Match and\n Password Should Contain 8 Characters`)
    }
  }
  return(
    <div>
      <div style={{marginTop:'200px'}}>
        <div className='transaction '>
          <div className='form-group'>
            <label>User Name<sup className='mandatory'>*</sup></label>
            <input onChange={regDetails} name='userName' type='text' className='form-control'/>
            <label>E-mail<sup className='mandatory'>*</sup></label>
            <input onChange={regDetails} name='email' type='email' className='form-control'/>
            <label>Phone.No<sup className='mandatory'>*</sup></label>
            <input onChange={regDetails} name='phoneNo' type='text' className='form-control'/>
            <label>Set-Password<sup className='mandatory'>*</sup></label>
            <input onChange={(e)=>{password();regDetails(e)}} name='password' type='text' className='form-control'/>
            <h6>{char?<h1>{(userDetails.password).length<=8? 
            <div>
              <h6 style={{marginTop:'12px'}}>Password Length Should Be At Least Eight Characters</h6>
              <input style={{backgroundColor:backGroundColor(),transition:'background-color 0.5s', width:'300px',height:'15px',borderRadius:'10px',border:'solid',borderColor:'lightgray'}}></input>
            </div> 
             :[]}</h1>:[]}</h6>
            <label>Re-Enter Password<sup className='mandatory'>*</sup></label>
            <input onChange={(e)=>{rePass();regDetails(e)}} name='rePassword' type='text' className='form-control'/>
            <h6>{cha?<h6> {(userDetails.password!==userDetails.rePassword)?<h6>Both Passwords Should Match</h6>:[]}</h6>:[]}</h6>
            <button onClick={otpHandler} className='btn btn-primary mt-3'>Send Otp</button>
          </div>
        </div>
      </div>
      {/* <div>
        {JSON.stringify(userDetails)}
      </div> */}
    </div>
  )
}

export default Register
