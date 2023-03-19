import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./main.css";
import Home from "./pages/Home";
import CV from "./pages/CV";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/CV" element={<CV />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
