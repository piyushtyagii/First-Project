import React, { useState } from 'react'
import logo from "../logo.svg"
import languagelogo from "../languagelogo.svg"
import getstartedarrow from "../getstartedarrow.svg"
import secondsectionvideo from "../secondsectionvideo.m4v.m4v"
import tv from "../tv.png"
import thirdimagephone from "../thirdimagephone.jpg"
import thirdsectionstrangerthingsimage from "../thirdsectionstrangerthingsimage.png"
import downloadicon from "../downloadicon.gif"
import fourthsectionimage from "../fourthsectionimage.png"
import fifthsectionimage from "../fifthsectionimage.png"
import fourthsectionvideo from "../fourthsectionvideo.m4v"
import { Link, useNavigate } from "react-router-dom";

import cross from "../cross.svg"

import loading from "../loading.gif"

export default function App() {
  const navigate = useNavigate()
  const [email, setemail] = useState(" ")
  const handleEmail = (e) => {
    setemail(e.target.value)
  }
  const Getstarted = async (e) => {
    e.preventDefault();
    const resp = await fetch('http://localhost:5000/api/CreateUser', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: "onlyemail" })

    })
    const json = await resp.json();

    console.log(json);
    if (json.success === "validation-not-satisfied") {
      document.getElementById("email-error-text").style.display = 'block'
      document.getElementById("email-input-section").style.border = "0.5px solid rgb(193, 17, 25)"

    }
    else if (json.success === "User-already-registered") {
      document.getElementById("email-error-text").style.display = 'block'
      document.getElementById("email-input-section").style.border = "0.5px solid rgb(193, 17, 25)"
      document.getElementById("email-error-text").innerHTML = "This email is already registered with us, You can directly signin"
      document.getElementById("email-error-text").style.left = "4px"

    }
    else if (json.success === "registered") {
      navigate("/Get_started_01", { state: { emaill: email } })
    }
  }

  function select() {
    console.log("i am selected")
    document.getElementById("btn-english-id").style.boxShadow = "0 0 1px 1px white"
  }

  function displayfirstanswer() {
    if (document.getElementById("firstanswer").style.height === "auto") {
      document.getElementById("firstanswer").style.height = "0px";
      document.getElementById("firstanswer").style.padding = "0px 15px";
    }
    else {
      document.getElementById("firstanswer").style.height = "auto";
      document.getElementById("firstanswer").style.padding = "23px 15px"
      document.getElementById("secondanswer").style.height = "0px";
      document.getElementById("secondanswer").style.padding = "0px 15px";
      document.getElementById("thirdanswer").style.height = "0px";
      document.getElementById("thirdanswer").style.padding = "0px 15px";
      document.getElementById("fourthanswer").style.height = "0px";
      document.getElementById("fourthanswer").style.padding = "0px 15px";
      document.getElementById("fifthanswer").style.height = "0px";
      document.getElementById("fifthanswer").style.padding = "0px 15px";
      document.getElementById("sixthanswer").style.height = "0px";
      document.getElementById("sixthanswer").style.padding = "0px 15px";

    }
  }


  function displaysecondanswer() {
    if (document.getElementById("secondanswer").style.height === "auto") {
      document.getElementById("secondanswer").style.height = "0px";
      document.getElementById("secondanswer").style.padding = "0px 15px";
    }
    else {
      document.getElementById("secondanswer").style.height = "auto";
      document.getElementById("secondanswer").style.padding = "23px 15px"
      document.getElementById("firstanswer").style.height = "0px";
      document.getElementById("firstanswer").style.padding = "0px 15px";
      document.getElementById("thirdanswer").style.height = "0px";
      document.getElementById("thirdanswer").style.padding = "0px 15px";
      document.getElementById("fourthanswer").style.height = "0px";
      document.getElementById("fourthanswer").style.padding = "0px 15px";
      document.getElementById("fifthanswer").style.height = "0px";
      document.getElementById("fifthanswer").style.padding = "0px 15px";
      document.getElementById("sixthanswer").style.height = "0px";
      document.getElementById("sixthanswer").style.padding = "0px 15px";
    }
  }


  function displaythirdanswer() {
    if (document.getElementById("thirdanswer").style.height === "auto") {
      document.getElementById("thirdanswer").style.height = "0px";
      document.getElementById("thirdanswer").style.padding = "0px 15px";
    }
    else {
      document.getElementById("thirdanswer").style.height = "auto";
      document.getElementById("thirdanswer").style.padding = "23px 15px"
      document.getElementById("firstanswer").style.height = "0";
      document.getElementById("firstanswer").style.padding = "0px 15px"
      document.getElementById("secondanswer").style.height = "0px";
      document.getElementById("secondanswer").style.padding = "0px 15px";
      document.getElementById("fourthanswer").style.height = "0px";
      document.getElementById("fourthanswer").style.padding = "0px 15px";
      document.getElementById("fifthanswer").style.height = "0px";
      document.getElementById("fifthanswer").style.padding = "0px 15px";
      document.getElementById("sixthanswer").style.height = "0px";
      document.getElementById("sixthanswer").style.padding = "0px 15px";

    }
  }

  function displayfourthanswer() {
    if (document.getElementById("fourthanswer").style.height === "auto") {
      document.getElementById("fourthanswer").style.height = "0px";
      document.getElementById("fourthanswer").style.padding = "0px 15px";
    }
    else {
      document.getElementById("fourthanswer").style.height = "auto";
      document.getElementById("fourthanswer").style.padding = "23px 15px"
      document.getElementById("firstanswer").style.height = "0";
      document.getElementById("firstanswer").style.padding = "0px 15px"
      document.getElementById("secondanswer").style.height = "0px";
      document.getElementById("secondanswer").style.padding = "0px 15px";
      document.getElementById("thirdanswer").style.height = "0px";
      document.getElementById("thirdanswer").style.padding = "0px 15px";
      document.getElementById("fifthanswer").style.height = "0px";
      document.getElementById("fifthanswer").style.padding = "0px 15px";
      document.getElementById("sixthanswer").style.height = "0px";
      document.getElementById("sixthanswer").style.padding = "0px 15px";
    }
  }

  function displayfifthanswer() {
    if (document.getElementById("fifthanswer").style.height === "auto") {
      document.getElementById("fifthanswer").style.height = "0px";
      document.getElementById("fifthanswer").style.padding = "0px 15px";
    }
    else {
      document.getElementById("fifthanswer").style.height = "auto";
      document.getElementById("fifthanswer").style.padding = "23px 15px"
      document.getElementById("firstanswer").style.height = "0";
      document.getElementById("firstanswer").style.padding = "0px 15px"
      document.getElementById("secondanswer").style.height = "0px";
      document.getElementById("secondanswer").style.padding = "0px 15px";
      document.getElementById("thirdanswer").style.height = "0px";
      document.getElementById("thirdanswer").style.padding = "0px 15px";
      document.getElementById("fourthanswer").style.height = "0px";
      document.getElementById("fourthanswer").style.padding = "0px 15px";
      document.getElementById("sixthanswer").style.height = "0px";
      document.getElementById("sixthanswer").style.padding = "0px 15px";
    }
  }

  function displaysixthanswer() {
    if (document.getElementById("sixthanswer").style.height === "auto") {
      document.getElementById("sixthanswer").style.height = "0px";
      document.getElementById("sixthanswer").style.padding = "0px 15px";
    }
    else {
      document.getElementById("sixthanswer").style.height = "auto";
      document.getElementById("sixthanswer").style.padding = "23px 15px"
      document.getElementById("firstanswer").style.height = "0";
      document.getElementById("firstanswer").style.padding = "0px 15px"
      document.getElementById("secondanswer").style.height = "0px";
      document.getElementById("secondanswer").style.padding = "0px 15px";
      document.getElementById("thirdanswer").style.height = "0px";
      document.getElementById("thirdanswer").style.padding = "0px 15px";
      document.getElementById("fourthanswer").style.height = "0px";
      document.getElementById("fourthanswer").style.padding = "0px 15px";
      document.getElementById("fifthanswer").style.height = "0px";
      document.getElementById("fifthanswer").style.padding = "0px 15px";
    }


  }
  return (
    <div className='react'>
      <div className="main">
        <header className="header">
          <span className="logo"
          ><img src={logo} alt="" className="netflixlogo"
            /></span>
          <span className="buttons">
            <button onClick={select} className="btn-english" id="btn-english-id">
              <img
                className="languagelogo"
                src={languagelogo.svg}
                alt=""
              /><select onSelect={select} name="language" id="languageopt">
                <option value="English" className="selectoptions" id="word-english">
                  English
                </option>
                <option value="hindi" className="selectoptions">hindi</option>
              </select>
            </button>
            <Link to="/Signin">
              <button className="btn-signin" >

                <div className="signintext">Sign in</div>
              </button></Link>
          </span>
        </header>
        <div className="box"></div>
      </div>
      <section className="middle">
        <h1 id="middle-heading">
          Enjoy big movies, hit series and more from ₹149.
        </h1>
        <span id="join-today" className="join-today-class"
        >Join today. Cancel anytime.</span
        >
        <span id="membership-section" className="membership-section-class">
          <span className="membership-section-content"
          >Ready to watch? Enter your email to create or restart your
            membership.</span
          >
          <span id="email-input">
            <form action="" id="email-form">
              <div className="email-address-get-started">
                <input
                  type="email"
                  name="email"
                  id="email-input-section"
                  placeholder="Email address"
                  value={email}
                  onChange={handleEmail}
                />
                <span id="email-error-text"><img src={cross} alt="" />
                  Please enter a valid email address or phone number.</span>
              </div>
              
                <button id="get-started-btn">
                  <span id="get-started-font" onClick={Getstarted} >Get started</span>

                  <img
                    src={getstartedarrow}
                    alt=""
                    id="get-started-arrow"
                  />
                </button>
              <span className="loading" loading={false}><img src="loading" alt="" /></span>
            </form>
          </span>
        </span>
      </section>
      <div className="second-section section">
        <span className="second-section-text section-1">
          <h1 className="second-section-text-heading">Enjoy on your TV</h1>
          <div className="second-section-text-smalltext">
            Watch on smart TVs, PlayStation, Xbox, Chromecast,<br />
            Apple TV, Blu-ray players and more.
          </div>
        </span>
        <span className="second-section-video section-2">
          <video
            className="video-1"
            src={secondsectionvideo}
            muted
            autoPlay
            playsInline
            loop
          ></video>
        </span>
      </div>

      <div className="third-section section">
        <span className="third-section-image-section">
          <img
            src={thirdimagephone}
            alt=""
            className="third-section-phone-image"
          />
          <span className="third-section-image-box">
            <img
              src={thirdsectionstrangerthingsimage}
              alt=""
              className="third-section-stranger-things"
            />
            <span className="third-section-image-box-text">
              <span className="stranger-things-text">Stranger things</span>
              <span className="downloading-text">Downloading.....</span>
            </span>
            <span className="download-icon-section">
              <img src={downloadicon} alt="" className="download-icon" />
            </span>
          </span>
        </span>
        <span className="third-section-text-section">
          <span className="third-section-text-heading"
          ><h1>
              Download your shows to <br />
              watch offline
            </h1></span
          >
          <span className="third-section-text-smalltext"
          >Save your favourites easily and always have <br />
            something to watch.</span
          >
        </span>
      </div>
      <div className="fourth-section">
        <span className="fourth-section-text-section">
          <h1>Watch everywhere</h1>
          <span className="fourth-section-text-smalltext"
          >Stream unlimited movies and TV shows on your <br />
            phone, tablet, laptop, and TV.</span
          >
        </span>
        <span className="fourth-section-image-section">
          <video src={fourthsectionvideo}></video>
          <img src={fourthsectionimage} alt="" />
        </span>
      </div>
      <div className="fifth-section">
        <span className="fifth-section-image-section">
          <img src={fifthsectionimage} alt="" />
        </span>
        <span className="fifth-section-text-section">
          <h1>Create profiles for kids</h1>
          <span
          >Send children on adventures with their favourite <br />
            characters in a space made just for them—free with <br />
            your membership.</span
          >
        </span>
      </div>
      <div className="sixth-section">
        <div className="sixth-section-heading">Frequently Asked Questions</div>
        <div className="sixth-section-question-section">
          <span className="sixth-section-question-boxes" onClick={displayfirstanswer} id="firstquestion"
          ><span className="question-lefttext">What is Netflix?</span
          ><span className="question-righttext">+</span></span
          >
          <span className="answer-box" id="firstanswer">
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, <br />documentaries and more –
            on thousands of internet-connected devices. <br />
            <br />

            You can watch as much as you want, whenever you want, without a single
            ad – all for one low monthly <br />
            price. There's always something new to discover, and new TV shows and
            movies are added every week!
          </span>
          <span className="sixth-section-question-boxes" onClick={displaysecondanswer} id="secondquestion"
          ><span className="question-lefttext">How much does Netflix cost?</span
          ><span className="question-righttext">+</span></span
          >
          <span className="answer-box" id="secondanswer">
            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
            streaming device, all for one fixed monthly <br />
            fee. Plans range from ₹649 to ₹149 a month. No extra costs, no
            contracts.
          </span>
          <span className="sixth-section-question-boxes" onClick={displaythirdanswer} id="thirdquestion"
          ><span className="question-lefttext">Where can i watch?</span
          ><span className="question-righttext">+</span></span
          ><span className="answer-box" id="thirdanswer">
            Watch anywhere, anytime. Sign in with your Netflix account to watch
            instantly on the web at netflix.com <br />
            from your personal computer or on any internet-connected device that
            offers the Netflix app, including <br />
            smart TVs, smartphones, tablets, streaming media players and game
            consoles. <br />
            <br />
            You can also download your favourite shows with the iOS, Android, or
            Windows 10 app. Use downloads to watch while you're on the go and
            without an internet connection. Take Netflix with you anywhere.
          </span>
          <span className="sixth-section-question-boxes" onClick={displayfourthanswer} id="fourthquestion"
          ><span className="question-lefttext">How do i cancel?</span
          ><span className="question-righttext">+</span></span
          >
          <span className="answer-box" id="fourthanswer">
            Netflix is flexible. There are no annoying contracts and no
            commitments. You can easily cancel your <br />account online in two
            clicks. There are no cancellation fees – start or stop your account
            anytime.
          </span>
          <span className="sixth-section-question-boxes" onClick={displayfifthanswer} id="fifthquestion"
          ><span className="question-lefttext">What can i watch on Netflix?</span
          ><span className="question-righttext">+</span></span
          >
          <span className="answer-box" id="fifthanswer">
            Netflix has an extensive library of feature films, documentaries, TV
            shows, anime, award-winning Netflix <br />
            originals, and more. Watch as much as you want, anytime you want.
          </span>
          <span className="sixth-section-question-boxes" onClick={displaysixthanswer} id="sixthquestion"
          ><span className="question-lefttext">Is netflix good for Kids?</span
          ><span className="question-righttext">+</span></span
          >
          <span className="answer-box" id="sixthanswer">
            The Netflix Kids experience is included in your membership to give
            parents control while kids enjoy <br />family-friendly TV shows and
            films in their own space. <br />
            <br />

            Kids profiles come with PIN-protected parental controls that let you
            restrict the maturity rating of content kids can watch and block
            specific titles you don’t want kids to see.
          </span>
        </div>

        <span id="membership-section-foot" className="membership-section-class">
          <span className="membership-section-content-foot"
          >Ready to watch? Enter your email to create or restart your
            membership.</span
          >
          <span className="email-input-bottom">
            <form action="" className='email-form-bottom'>
              <input
                type="email"
                name=""
                id="email-input-section"
                placeholder="Email address"
              />
              <button id="get-started-btn">
                <span id="get-started-font">Get started</span>
                <img
                  src={getstartedarrow}
                  alt=""
                  id="get-started-arrow"
                />
              </button>
            </form>
          </span>
        </span>
      </div>
      <div className="seventh-section">
        <div className="seventh-section-items">
          <div className="seventh-section-contact">
            Questions? Call 000-800-919-1694
          </div>
          <div className="grid-container">
            <div className="grid-item">FAQ</div>
            <div className="grid-item">Help Centre</div>
            <div className="grid-item">Account</div>
            <div className="grid-item">Media Centre</div>
            <div className="grid-item">Investor Relations</div>
            <div className="grid-item">Jobs</div>
            <div className="grid-item">Ways to Watch</div>
            <div className="grid-item">Terms of USe</div>
            <div className="grid-item">Privacy</div>
            <div className="grid-item">Cookie Preference</div>
            <div className="grid-item">Corporate Information</div>
            <div className="grid-item">Contact Us</div>
            <div className="grid-item">Speed text</div>
            <div className="grid-item">Legal Notices</div>
            <div className="grid-item">Only on Netflix</div>
          </div>
          <div className="english-button-foot">
            <button
              onClick={select}
              className="btn-english-foot"
              id="btn-english-id"
            >
              <img
                className="languagelogo"
                src={languagelogo}
                alt=""
              /><select onSelect={select} name="language" id="languageopt">
                <option value="English" className="selectoptions" id="word-english">
                  English
                </option>
                <option value="hindi" className="selectoptions">hindi</option>
              </select>
            </button>
          </div>
          <div className="netflix-india-badge">Netflix India</div>
        </div>
      </div>
    </div>
  )
}