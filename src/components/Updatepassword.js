import React, { useState } from 'react'

import logo from "../logo.svg"
import youraccount from "../youraccount.png"

import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Updatepassword() {
  const location = useLocation();
  const email = location.state.email;
  console.log(email)
  const navigate = useNavigate();
  const [creds, setcreds] = useState({ password: "", newpassword: "", re_newpassword: "" })
  const handlechange = (e) => {
    e.preventDefault()
    setcreds({ ...creds, [e.target.name]: e.target.value })
  }
  const handlesubmit = async (e) => {
    if (creds.newpassword === creds.re_newpassword) {

      e.preventDefault();
      const data = await fetch('http://localhost:5000/api/UpdatePassword', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: creds.password, newpassword: creds.newpassword })
      })
      const response = await data.json();
      console.log(response)



      document.getElementById('wrong-current-password').style.visibility = (response.error === "wrong-current-password") ? "initial" : "hidden"
      document.getElementById("currentpassword-input").style.border = (response.error === "wrong-current-password") ? "2px solid red" : "1px solid #8c8c8c"
      document.getElementById('newpassword-mismatch').style.visibility = (response.error === "password too short") ? "initial" : "hidden"
      document.getElementById('newpassword-mismatch').innerHTML = (response.error === "password too short") ? "Your new password should be between 5-60 characters" : ""

      if (response.error === "updated") {
        console.log("updated")
        navigate('/User-interface', { state: { email: email } })
      }
    }
    else {
      document.getElementById('newpassword-input').style.border = " 2px solid red"
      document.getElementById('renewpassword-input').style.border = " 2px solid red"
      document.getElementById('newpassword-mismatch').style.visibility = "initial"
    }

  }

  return (
    <div className='update'>
      <div className="navbar-updatepassword">
        <span className="netflix-logo-gs1">
          <img src={logo} className="img-netflixlogo-updatepassword" alt="" />

        </span>

        <span className="userinterface-rightcorner">
          <span className="youraccount-img-box"><img className='youraccount-img' src={youraccount} alt="" /></span>
          <span className="dropdowncontent-account">
            <span className="dropdowncontent-1">{location.state.email}</span>
            <Link to="/updatepassword"><span className="dropdowncontent-2">Change password</span></Link>
            <Link to="/"><span className="dropdowncontent-3">Sign out</span></Link>
          </span>
        </span>
      </div>
      <div className="middlecontent-updatepassword-box">
        <div className="middlecontent-updatepassword">
          <div className="heading-updatepassword"><h1>Change password</h1></div>
          <div className="smalltext-updatepassword"><h4>Protect your account with a unique password at least 6 characters long.</h4></div>
          <div className="form-updatepassword">
            <input type="password" placeholder='Current Password' name='password' onChange={handlechange} value={creds.password} className="currentpassword-updatepassword form-element" id="currentpassword-input" />
            <div className="error-password " id='wrong-current-password'>Your current password does not match</div>
            <input type="password" placeholder='New Password (6-60 Characters)' name='newpassword' onChange={handlechange} value={creds.newpassword} className='newpassword-updatepassword form-element' id='newpassword-input' />
            <div className="error-password">Your password is too short.</div>
            <input type="password" placeholder='Re-Enter New Password' name='re_newpassword' id='renewpassword-input' onChange={handlechange} value={creds.re_newpassword} className="renewpassword-updatepassword form-element" />
            <div className="error-password" id='newpassword-mismatch'>Your new passwords do not match</div>
          </div>
          <div className="save-cancel-box-updatepassword">
            <button className="save-updatepassword save-cancel-box" onClick={handlesubmit}>Save</button>
            <button className="cancel-updatrepassword save-cancel-box">Cancel</button>
          </div>
        </div>
      </div>
      <div className="footer-gs1">
        <div className="footer-gs1-1">Questions? Call 000-800-919-1694</div>
        <div className="footer-gs1-2"><div className="grid-container-gs1">
          <div className="grid-item-gs1">FAQ</div>
          <div className="grid-item-gs1">Help Centre</div>
          <div className="grid-item-gs1">Netflix Shop</div>
          <div className="grid-item-gs1">Terms of Use</div>
          <div className="grid-item-gs1">Privacy</div>
          <div className="grid-item-gs1">Cookie Preferences</div>
          <div className="grid-item-gs1">Corporate Information</div>
        </div></div>
        <div className="footer-gs1-3">
          <button className="btn-footer-gs1-3">
            <select name="cars" id="language-gs1">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>

            </select>
          </button>
        </div>
      </div>
    </div>
  )
}


/*if (response.success === "wrong-current-password") {
            document.getElementById('wrong-current-password').style.visibility = 'initial'
          }
         else if(response.errors === "password too short"){
          
        document.getElementById('newpassword-mismatch').style.visibility = 'initial'
        
        document.getElementById('newpassword-mismatch').innerHTML = 'Your new password should be between 5-60 characters';
        }
        else if (response.success === "updated") {
          console.log("updated")
          navigate('/User-interface', { state: { email: email } })
        }*/