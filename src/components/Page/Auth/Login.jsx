import React from "react";
import logo from "../../../assets/img/logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Common/style.css";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-sm-6 col-md-4">
          <div className="card">
            <div className="card-header text-white text-center">
              <Link to="/">
                <img className="logo-sign" src={logo} alt="Baloot" />
              </Link>
              <h4>Login</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label for="username">Username:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="password">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    required
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">
                    Login
                  </button>
                  <p className="mt-3 mb-0">
                    Don't have an account? <Link to="/register">Sign Up</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
