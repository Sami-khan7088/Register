import {useState} from 'react'
import './App.css';
import Nav from './nav';
import Button from '@mui/material/Button';
import Axios from 'axios';
import React, { useRef } from "react";
function App() {
  const [itemname,setname]=useState("");
  const [itememail,setemail]=useState("");
  const [itemmobile,setmobile]=useState();
  const [itemprofession,setprofession]=useState("");
  const [itempassword,setpassword]=useState("");
  var imgData="";
  const ref = useRef();
  const reg=()=>{
    Axios.post("/register",{name:itemname,
  email:itememail,
mobile:itemmobile,
profession:itemprofession,
password:itempassword,
file:imgData
}).then((response)=>{
  console.log(response);
})
setname("");
setemail("");
setmobile("");
setpassword("");
setprofession("");
ref.current.value = "";
setTimeout(() => {
  alert("Your form submit")
}, 100);

  }
  
   const head=()=>{
      return <p className="success">Registeration Successful !!</p>
  }
  return (<>
    <Nav />
    <div className="main" >
    <div>{head}</div>
      <div className="form_div">
        <div className="sign_div">
          <h3>Register Form</h3>
          <div className="form-group">
            <label ><i className="zmdi zmdi-account"></i></label>
            <input type="text" onChange={(e)=>{
              setname(e.target.value)
            }} name="name" id="name" value={itemname} placeholder="Your Name" className="input" />
          </div>
          <div className="form-group">
            <label ><i className="zmdi zmdi-email"></i></label>
            <input type="email" 
            onChange={(e)=>{
              setemail(e.target.value)
            }}
             placeholder="Email" value={itememail} name="email" className="input" />
          </div>
          <div className="form-group">
            <label ><i className="zmdi zmdi-phone"></i></label>
            <input type="number" name="mobile" value={itemmobile} onChange={(e)=>{
              setmobile(e.target.value)
            }} placeholder="Mobile No." className="input" />
          </div><div className="form-group">
            <label><i className="zmdi zmdi-slideshow"></i></label>
            <input type="text" placeholder="Your Profession" value={itemprofession} name="profession" onChange={(e)=>{
              setprofession(e.target.value)
            }} className="input" />
          </div>
          <div className="form-group">
            <label><i className="zmdi zmdi-lock"></i></label>
            <input type="password"  onChange={(e)=>{
              setpassword(e.target.value)
            }}placeholder="Password" value={itempassword}  name="password"className="input" />
          </div>
          <div><p className="rhead">Upload Resume</p></div>
          <div className="form-group">
          <label ><i className="zmdi zmdi-file"></i></label>
            <input type="file" className="input" name="file" ref={ref} id="upload" onChange={(e)=>{
              var file=e.target.files;
              var reader= new FileReader();
              reader.readAsDataURL(file[0])
              reader.onload=(e)=>{
                 imgData=e.target.result
              }
            }}/>
          </div>

          <Button variant="contained" onClick={reg}>Register</Button>
        </div>
        <div className="image">
          <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg" alt="something" />
          <p>I am already registerd</p>
        </div>
      </div>
    </div>

  </>
  );
}

export default App;
