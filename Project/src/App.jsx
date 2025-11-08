import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Monuments from "./pages/Monuments";
import Festivals from "./pages/Festivals";
import ArtCraft from "./pages/ArtCraft";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(auth === "true");
  }, []);

  return (
    <Router>
      {/* Show Login/Signup only if NOT logged in */}
      {!isAuthenticated ? (
        <main
          style={{
            padding: "20px 40px",
            maxWidth: "500px",
            margin: "60px auto",
            backgroundColor: "#fff",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            borderRadius: "8px",
            minHeight: "60vh",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            color: "#333",
          }}
        >
          <Routes>
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </main>
      ) : (
        <>
          <Header />
          <Navbar setIsAuthenticated={setIsAuthenticated} />
          <main
            style={{
              padding: "20px 40px",
              maxWidth: "900px",
              margin: "20px auto",
              backgroundColor: "#fff",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              borderRadius: "8px",
              minHeight: "80vh",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              color: "#333",
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/monuments" element={<Monuments />} />
              <Route path="/festivals" element={<Festivals />} />
              <Route path="/art-craft" element={<ArtCraft />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;