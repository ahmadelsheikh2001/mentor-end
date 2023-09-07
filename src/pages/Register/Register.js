import "./style.css";
import { React, useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaExclamationTriangle,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Globel/Header/Header";


const Resgister = () => {
  
  const navigate = useNavigate();
  return (
    <>
    <Header/>
    <div className="register-form parent">
      <div className="auth-form-container">
        <div className="register-head">
          <h2>Create a new account</h2>
          <p>Basic account informatin</p>
        </div>
        <form className="login-form d-flex flex-column" >
          <div className="inp-holder">
            <div className="inp-container">
              <input
                className="inp-field"
                type="text"
                placeholder="Name"
                id="name"
              />
              <FaExclamationTriangle id="error3" className="error-triangle" />
            </div>

            <div className="pass-container">
              <input
                className="inp-field pass"
                placeholder="Password"
                id="password"
              />
              <span
                id="icon-pass-2"
                className="toggle"
              >
                Show
              </span>
              <FaExclamationTriangle id="error4" className="error-triangle" />
            </div>

            <div className="inp-container">
              <input
                className="inp-field"
                type="email"
                placeholder="Email"
                id="email"
              />
              <FaExclamationTriangle id="error5" className="error-triangle" />
            </div>

            <div className="pass-container">
              <input
                className="inp-field pass"
                placeholder="Confirm password"
                id="conf-password"
              />
              <span
                id="icon-pass-3"
                className="toggle"
              >
                Show
              </span>
              <FaExclamationTriangle id="error6" className="error-triangle" />
            </div>
          </div>
          <div className="signup-social-holder">
            <button type="submit" >
              <Link to='/login'>
                <p className="btn rounded-pill my-3 reg">Sign Up</p>
              </Link>
            </button>
            <div className="signup-social d-flex">
              <p>Or sign up with </p>
              <div className="social-icons">
                <button className="soc-log-btn" >
                  <FaLinkedinIn />
                </button>
                <button className="soc-log-btn" >
                  <FaGoogle />
                </button>
                <button className="soc-log-btn">
                  <FaFacebookF />
                </button>
              </div>
            </div>
          </div>
        </form>

        <div className="switch-register">
          <p>I accept privacy terms and conditions </p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="accept"
            ></input>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default Resgister;
