import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    childName: "",
    birthDate: "",
    parentMobile: "",
    parentEmail: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "black", paddingBottom: "1200px" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src={require('./image.png')}
                    alt="register form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleSubmit}>
                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
                        Register a new account
                      </h5>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="text"
                          id="childName"
                          name="childName"
                          className="form-control form-control-lg"
                          value={formData.childName}
                          onChange={handleInputChange}
                          required
                        />
                        <label className="form-label" htmlFor="childName">Child's Name</label>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="date"
                          id="birthDate"
                          name="birthDate"
                          className="form-control form-control-lg"
                          value={formData.birthDate}
                          onChange={handleInputChange}
                          required
                        />
                        <label className="form-label" htmlFor="birthDate">Child's Birth Date</label>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="tel"
                          id="parentMobile"
                          name="parentMobile"
                          className="form-control form-control-lg"
                          value={formData.parentMobile}
                          onChange={handleInputChange}
                          required
                        />
                        <label className="form-label" htmlFor="parentMobile">Parent's Mobile Number</label>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="email"
                          id="parentEmail"
                          name="parentEmail"
                          className="form-control form-control-lg"
                          value={formData.parentEmail}
                          onChange={handleInputChange}
                          required
                        />
                        <label className="form-label" htmlFor="parentEmail">Parent's Email Address</label>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="form-control form-control-lg"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                        />
                        <label className="form-label" htmlFor="password">Password</label>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          className="form-control form-control-lg"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          required
                        />
                        <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="submit">
                          Register
                        </button>
                      </div>

                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Already have an account? <a href="/login" style={{ color: "#393f81" }}>Login here</a>
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

export default Register;
