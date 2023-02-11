import Signup from "./Signup";
import './App.css'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Problem from "./Problem";
import Ticket from "./Ticket";
import Status from "./Status";
import Service from "./Service";
import Customize from "./Customize";

function App() {

  return (
    <div className="App">
      <div id="nav"></div>
    <Router>
      <Routes>
        <Route path ="/" element={<Signup/>}/>
        <Route path ="problem" element={<Problem />}/>
        <Route path ="ticket" element={<Ticket/>}/>
        <Route path ="service" element={<Service/>}/>
        <Route path ="customize" element={<Customize/>}/>
      </Routes>
    </Router>
    </div>
  );

  }
export default App;
