// src/pages/Home.jsx
import React from "react";
import diwali from "../assets/diwali.jpg";
import bluepottery from "../assets/bluepottery.jpg";
import indiancuisine from "../assets/indiancuisine.jpg";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh", paddingTop: "20px" }}>
      <h2 style={{ textAlign: "center", color: "#d4631a", fontSize: "36px", marginBottom: "10px" }}>Welcome to Cultural Explorer!</h2>
      <p style={{ textAlign: "center", marginBottom: "40px", color: "#555", fontSize: "16px", fontStyle: "italic" }}>
        Explore the rich heritage, vibrant festivals, and unique arts & crafts of our region.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "25px", justifyContent: "center", paddingBottom: "30px" }}>
        {[{ title: "Monuments", img: diwali, desc: "Discover historical landmarks and heritage sites.", caption: "Heritage matters", color: "#FF6B6B" }, { title: "Festivals", img: indiancuisine, desc: "Experience colorful cultural festivals celebrated across the region.", caption: "Festivals matter", color: "#4ECDC4" }, { title: "Art & Craft", img: bluepottery, desc: "Learn about local arts, crafts, and handmade products.", caption: "Art matters", color: "#FFE66D" }].map((card, i) => (
          <div key={i} style={{ flex: "1 1 260px", border: `3px solid ${card.color}`, borderRadius: "12px", padding: "15px", textAlign: "center", backgroundColor: "#fff", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", transition: "transform 0.3s", cursor: "pointer" }}>
            <img src={card.img} alt={card.title} style={{ width: "100%", borderRadius: "8px", height: 160, objectFit: "cover" }} />
            <h3 style={{ color: card.color, marginTop: "12px", fontSize: "22px" }}>{card.title}</h3>
            <p style={{ color: "#666", fontSize: "14px", margin: "10px 0" }}>{card.desc}</p>
            <div style={{ fontSize: 13, color: card.color, marginTop: 10, fontWeight: "bold" }}>{card.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;