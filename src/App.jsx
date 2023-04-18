import { useState } from "react";

import Home from "./components/Page/Home/Home";
import Header from "./components/Layout/header/Header";
import Footer from "./components/Layout/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
