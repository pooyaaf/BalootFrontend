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

  const clientId = "f3cc203f5df4b2e30d5c";

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
            <div className="GithubBtn">
              <a
                href={`https://github.com/login/oauth/authorize?client_id=${clientId}&scope=user`}
                target="_blank"
                rel="noreferrer"
              >
                <button className="login-github">
                  <img
                    width={"30px"}
                    height="auto"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEc0lEQVR4nO2a22sXRxTHPz9NaQLxEi+oKHiBJDaojcZ7IxRBqqX2qfjWglJFK7QIoj6JoCje4vWhvnmB/g9i29TW1qR9SEUQikWrFWy9hdCYJpr482H2J5ufO7NnZnY3ivuBAz/Ys/M9Z3Z+OzNnFnJycnJy3lwKGenMBN4H3gXqgGlADVAdXO8GHgG3gD+AK8APwe/XlkagBbgDFB3tb+AwquNeCwrAauAy7knr7BfgI7IbtdYsBH4j+cTLrR2Yn1FOIqqAE8AA6SdfsgHgGFCZQX5G6lEvrKwSL7cOoDb1LDUsAh7EBJiFPQKaU871JVYBPZ6BJ2mPgZWpZhxiMWreHuqky62HDEZCPdA5xIma7CGW74ThFr5VwHlgqsGnFTgH9AFTgAqbYAz0At8B3wBPgRmGGJuBM0B/QtovOEn8E1gb8p8A7AT+Fdyns3+ALcCoULufCO47mmDegFrkSOb5uoh7a4CzgnvL7TQwOqK9WsG9/cA8SWKSZWUB+BXZ6ms00KW59iXQALSh1g73UFMYwFhgPGrNvxi4BhzXtFMTus9EG7AU1SFerEb+1JL6z5uosIhnVRKCNhubMUkIxjDKIp6ffcUaLcSKqH1/2kyzjGmOqbFhMWKfWQbXaOnvgm4K1PGp6WJcB6yxECqifwEmSenJSrHJYRD12A21/a5CDhy2jM1px7jRQuAW8LZrNg5UArct4tuga8j0F7Cpw+1BLX+zohfYa+HvVFP8Hlnv9gIjXAQ8qQ60JTFe0DViGgHThYG0Av8JfZOkG7go9NXOHKYOGCls/KrQLw2k2tpcTB1QbbgW5q7QLw2k2tq/qKkDpPX3V7ZOH0Ibo6kDeoSNT7CLJVEmCf0e6y6YOqBT2PhQHlI0Cf2kuQxCOg0+Re3ns2ZcoC2J8VtdI6YR8KcwkApgq9A3SbYhrz9cdxFYj3yp+T8wy0XEkTnIF0FFYJ2LyCwLgdJ+YLJjQjZMQR2b28T2jqvYDUuhO6iaXlo0AX9ZxnTTR/CYpVgRtSlqIdny2BjgCPDEIZ4jPsJzHQRL1gV8jRoRcYWXKIYBS4BTQVuucRhLYhLaIhrtRJW5T6I2QnFBPAQ+t9DcENzjmnTJLjllXMbHEQ0/A/ahnlId8S+lduwKJlVEd7ytfeiUcRmFIIEogV2Bz1zUfz/K5xluxdJG1AmPa/KXHTS1LCD6aKwPmBj4fKEJpNVD97ymzTjrR75MFqObEbaHfHajnnj4+g4Pzc0azThr8dDUUgn8HiF2lcHbzQXAgSCITfjtEz6I0IuzDlIs0NYS/V2QzRvehvkRWia7TwYfTTWj1v5h4U4SmG8jaEKefA/qNDgTVqCKDOEAuoCvGPwxw1v4DUdpB3QDyz10nFiGGnJRM8NN1MFFH35vY0kH3APe89DwYgbxH0qm2QEdyMv3qVGJOqvTfUKTRgcMAAfJ9jgulnnAT6TfAe2ku+X2ooBaf18i+Q74kYQ+ecmK2ai/RoNHGw3AIbItt6WCaz0gJycnJycnRZ4DV1/ELExY0fYAAAAASUVORK5CYII="
                    alt=""
                  />
                  Login via Github
                </button>
              </a>
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
