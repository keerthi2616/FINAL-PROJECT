import React from "react";
import Madhubani from "../assets/madhubani.jpg";
import Warli from "../assets/warli.jpg";
import BluePottery from "../assets/bluepottery.jpg";
import Pattachitra from "../assets/pattachitra.jpg";

const ArtCraft = () => (
  <div style={{ padding: "1rem" }}>
    <h1>Indian Art & Craft 🎨</h1>
    <p>
      Indian traditional arts and crafts reflect the rich cultural heritage and creativity of the region.
    </p>
    <ul>
      <li><strong>Madhubani Painting</strong> - Originating from Bihar, known for intricate patterns and natural dyes.</li>
      <li><strong>Warli Art</strong> - Tribal art from Maharashtra with simple yet expressive designs.</li>
      <li><strong>Blue Pottery</strong> - A vibrant craft from Rajasthan using blue dye on pottery.</li>
      <li><strong>Pattachitra</strong> - Traditional cloth-based scroll painting from Odisha and West Bengal.</li>
    </ul>

    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
      <figure style={{ flex: "1 1 250px", textAlign: "center" }}>
        <img src={Madhubani} alt="Madhubani Painting" style={{ width: "100%", borderRadius: "8px" }} />
        <figcaption>Madhubani Painting</figcaption>
      </figure>
      <figure style={{ flex: "1 1 250px", textAlign: "center" }}>
        <img src={Warli} alt="Warli Art" style={{ width: "100%", borderRadius: "8px" }} />
        <figcaption>Warli Art</figcaption>
      </figure>
      <figure style={{ flex: "1 1 250px", textAlign: "center" }}>
        <img src={BluePottery} alt="Blue Pottery" style={{ width: "100%", borderRadius: "8px" }} />
        <figcaption>Blue Pottery</figcaption>
      </figure>
      <figure style={{ flex: "1 1 250px", textAlign: "center" }}>
        <img src={Pattachitra} alt="Pattachitra" style={{ width: "100%", borderRadius: "8px" }} />
        <figcaption>Pattachitra</figcaption>
      </figure>
    </div>
  </div>
);

export default ArtCraft;