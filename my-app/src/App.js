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
import LandingPage from "./components/LandingPage";
import DoctorLogin from "./components/DoctorLogin";
import RequestOtp from "./components/RequestOtp";
import VerifyOtp from "./components/VerifyOtp";
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  const currentPath = location.pathname.toLowerCase();

  
  const hideNavAndFooter = 
  ['/','/signin', '/register', '/vaccinedashboard', '/doctordashboard','/doctor','/requestotp','/verifyotp'].includes(currentPath);


  return (
    <>
     
      {!hideNavAndFooter && <Navbar searchBar={false} />}
      
      <Routes>
      <Route path="/" element={<LandingPage/>} />
        <Route path="/signin" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/myVaccines" element={<MyVaccines />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/vaccinedashboard" element={<VaccineDashboard />} />
        <Route path="/doctordashboard" element={<DoctorDashboard />} />
        <Route path="/DoctorLogin" element={<DoctorLogin/>}/>
        <Route path="/RequestOtp" element={<RequestOtp/>}/>
        <Route path="/VerifyOtp" element={<VerifyOtp/>}/>
      
   
   

      </Routes>
      
      {/* Footer should not be visible on certain routes */}
      {!hideNavAndFooter && <Footer />}
    </>
  );
}

export default App;
