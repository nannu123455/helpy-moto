import React from 'react'
import './App.css';
import {Link} from 'react-router-dom'
function Problem(props) {
  return (
    <div id="div">
        <h1 >{props.name}What's Your problem?</h1>
        <img src="https://www.shutterstock.com/image-photo/hand-car-mechanic-wrench-auto-260nw-399175633.jpg" alt="t"/>
       <p>Please specify your problem </p>
       <p>By generating ticket </p>
       <Link to="/service">
       <button id="btn">Create Ticket</button>
       </Link>
    </div>
  )
}

export default Problem