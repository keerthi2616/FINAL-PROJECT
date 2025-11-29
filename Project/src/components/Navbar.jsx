import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav
    style={{
      backgroundColor: "#3b3b58",
      padding: "1rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
      flexWrap: "wrap",
    }}
  >
    {/* Brand / Logo */}
    <div
      style={{
        fontWeight: "bold",
        fontSize: "1.5rem",
        color: "#ffcc00",
        userSelect: "none",
      }}
    >
      🇮🇳 Incredible India
    </div>

    {/* Navigation Links */}
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        gap: "1.5rem",
        margin: 0,
        padding: 0,
        flexWrap: "wrap",
      }}
    >
      {[
       
        { path: "/", label: "Home" },
        { path: "/monuments", label: "Monuments" },
        { path: "/festivals", label: "Festivals" },
        { path: "/art-craft", label: "Art & Craft" },
        { path: "/contact", label: "Contact" },
      ].map(({ path, label }) => (
        <li key={path}>
          <Link
            to={path}
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: 500,
              padding: "0.3rem 0.6rem",
              borderRadius: "4px",
              transition: "background-color 0.3s ease, color 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#ffcc00";
              e.target.style.color = "#3b3b58";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "white";
            }}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;