import { useState } from "react";

import Home from "./components/Page/Home/Home";
import Header from "./components/Layout/header/Header";
import Footer from "./components/Layout/footer/Footer";
import Login from "./components/Page/Auth/Login";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";
import Register from "./components/Page/Auth/Register";
import Commodity from "./components/Page/Commodity/Commodity";
import HeaderLoggedIn from "./components/Layout/header/LoggedOnHeader/HeaderLoggedIn";
import User from "./components/Page/User/User";
import Provider from "./components/Page/Provider/Provider";
function App() {
  return (
    <Container>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Header />
              <Home />
              <Footer />
            </>
          }
        ></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/product/:id"
          element={
            <>
              {" "}
              <HeaderLoggedIn />
              <Commodity />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/user"
          element={
            <>
              {" "}
              <HeaderLoggedIn />
              <User />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/provider"
          element={
            <>
              {" "}
              <HeaderLoggedIn />
              <Provider />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </Container>
  );
}

export default App;
