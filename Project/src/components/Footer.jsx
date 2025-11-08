import React from "react";

const Footer = () => (
  <footer style={{
    backgroundColor: "#3b3b58",
    color: "#ffcc00",
    textAlign: "center",
    padding: "1rem 0",
    marginTop: "40px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontSize: "0.9rem",
    boxShadow: "0 -2px 6px rgba(0,0,0,0.1)"
  }}>
    <p>© {new Date().getFullYear()} Incredible India. All rights reserved.</p>
  </footer>
);

export default Footer;