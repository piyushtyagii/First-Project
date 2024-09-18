





import React from 'react'
import logo from "../logo.svg"
import { Link } from 'react-router-dom'

export default function Verifyemail() {

  return (
    <div className='verifyemail-page'>
        <div className="navbar-gs1">
        <span className="netflix-logo-confirmation">
          <img src={logo}className="img-netflixlogo-gs1" alt="" />
        </span>
      </div>
      <div className="verifyemail-page-middlecontent-box">
        <div className="verifyemail-page-middlecontent">
          <div className="Verifyemail-svg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" role="img" data-icon="ShieldCheckmarkStandard" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M12.4061 1.08619C12.1476 0.971271 11.8524 0.971271 11.5939 1.08619L1.59387 5.53063C1.21945 5.69704 0.984428 6.07501 1.0008 6.48441C1.11201 9.2645 1.36208 12.7774 2.80051 15.8916C4.26941 19.0717 6.95244 21.7837 11.7603 22.9708C11.9177 23.0097 12.0823 23.0097 12.2397 22.9708C17.0476 21.7837 19.7306 19.0717 21.1995 15.8916C22.6379 12.7774 22.888 9.2645 22.9992 6.48441C23.0156 6.07501 22.7806 5.69704 22.4061 5.53063L12.4061 1.08619ZM4.61617 15.0529C3.46121 12.5525 3.15696 9.68464 3.02915 7.08136L12 3.09432L20.9709 7.08136C20.8431 9.68464 20.5388 12.5525 19.3838 15.0529C18.1819 17.6551 16.0369 19.9059 12 20.968C7.96307 19.9059 5.81813 17.6551 4.61617 15.0529ZM11.7071 15.7071L17.7071 9.70711L16.2929 8.29289L11 13.5858L8.70711 11.2929L7.29289 12.7071L10.2929 15.7071L11 16.4142L11.7071 15.7071Z" fill="currentColor"></path></svg>
          </div>
          <div className="textarea-verifyemailpage">
            <h1 className="heading-verifyemailpage">Great, <br /> You are registered with us</h1>
            
            
          </div>
          <Link to="/Signin">
          <button className="skip-btn-verifyemailpage"><span className="skipbtn-text">Okay</span></button></Link>



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

/*<div className="smalltext-verifyemailpage">Click the link we sent to <br /> <b>tyagipiyush334444@gmail.com</b>  to verify.</div>
            <div className="smalltext-verifyemailpage">Verifying your email will improve account security and <br /> help you receive important Netflix communications.</div>  */