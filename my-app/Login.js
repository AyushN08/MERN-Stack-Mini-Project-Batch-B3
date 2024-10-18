import React, { useState } from "react";
import { FaEnvelope, FaLock, FaUserMd, FaUser } from "react-icons/fa";
import './Login.css'; 

const Login = () => {
  const [userType, setUserType] = useState("patient"); 

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <section className="flex-grow-1" style={{ backgroundColor: "#f0f7f0", paddingBottom: "50px" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card shadow" style={{ borderRadius: "1rem" }}>
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
                        <h5 className="fw-bold mb-3 pb-3" style={{ letterSpacing: "1px", fontFamily: "Montserrat, sans-serif", fontSize: "2rem" }}>
                          Sign into your account
                        </h5>

                        <div className="mb-4">
                          <p className="text-secondary">Login as:</p>
                          <div>
                            <label>
                              <input
                                type="radio"
                                value="doctor"
                                checked={userType === "doctor"}
                                onChange={handleUserTypeChange}
                                style={{ marginRight: "5px" }}
                              />
                              <FaUserMd /> Doctor
                            </label>
                            <label style={{ marginLeft: "20px" }}>
                              <input
                                type="radio"
                                value="patient"
                                checked={userType === "patient"}
                                onChange={handleUserTypeChange}
                                style={{ marginRight: "5px" }}
                              />
                              <FaUser /> Patient
                            </label>
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <div className="input-group">
                            <span className="input-group-text">
                              <FaEnvelope />
                            </span>
                            <input
                              type="email"
                              id="form2Example17"
                              className="form-control form-control-lg"
                              placeholder="Email address"
                              required
                            />
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <div className="input-group">
                            <span className="input-group-text">
                              <FaLock />
                            </span>
                            <input
                              type="password"
                              id="form2Example27"
                              className="form-control form-control-lg"
                              placeholder="Password"
                              required
                            />
                          </div>
                        </div>

                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="submit" style={{ fontFamily: "Montserrat, sans-serif", letterSpacing: "1px" }}>
                            Login
                          </button>
                        </div>

                        <a className="small text-muted" href="#!">Forgot password?</a>
                        <p className="mb-5 pb-lg-2" style={{ color: "#4caf50" }}>
                          Don't have an account? <a href="/register" style={{ color: "#4caf50" }}>Register here</a>
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
      </section>

    </div>
  );
};

export default Login;
