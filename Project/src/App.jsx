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
import Quiz from "./pages/Quiz";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const auth = localStorage.getItem("isAuthenticated");
    if (auth === "true") {
      setIsAuthenticated(true);
    } else {
      // Always start with signup page
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <Router>
      {!isAuthenticated ? (
        <main style={{ padding: "20px", maxWidth: "500px", margin: "60px auto", backgroundColor: "#fff", boxShadow: "0 0 10px rgba(0,0,0,0.1)", borderRadius: "8px", minHeight: "60vh" }}>
          <Routes>
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="*" element={<Navigate to="/signup" />} />
          </Routes>
        </main>
      ) : (
        <>
          <Header />
          <Navbar setIsAuthenticated={setIsAuthenticated} />
          <main style={{ padding: "20px 40px", maxWidth: "1000px", margin: "0 auto" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/monuments" element={<Monuments />} />
              <Route path="/festivals" element={<Festivals />} />
              <Route path="/art-craft" element={<ArtCraft />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/user-dashboard" element={<UserDashboard />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
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