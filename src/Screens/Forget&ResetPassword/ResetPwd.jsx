

import React from 'react'
import './Forget&ResetPwd.css'
import axios from 'axios'
import { useState } from 'react'

function ResetPwd() {
    const [resetPasswordToken, setResetPasswordToken] = useState("")
    const [password, setPassword] = useState("")

    const handleOnSubmit = (e) => {
        e.preventDefault()

    }
    const handleApi = () => {
        axios.post(
            "http://localhost:6068/api/v1/auth/home/resetPassword",
            {setResetPasswordToken,setPassword}
            .then( res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log("error",err);
            })        )
    }
  return (
    <>
    
    <div className='body'>
    <form className="forget-form-layout">
        <h3>Reset Your Password?</h3>
        {/* <h2 className=" mb-6">Enter your email here</h2> */}

        <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">ResetPasswordToken</label>
                        <input type="password"  name='resetPasswordToken' value={resetPasswordToken} onChange={e => setResetPasswordToken(e.target.value)} className="form-control" id="exampleInputPassword1" />
                    </div>
        <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label"> Password</label>
                        <input type="password"  name='password' value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                    </div>
  
  <button type="submit" onClick={handleOnSubmit} class="btn btn-primary">submit</button>

</form>
</div>
</>
  )
}

export default ResetPwd