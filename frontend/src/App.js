import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom"
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}/>
     </Routes>
    </div>
  );
}

export default App;
