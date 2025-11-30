import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("userRole");

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userRole");
    localStorage.removeItem("currentUser");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginBottom: "30px",
        flexWrap: "wrap",
        fontWeight: "bold"
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/monuments">Monuments</Link>
      <Link to="/festivals">Festivals</Link>
      <Link to="/art-craft">Art & Craft</Link>
      <Link to="/explore-festivals">🎉 Festivals</Link>
      {userRole !== "admin" && <Link to="/quiz">🎯 Quiz</Link>}
      <Link to="/contact">Contact</Link>
      {userRole === "admin" ? (
        <Link to="/admin-dashboard" style={{ color: "#dc3545", fontWeight: "bold" }}>🔐 Admin Panel</Link>
      ) : (
        <Link to="/user-dashboard">👤 My Profile</Link>
      )}
      <button 
        onClick={handleLogout} 
        style={{ 
          backgroundColor: "#646cff", 
          color: "#fff", 
          border: "none", 
          padding: "5px 12px", 
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;