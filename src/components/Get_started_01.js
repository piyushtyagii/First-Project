import React from 'react'
import logo from "../logo.svg"
import netflixreglogo from "../netflixreglogo.png"
import { Link, useLocation,useNavigate} from "react-router-dom";


export default function Get_started_1() {
  const navigate  = useNavigate();
  const {state} = useLocation();
  const email = state.emaill;
  const handleclick = ()=>{
    navigate("/Registration",{state : {email : email}})
  }
  return (
    <div id='Get_started_1'>
      <div className="navbar-gs1">
        <span className="netflix-logo-gs1">
          <img src={logo} className="img-netflixlogo-confirmation" alt="" />
        </span>
        <Link to="/">
        <span className="Signin-gs1">
          <button className='Signin-btn-gs1'>Sign in</button>
        </span></Link>
      </div>
      <div className="gs1-middlecontent">
        <img src={netflixreglogo} alt="" className="reg-img" />
        <h1 className='gs1-heading'>Finish setting up your<br /> account</h1>
        <div className='gs1-smalltext'>Netflix is personalised for you. <br /> Create a password to watch on any <br /> device at any time.</div>
        <button className="next-button-gs1" onClick={handleclick}><span className="nextbutton-text-gs1">Next</span></button>
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