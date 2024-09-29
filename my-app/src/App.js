import "./App.css";
import Navbar from "./components/Navbar";
import Doctor from "./components/Doctor";
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MyVaccines from "./components/myVaccines";
import Login from "./components/Login"
import Register from "./components/Register";

function App() {
  
  return (
    <>
      <Router>
        <Navbar searchBar={false} />
        
        <Routes>
          <Route exact path="/Doctor" element={<Doctor />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/signin" element={<Login />} />
          <Route exact path="//myVaccines" element={<MyVaccines/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />


        </Routes>


        <Footer />
      </Router>
    </>
  );
}

export default App