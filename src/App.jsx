import { useState } from "react";

import Home from "./components/Page/Home/Home";
import Header from "./components/Layout/header/Header";
import Footer from "./components/Layout/footer/Footer";
import Login from "./components/Page/Auth/Login";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";
import Register from "./components/Page/Auth/Register";

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
      </Routes>
    </Container>
  );
}

export default App;
