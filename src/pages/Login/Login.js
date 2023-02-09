import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../assets/images/logo-global-life.svg';
import { AuthContext } from '../../context/AuthContext';
import './login.scss';


const Login = () => {

     const [credentials, setCredentials] = useState({
         email: undefined,
         password: undefined,
     });

     const { loading, error, dispatch } = useContext(AuthContext);

     const navigate = useNavigate();

     const handleChange = (e) => {
         setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
     };

     const handleSubmit = async (e) => {
        
         e.preventDefault();

         dispatch({ type: "LOGIN_START" });

         try {
             const res = await axios.post("https://global-life-api.onrender.com/api/auth/login", credentials);
             dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });

             if(res?.data?.details?.email){
                navigate("/");
             }
             
         } catch (err) {
             dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
         }
     };

  return (
      <div>
          <div className="login-wrapper d-flex align-items-center justify-content-center">
              <div className="login-section">
                  <div className="container">
                      <div className="row">
                          <div className="bg-white p-36 login-form login-form-wrapper">
                              <div className="text-center">
                                  <div className="field-wrapper">
                                      <img src={Logo} alt="logo" className="img-fluid text-center" />
                                      <h4 className="mt-4 text-clr-dark-1 fs-24 lh-34">The Private Members Network for International Families</h4>

                                      {loading && <Spinner animation="grow" variant="warning" />}

                                      {!loading && (
                                          <form onSubmit={handleSubmit}>
                                              <div className="form-field-area ff-playfair">
                                                  <div className="animate-label text-uppercase fs-12 fw-semiBold ff-inter text-start mb-4">
                                                      <input type="email" id="email" className="fw-semiBold" required onChange={handleChange} />
                                                      <label htmlFor="email"> Email </label>
                                                      <line></line>
                                                  </div>

                                                  <div id="show_hide_password" className="input-box position-relative animate-label text-uppercase fs-12 fw-semiBold ff-inter text-start pt-3">
                                                      <input type="password" id="password" className="text-uppercase fs-12 fw-semiBold" name="password" required onChange={handleChange} />
                                                      <label htmlFor="password"> Password </label>
                                                      <line></line>

                                                      <div className="pass-show-hide position-absolute end-0 me-3">
                                                          <Link to="#">
                                                              <i toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password" aria-hidden="true"></i>
                                                          </Link>
                                                      </div>
                                                  </div>

                                                  <div className="accept-box d-flex justify-content-between flex-wrap mt-4">
                                                      <div className="form-check ff-inter d-flex align-items-center gap-2">
                                                          <input className="form-check-input " type="checkbox" value="" id="rememberMe" />
                                                          <label className="form-check-label fs-14 lh-22 text-clr-dark-4 " htmlFor="rememberMe">
                                                              Remember Me
                                                          </label>
                                                      </div>
                                                      <a href="reset-password.html" className="ff-inter fs-14 lh-22 text-clr-dark-4 hover-color">
                                                          Forgot Password?
                                                      </a>
                                                  </div>
                                              </div>

                                              <button
                                                  type="submit"
                                                  className="fill-color-btn signIn-btn text-center w-100 bg-green text-white text-uppercase ff-inter fs-12 fw-semiBold ltr-spacing-07"
                                                  disabled={loading}
                                              >
                                                  Login
                                              </button>

                                              {error && <span className="text-danger mt-3 d-inline-block">{error.message}</span>}
                                          </form>
                                      )}

                                      <p className="ff-inter text-clr-dark-3 fs-14 lh-22 mt-4">
                                          Don't have an account?{" "}
                                          <Link to="/signup" className="signup-btn fw-semiBold">
                                              Sign up
                                          </Link>
                                      </p>

                                      <a href="mailto:applications@globallife.co" className="text-clr-egyptian-green ff-inter text-decoration-none hover-color fs-14 lh-22 fw-medium">
                                          applications@globallife.co
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Login