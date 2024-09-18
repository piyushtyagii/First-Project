import React from 'react'
import Home from "./components/Home"
import { HashRouter, Routes, Route } from "react-router-dom";
import Signin from './components/Signin';
import Get_started_1 from './components/Get_started_01';
import Registration from './components/Registration';
import Confirmation from './components/Confirmation';
import Updatepassword from './components/Updatepassword';
import Userinterface from './components/Userinterface';


export default function App() {
  return (
    <div>
      <HashRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route exact path="/Signin" element={<Signin></Signin>}></Route>
        <Route exact path="/Get_started_01" element={<Get_started_1></Get_started_1>}></Route>
        
        <Route exact path="/Registration" element={<Registration></Registration>}></Route>
        <Route exact path="/confirmation" element={<Confirmation></Confirmation>}></Route>
        
        <Route exact path="/User-interface" element={<Userinterface></Userinterface>}></Route>
        <Route exact path="/updatepassword" element={<Updatepassword></Updatepassword>}></Route>


        
      </Routes>
    </HashRouter>
    </div>
  )
}
