// src/pages/Festivals.jsx
import React from "react";
import diwali from "../assets/diwali.jpg";
import holi from "../assets/holi.jpg";
import navratri from "../assets/navratri.jpg";
import pongal from "../assets/pongal.jpg";

const Festivals = () => {
  const festivals = [
    { title: "Diwali", img: diwali, caption: "Lights & celebration", wiki: "https://en.wikipedia.org/wiki/Diwali" },
    { title: "Holi", img: holi, caption: "Colors of joy", wiki: "https://en.wikipedia.org/wiki/Holi" },
    { title: "Navratri", img: navratri, caption: "Dance & devotion", wiki: "https://en.wikipedia.org/wiki/Navaratri" },
    { title: "Pongal", img: pongal, caption: "Harvest festival", wiki: "https://en.wikipedia.org/wiki/Pongal" },
  ];

  return (
    <div style={{ backgroundColor: "#fff5e6", minHeight: "100vh", paddingTop: "20px", paddingBottom: "30px" }}>
      <h2 style={{ textAlign: "center", color: "#E63946", fontSize: "36px", marginBottom: "30px" }}>🎉 Festivals</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "25px", justifyContent: "center" }}>
        {festivals.map((f, index) => (
          <a key={index} href={f.wiki} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", cursor: "pointer" }}>
            <div style={{ flex: "1 1 270px", border: "4px solid #F77F00", borderRadius: "12px", textAlign: "center", padding: "15px", backgroundColor: "#fff", boxShadow: "0 6px 16px rgba(0,0,0,0.15)", transition: "transform 0.3s, box-shadow 0.3s", minWidth: "270px" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 10px 24px rgba(0,0,0,0.25)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.15)"; }}>
              <img src={f.img} alt={f.title} style={{ width: "100%", borderRadius: "8px", height: 170, objectFit: "cover" }} />
              <h3 style={{ marginTop: 15, color: "#E63946", fontSize: "24px" }}>{f.title}</h3>
              <div style={{ fontSize: 14, color: "#F77F00", marginTop: 10, fontWeight: "bold", fontStyle: "italic" }}>{f.caption}</div>
              <div style={{ fontSize: 12, color: "#0066cc", marginTop: 10, textDecoration: "underline" }}>📖 Read on Wikipedia</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Festivals;