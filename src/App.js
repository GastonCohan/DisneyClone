import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Detail from "./components/Detail";

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    const handleNavigation = () => {
      localStorage.setItem("lastPath", location.pathname);
    };

    window.addEventListener("beforeunload", handleNavigation);

    return () => {
      window.removeEventListener("beforeunload", handleNavigation);
    };
  }, [location.pathname]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router basename="/DisneyClone">
      <AppContent />
    </Router>
  );
}

export default App;
