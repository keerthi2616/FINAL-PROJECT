// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#4a6cff",
        color: "#fff",
        padding: "30px 40px",
        borderRadius: "8px",
        textAlign: "center",
        marginBottom: "20px",
      }}
    >
      <h1 style={{ fontSize: "2.5em", margin: 0 }}>🌟 Cultural Explorer</h1>
      <p style={{ fontSize: "1.2em", marginTop: "10px" }}>
        Discover Monuments, Festivals, and Local Art & Craft
      </p>
    </header>
  );
};

export default Header;