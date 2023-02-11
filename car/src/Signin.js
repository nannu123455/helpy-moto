import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function Signin() {
  const[values, setValues] = useState({
    email:"",
    password:""
  })
  return (
    <div>
        <form>
        <div class="form-group">
    <label for="exampleInputPassword1">Email</label>
    <input type="email" onChange={(e)=>setValues({...values, email:e.target.value})}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="Password"onChange={(e)=>setValues({...values, password:e.target.value})}/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>

        </form>
    </div>
  )
}

export default Signin