// src/pages/Monuments.jsx
import React from "react";
import charminar from "../assets/charminar.jpg";
import tajmahal from "../assets/tajmahal.jpg";
import qutubminar from "../assets/qutubminar.jpg";
import redfort from "../assets/redfort.jpg";

const Monuments = () => {
  const monuments = [
    { title: "Charminar", img: charminar, caption: "Built heritage", wiki: "https://en.wikipedia.org/wiki/Charminar" },
    { title: "Taj Mahal", img: tajmahal, caption: "Symbol of love", wiki: "https://en.wikipedia.org/wiki/Taj_Mahal" },
    { title: "Qutub Minar", img: qutubminar, caption: "Architectural marvel", wiki: "https://en.wikipedia.org/wiki/Qutub_Minar" },
    { title: "Red Fort", img: redfort, caption: "Historic fortress", wiki: "https://en.wikipedia.org/wiki/Red_Fort" },
  ];

  return (
    <div style={{ backgroundColor: "#fef3e2", minHeight: "100vh", paddingTop: "20px", paddingBottom: "30px" }}>
      <h2 style={{ textAlign: "center", color: "#8B4513", fontSize: "36px", marginBottom: "30px" }}>🏛 Monuments</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "25px", justifyContent: "center" }}>
        {monuments.map((m, index) => (
          <a key={index} href={m.wiki} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", cursor: "pointer" }}>
            <div style={{ flex: "1 1 270px", border: "4px solid #D2691E", borderRadius: "12px", textAlign: "center", padding: "15px", backgroundColor: "#fff", boxShadow: "0 6px 16px rgba(0,0,0,0.15)", transition: "transform 0.3s, box-shadow 0.3s", minWidth: "270px" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 10px 24px rgba(0,0,0,0.25)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.15)"; }}>
              <img src={m.img} alt={m.title} style={{ width: "100%", borderRadius: "8px", height: 180, objectFit: "cover" }} />
              <h3 style={{ marginTop: 15, color: "#8B4513", fontSize: "24px" }}>{m.title}</h3>
              <div style={{ fontSize: 14, color: "#D2691E", marginTop: 10, fontWeight: "bold", fontStyle: "italic" }}>{m.caption}</div>
              <div style={{ fontSize: 12, color: "#0066cc", marginTop: 10, textDecoration: "underline" }}>📖 Read on Wikipedia</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Monuments;