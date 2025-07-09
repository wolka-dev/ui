import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Me from "./components/Me";
import Projects from "./components/Projects";
import logo from "./assets/logo.svg";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/me" element={<Me />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
