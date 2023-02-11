import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from "./firebase";
import{Link} from 'react-router-dom';

function Signup() {
  const[values, setValues] = useState({
    name:null,
    email:null,
    phoneNo:null,
    password:null,
  })

  const[errorMsg, seterrorMsg] =useState("");
  function handleSubmit(e){
    if(!values.name ||!values.email|| !values.phoneNo || !values.password){
      seterrorMsg("fill the fields");
      e.prevenDefault();
      return;
   }
  }

  createUserWithEmailAndPassword(auth, values.email,values.password)
  .then((res)=>{
    console.log(res);
  })
  .catch((err)=>{

    console.log("err",err);
  }
  )
  return (
    <div>
     
       <h1>Welcome to Helpy Moto</h1>
      
      <h3>{errorMsg}</h3>
      <form>
  <div class="form">
  
    <label for="exampleInputEmail1">Name</label>
    <input type="name" class="form-control" placeholder="Enter name"onChange={(e)=>setValues({...values,name:e.target.value})}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Email</label>
    <input type="email" class="form-control" onChange={(e)=>setValues({...values, email:e.target.value})}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Phone no.</label>
    <input type="phone no" class="form-control" onChange={(e)=>setValues({...values, phoneNo:e.target.value})}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="Password" class="form-control" onChange={(e)=>setValues({...values, password:e.target.value})}/>
  </div>
<Link to="/problem" >
  <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
</Link>
</form>
<div className="rectangle">

</div>
    </div>
  )
}

export default Signup