import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from './components/Homepage';
import Doctor from "./components/Doctor";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactUs from "./components/ContactUs"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyVaccines from "./components/MyVaccines"; // Ensure the casing is correct
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Navbar searchBar={false} />
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/myVaccines" element={<MyVaccines />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
