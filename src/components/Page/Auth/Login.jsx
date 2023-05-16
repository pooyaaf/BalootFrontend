import React, { useState } from "react";
import logo from "../../../assets/img/logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Common/style.css";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleLoginSuccess(username) {
    localStorage.setItem("loggedIn", true);
    localStorage.setItem("username", username);
    navigate("/");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(
      `http://127.0.0.1:8080/login?username=${username}&password=${password}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
        mode: "cors",
        redirect: "follow",
      }
    );
    if (response.ok) {
      alert("Login Successful!");
      handleLoginSuccess(username);
    } else {
      alert("Wrong username or password!");
      navigate("/login");
    }
  }

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
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="Enter username"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
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
