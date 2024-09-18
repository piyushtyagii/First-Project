import React, { useState } from 'react'
import logo from "../logo.svg"
import { useNavigate } from 'react-router-dom'
import cross from "../cross.svg"
import Userinterface from './Userinterface';


export default function SignUp() {
  const navigate = useNavigate()
  const [credentials, setcredentials] = useState({ email: "", password: "" })
  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/FetchUser", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    })
    const json = await response.json();
    console.log(json)
    document.getElementById("email-error-signinpage").style.visibility = (!json.success)?"initial":"hidden";
    document.getElementById("email-signinpage").style.border = (!json.success )?"2px solid red":"1px solid white"
    document.getElementById("password-signinpage").style.border = (!json.success )?"2px solid red":"1px solid white"
     if (json.success)
      navigate('/user-interface', { state: { email: credentials.email } })


  }
  const handlechange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  const registrationhandle = (e)=>{
    e.preventDefault();
    navigate("/Registration",{state : {email:""}})
  }

  return (
    <div><div className="main-SignUp">
      <header className="header-SignUp">
        <span className="logo-SignUp"
        ><img src={logo} alt="" className="netflixlogo-SignUp"
          /></span>

      </header>
      <div className="lower-content-signup">
      <div className="form-box">
        <h1 className="signup-text-signupPage">Sign in</h1>
        <form action="signup" className="form" onSubmit={handlesubmit}>
          <div className="email-signinpage-box"id="email-signinpage"><input type="text" className="email-signinpage"  name='email' value={credentials.email} onChange={handlechange} placeholder='Email or Phone Number' /></div>
          <div className="password-signinpage-box"id="password-signinpage" ><input type="password" className="password-box" name='password' value={credentials.password} onChange={handlechange} placeholder='Password' /></div>



          <div className="email-error-signinpage" id='email-error-signinpage'>

            <span className="email-error-text-signinpage"><img src={cross} alt="" />
              Please enter a valid email address or phone number.</span>
          </div>
          <button className="SignUp-button-signUp-page">Sign in</button>
          <div className="or">OR</div>

          <button className="Signin-code" onClick={registrationhandle}>New to Netflix?</button>
          <a href="/loginhelp" className="forgot-password">Forgot password?</a>

        </form>

        <div className="text-below-signup-form"><div className="remember-me-box">
          <input type="checkbox" name="Remember me" id="checkbox" />Remember me
        </div>
          <div className="new-to-netflix">
            <span >New to Netflix?</span>
            <a href="/sign" className="signup-newtonetflix">Sign up now.</a></div>
          <div className="last-text">
            <span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
            <a href="learnmore"> Learn more.</a>
          </div>
        </div>
      </div>
      <div className="box-SignUp"></div>
      </div>
    </div></div>
  )
}