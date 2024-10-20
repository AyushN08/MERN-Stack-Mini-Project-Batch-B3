import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from './components/Homepage';
import Doctor from "./components/Doctor";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; 
import MyVaccines from "./components/myVaccines"; // Keeping the original name
import Login from "./components/Login";
import Register from "./components/Register";
import Reviews from "./components/Reviews";
import VaccineDashboard from "./AdminComponents/VaccineDashboard";
import DoctorDashboard from "./AdminComponents/DoctorDashboard";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  // Normalize pathname for case-insensitive comparison
  const currentPath = location.pathname.toLowerCase();

  // Define paths where you don't want the Navbar and Footer to appear
  const hideNavAndFooter = 
    ['/signin', '/register', '/vaccinedashboard', '/doctordashboard'].some(path => currentPath.startsWith(path));

  return (
    <>
      {/* Conditional rendering of Navbar */}
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
        <Route path="/vaccinedashboard" element={<VaccineDashboard />} />
        <Route path="/doctordashboard" element={<DoctorDashboard />} />
      </Routes>
      
      {/* Footer should not be visible on certain routes */}
      {!hideNavAndFooter && <Footer />}
    </>
  );
}

export default App;
