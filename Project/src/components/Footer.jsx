// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#242424",
        color: "#fff",
        padding: "20px 40px",
        borderRadius: "8px",
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      <p>© 2025 Cultural Explorer. All rights reserved.</p>
      <p>
        Follow us:{" "}
        <a href="#" style={{ color: "#646cff", margin: "0 5px" }}>Facebook</a> |{" "}
        <a href="#" style={{ color: "#646cff", margin: "0 5px" }}>Instagram</a> |{" "}
        <a href="#" style={{ color: "#646cff", margin: "0 5px" }}>Twitter</a>
      </p>
    </footer>
  );
};

export default Footer;