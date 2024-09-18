import React, { useState } from 'react'
import logo from "../logo.svg"
import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function Registration() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state.email;
  const [credentials, setcredentials] = useState({ email: email, password: "" })
  const handleclick = async (e) => {
    e.preventDefault();
    const resp = await fetch('http://localhost:5000/api/UpdateUser', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })

    })
    const json = await resp.json();

    console.log(json);
/*
    document.getElementById("password-error-registration").style.visibility = (json.errors === "Password too short")?"initial" : "hidden"
    document.getElementById("password-input-registration").style.border = (json.errors === "Password too short")?"2px solid red" : "1px solid #333"


    document.getElementById("email-error-registration").style.visibility = (json.errors === "Invalid email") ? "initial" : "hidden";
    document.getElementById("email-input-registration").style.border = (json.errors === "Invalid email") ? "2px solid red" : "1px solid #333";

    document.getElementById("password-error-registration").style.visibility = (json.errors === "Invalid email,Password too short") ? "initial" : "hidden"
    document.getElementById("password-input-registration").style.border = (json.errors === "Invalid email,Password too short") ? "2px solid red" : "1px solid #333"



    document.getElementById("email-error-registration").style.visibility = (json.errors === "Invalid email,Password too short") ? "initial" : "hidden";
    document.getElementById("email-input-registration").style.border = (json.errors === "Invalid email,password too short") ? "2px solid red" : "1px solid #333";

    if (json.success === true) {
      navigate('/confirmation')}*/
      
      if (json.errors === "password too short") {
        document.getElementById("password-error-registration").style.visibility = "initial"
        document.getElementById("password-input-registration").style.border = "2px solid red"
  
      }
      else if (json.errors === "Invalid email") {
        document.getElementById("email-error-registration").style.visibility = "initial"
        document.getElementById("email-input-registration").style.border = "2px solid red"
      }
      else if (json.errors === "Invalid email,password too short") {
        document.getElementById("password-error-registration").style.visibility = "initial"
        document.getElementById("email-error-registration").style.visibility = "initial"
        document.getElementById("password-input-registration").style.border = "2px solid red"
        document.getElementById("email-input-registration").style.border = "2px solid red"
      }
      else if (json.success === true) {
        navigate('/confirmation')
      }
        
    }
    const handlechange = (e) => {
      setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
      <div className='Registration-page'>
        <div className="navbar-gs1">
          <span className="netflix-logo-gs1">
            <img src={logo} className="img-netflixlogo-gs1" alt="" />
          </span>
        </div>
        <div className="Registration-page-middlecontent">
          <h1 className="heading-regpage">Create a password to start <br /> your membership</h1>
          <span className="smalltext-regpage">Just a few more steps and you're done! <br />
            We hate paperwork, too.</span>
          <ul className="form-regpage">
            <div className="form-regpage-1-content" id='email-input-registration'>

              <input type="text" placeholder='Email' name='email' onChange={handlechange} value={credentials.email} className="form-regpage-1-input" />
            </div>
            <div className="error-registration" id='email-error-registration'>
              <span id="error-text-registration">
                Please enter a valid email address</span>
            </div>
            <div className="form-regpage-1-content" id='password-input-registration'>

              <input type="Password" placeholder='Password' name='password' onChange={handlechange} value={credentials.password} className="form-regpage-1-input" />
            </div>
            <div className="error-registration" id='password-error-registration'>
              <span id="error-text-registration">
                Password is too short</span>
            </div>
            <Link to="/confirmation">
              <button onClick={handleclick} className=" next-btn-regpage"><span className="nextbutton-text-gs1-regpage">Next</span></button></Link>
          </ul>
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