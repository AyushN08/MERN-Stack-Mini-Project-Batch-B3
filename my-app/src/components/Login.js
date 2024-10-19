import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS file for toast notifications

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const loginData = {
      email,
      password
    };

    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        const errorMessage = await response.text(); 
        console.error("Login Error:", errorMessage);
        toast.error('Login failed: ' + errorMessage); // Use toast for error
        return; 
      }

      const result = await response.json();

      if (result.success) {
        console.log("Login Success:", result);
        localStorage.setItem('token', result.jwtToken);
        localStorage.setItem('loggedInUserEmail', email); // Fixed typo from setIteam to setItem
        toast.success('Login Successful'); // Use toast for success
        navigate('/');
      } else {
        toast.error(result.message); // Use toast for error
      }
    } catch (err) {
      console.error("Login Error:", err);
      toast.error('An error occurred during login'); // Use toast for error
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "black", paddingBottom: "900px" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src={require('./image.png')}
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleSubmit}>
                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
                        Sign into your account
                      </h5>

                      {/* Email Input */}
                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <label className="form-label" htmlFor="form2Example17">Email address</label>
                      </div>

                      {/* Password Input */}
                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <label className="form-label" htmlFor="form2Example27">Password</label>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="submit" disabled={loading}>
                          {loading ? 'Logging in...' : 'Login'}
                        </button>
                      </div>

                      <a className="small text-muted" href="#!">Forgot password?</a>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account? <a href="/register" style={{ color: "#393f81" }}>Register here</a>
                      </p>

                      <a href="#!" className="small text-muted">Terms of use.</a>
                      <a href="#!" className="small text-muted">Privacy policy</a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer /> {/* Include the ToastContainer to render toasts */}
    </section>
  );
};

export default Login;
