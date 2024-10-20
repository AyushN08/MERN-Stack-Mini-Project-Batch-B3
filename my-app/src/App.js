import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from './components/Homepage';
import Doctor from "./components/Doctor";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyVaccines from "./components/myVaccines";
import Login from "./components/Login";
import Register from "./components/Register";
import { useLocation } from "react-router-dom"; // Import useLocation here
import Reviews from "./components/Reviews";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  // Define paths where you don't want the Navbar and Footer to appear
  const hideNavAndFooter = location.pathname === '/signin' || location.pathname === '/register';

  return (
    <>
      {!hideNavAndFooter && <Navbar searchBar={false} />}
      
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/myVaccines" element={<MyVaccines />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* New Route for Dashboard */}
      </Routes>
      
      {!hideNavAndFooter && <Footer />}
    </>
  );
}

export default App;
