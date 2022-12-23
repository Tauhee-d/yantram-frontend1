import React, { useState } from 'react'
import './Forget&ResetPwd.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import e from 'cors';


function ForgetPwd() {

    const navigate = useNavigate()
    const [email,setEmail] = useState("")

    const handleOnClick = (e) => {
        e.preventDefault()
        handleApi()
    } 

    const handleApi = () => {
        axios.post(
            "http://localhost:6068/api/v1/auth/home/resetPass",
            {email},
            console.log("email:",email)
            .then( 
                navigate('/ResetPwd')

        )
            .catch(err => {
                console.log("error",err);
            })
        )
    }
  return (
    <>
    
    <div className='body'>
    <form className="forget-form-layout">
        <h3>Forget Your Password?</h3>
        {/* <h2 className=" mb-6">Enter your email here</h2> */}

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={email} onChange={e => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <button type="submit" onClick={handleOnClick}  className="btn btn-primary col-lg-4"><span>Send</span></button>

</form>
</div>
</>
  )
}

export default ForgetPwd