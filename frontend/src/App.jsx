import { React, useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import { useCounter } from "./CounterProvider";
import Navbar from "./components/Navbar";

function App() {
  const navigate = useNavigate();
  const { value, increment, decrement } = useCounter(); //custom hook bro!

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
