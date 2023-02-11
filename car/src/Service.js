import React from 'react'
import {Link} from 'react-router-dom'
function Service() {
  return (
    <div>
        <h1>What can we help you with?</h1>
        <ol>
           <Link to="/ticket"> <li>Tyre and wheel care</li></Link>
           <a href="#"><li>Batteries</li></a> 
            <a href="#"><li>Brakes</li></a>
            <a href="#"><li>Light</li></a>
            <a href="#"><li>Clutch</li></a>
            <a href="#"><li>Tow</li></a>
           <a href="#"><li>Car Starter Issue</li></a>  
           <a href="#"><li>General Service</li></a> 
        </ol>
    </div>
  )
}

export default Service