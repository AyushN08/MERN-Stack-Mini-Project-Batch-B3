import React, { useState } from "react";

const Login = () => {
  const [userType, setUserType] = useState("patient"); // Default user type

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "black", paddingBottom: "900px" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                 
                <img src={require('./image.png')} alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />

                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
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
                            Doctor
                          </label>
                          <label style={{ marginLeft: "20px" }}>
                            <input
                              type="radio"
                              value="patient"
                              checked={userType === "patient"}
                              onChange={handleUserTypeChange}
                              style={{ marginRight: "5px" }}
                            />
                            Patient
                          </label>
                        </div>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="email" id="form2Example17" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form2Example17">Email address</label>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="password" id="form2Example27" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form2Example27">Password</label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="button">Login</button>
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
    </section>
  );
};

export default Login;
