// src/pages/ArtCraft.jsx
import React from "react";
import bluepottery from "../assets/bluepottery.jpg";
import pattachitra from "../assets/pattachitra.jpg";
import madhubani from "../assets/madhubani.jpg";
import warli from "../assets/warli.jpg";
import traditionalclothes from "../assets/traditionalclothes.jpg";

const ArtCraft = () => {
  const arts = [
    { title: "Blue Pottery", img: bluepottery, caption: "Ceramic art", wiki: "https://en.wikipedia.org/wiki/Blue_pottery" },
    { title: "Pattachitra", img: pattachitra, caption: "Scroll painting", wiki: "https://en.wikipedia.org/wiki/Pattachitra" },
    { title: "Madhubani", img: madhubani, caption: "Folk painting", wiki: "https://en.wikipedia.org/wiki/Madhubani_painting" },
    { title: "Warli", img: warli, caption: "Tribal art", wiki: "https://en.wikipedia.org/wiki/Warli_painting" },
    { title: "Traditional Clothes", img: traditionalclothes, caption: "Handloom & textiles", wiki: "https://en.wikipedia.org/wiki/Indian_textiles" },
  ];

  return (
    <div style={{ backgroundColor: "#f0f8ff", minHeight: "100vh", paddingTop: "20px", paddingBottom: "30px" }}>
      <h2 style={{ textAlign: "center", color: "#6A4C93", fontSize: "36px", marginBottom: "30px" }}>🎨 Art & Craft</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "25px", justifyContent: "center" }}>
        {arts.map((a, index) => (
          <a key={index} href={a.wiki} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", cursor: "pointer" }}>
            <div style={{ flex: "1 1 260px", border: "4px solid #A23B72", borderRadius: "12px", textAlign: "center", padding: "15px", backgroundColor: "#fff", boxShadow: "0 6px 16px rgba(0,0,0,0.15)", transition: "transform 0.3s, box-shadow 0.3s", minWidth: "260px" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 10px 24px rgba(0,0,0,0.25)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.15)"; }}>
              <img src={a.img} alt={a.title} style={{ width: "100%", borderRadius: "8px", height: 170, objectFit: "cover" }} />
              <h3 style={{ marginTop: 15, color: "#6A4C93", fontSize: "22px" }}>{a.title}</h3>
              <div style={{ fontSize: 14, color: "#A23B72", marginTop: 10, fontWeight: "bold", fontStyle: "italic" }}>{a.caption}</div>
              <div style={{ fontSize: 12, color: "#0066cc", marginTop: 10, textDecoration: "underline" }}>📖 Read on Wikipedia</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ArtCraft;