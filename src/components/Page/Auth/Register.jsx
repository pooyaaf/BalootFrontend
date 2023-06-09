import React, { useState } from "react";
import logo from "../../../assets/img/logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Common/style.css";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [address, setAddress] = useState("");

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handleBirthdateChange(event) {
    setBirthdate(event.target.value);
  }
  function handleAddressChange(event) {
    setAddress(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(
      `http://127.0.0.1:8080/register?username=${username}&password=${password}&email=${email}&birthdate=${birthdate}&address=${address}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
        mode: "cors",
        redirect: "follow",
      }
    ).then((response) => {
      if (response.ok) {
        alert("Register Successful!");
        localStorage.setItem("username", username);
        response.json().then(result => {
          localStorage.setItem("token", result.login)}
        );
        navigate("/");
      } else {
        alert("Wrong username or password!");
        navigate("/register");
      }
      return response.json();
    });
    console.log("A name was submitted: " + response.body);
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-header text-white">
              <Link to="/">
                <img className="logo-sign" src={logo} alt="Baloot" />
              </Link>
              <h4>Sign Up</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label for="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="Enter username"
                  />
                </div>
                <div className="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter password"
                  />
                </div>
                <div className="form-group">
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label for="birthdate">Birthdate</label>
                  <input
                    type="date"
                    className="form-control"
                    id="birthdate"
                    value={birthdate}
                    onChange={handleBirthdateChange}
                    placeholder="Enter birthdate"
                  />
                </div>
                <div className="form-group">
                  <label for="address">Address</label>
                  <textarea
                    className="form-control"
                    id="address"
                    value={address}
                    onChange={handleAddressChange}
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
                <Link to="/login">Log In</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
