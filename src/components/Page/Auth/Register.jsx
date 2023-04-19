import React from "react";
import logo from "../../../assets/img/logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Common/style.css";
import "./Login.css";

const Register = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-header text-white">
              <a href="home.html">
                {" "}
                <img className="logo-sign" src={logo} alt="Baloot" />
              </a>
              <h4>Sign Up</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label for="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                  />
                </div>
                <div className="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                  />
                </div>
                <div className="form-group">
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label for="birthdate">Birthdate</label>
                  <input
                    type="date"
                    className="form-control"
                    id="birthdate"
                    placeholder="Enter birthdate"
                  />
                </div>
                <div className="form-group">
                  <label for="address">Address</label>
                  <textarea
                    className="form-control"
                    id="address"
                    rows="3"
                    placeholder="Enter address"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Sign Up
                </button>
              </form>
            </div>
            <div className="card-footer">
              <div className="text-center">
                <span>Already have an account? </span>
                <a href="./login.html">Log In</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
