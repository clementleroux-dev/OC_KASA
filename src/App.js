import React from "react";
import Navbar from "./components/Navbar/Navbar.component";
import Footer from "./components/Footer/Footer.component";
import Home from "./pages/Home";
import Accommodation from "./pages/Accommodation";
import ErrorLink from "./pages/Error";
import About from "./pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accommodation/:id" element={<Accommodation />} />
        <Route path="/error" element={<ErrorLink />} />
        <Route path="/*" element={<ErrorLink />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
