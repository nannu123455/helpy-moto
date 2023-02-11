import React from 'react'
import './App.css';
import {Link} from 'react-router-dom'
function Status() {
  return (
    <div>
        <div id="color">
      <p id="p">Status</p>
     <Link to="/customize"> <div id="status">
      </div>
      </Link>
      </div>
    </div>
  )
}

export default Status