
import './App.css'

import Status from './Status'
function Ticket() {
  return (
    <div> 
      <Status />   
    <form>
    <div>
      <label for="exampleInputEmail1">Vehicle Number</label>
    <input type="name" class="form-control" placeholder="Enter name"/>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Vehicle Specification</label>
    <input type="email" class="form-control" />
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Vehicle type</label>
    <input type="phone no" class="form-control" />
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Pickup Required</label>
    <input type="Password" class="form-control" />
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Pickup Location</label>
    <input type="Password" class="form-control" />
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Delivery Location</label>
    <input type="Password" class="form-control" />
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Pickup Required</label>
    <input type="Password" class="form-control" />
  </div>
 <span>Service</span>
 <label for="exampleInputPassword1">General Service</label>
 <label for="exampleInputPassword1">Cleaning Service</label>
 <label for="exampleInputPassword1">Emergency Service</label>
 <p>Types of service</p>
 <input type="checkbox" class="form-control" />
 <label for="exampleInputPassword1">Full body service</label>
 <input type="checkbox" class="form-control" />
 <label for="exampleInputPassword1">Specified service</label>
 
  <button type="submit" class="btn btn-primary"  >Submit</button>


</form>
</div>
  )
}

export default Ticket