import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from './components/Homepage';
import Doctor from "./components/Doctor";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactUs from "./components/ContactUs"; // Import ContactUs component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyVaccines from "./components/myVaccines";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/signin" element={<Login />} />
       
        <Route path="/register" element={<Register />} />

        </Routes>
      <Navbar searchBar={false} />
      
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/doctor" element={<Doctor />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route path="/myVaccines" element={<MyVaccines />} />
        
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
