import { useState } from "react";

import Home from "./components/Page/Home/Home";
import Header from "./components/Layout/header/Header";
import Footer from "./components/Layout/footer/Footer";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
