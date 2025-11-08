import React from "react";

const Header = () => (
  <header style={{
    backgroundColor: "#ffcc00",
    color: "#3b3b58",
    padding: "2rem",
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
  }}>
    <h1 style={{ margin: 0, fontSize: "2.5rem" }}>Welcome to Incredible India 🇮🇳</h1>
    <p style={{ margin: 0, fontSize: "1.2rem", fontWeight: 600 }}>Explore Indian Culture, Monuments, Festivals & Arts</p>
  </header>
);

export default Header;