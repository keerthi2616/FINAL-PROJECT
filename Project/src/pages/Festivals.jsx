import React from "react";
import Diwali from "../assets/diwali.jpg";
import Holi from "../assets/holi.jpg";
import Pongal from "../assets/pongal.jpg";
import Navratri from "../assets/navratri.jpg";

const Festivals = () => (
  <div style={{ padding: "1rem" }}>
    <h1>Festivals of India 🎉</h1>
    <p>
      India celebrates a vibrant array of festivals that showcase its diverse culture and traditions.
    </p>
    <ul>
      <li><strong>Diwali</strong> - The festival of lights, symbolizing the victory of light over darkness.</li>
      <li><strong>Holi</strong> - The colorful festival of spring and love.</li>
      <li><strong>Pongal</strong> - A harvest festival celebrated mainly in South India.</li>
      <li><strong>Navratri</strong> - A nine-night festival dedicated to Goddess Durga.</li>
    </ul>

    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
      <figure style={{ flex: "1 1 250px", textAlign: "center" }}>
        <img src={Diwali} alt="Diwali" style={{ width: "100%", borderRadius: "8px" }} />
        <figcaption>Diwali - Festival of Lights</figcaption>
      </figure>
      <figure style={{ flex: "1 1 250px", textAlign: "center" }}>
        <img src={Holi} alt="Holi" style={{ width: "100%", borderRadius: "8px" }} />
        <figcaption>Holi - Festival of Colors</figcaption>
      </figure>
      <figure style={{ flex: "1 1 250px", textAlign: "center" }}>
        <img src={Pongal} alt="Pongal" style={{ width: "100%", borderRadius: "8px" }} />
        <figcaption>Pongal - Harvest Festival</figcaption>
      </figure>
      <figure style={{ flex: "1 1 250px", textAlign: "center" }}>
        <img src={Navratri} alt="Navratri" style={{ width: "100%", borderRadius: "8px" }} />
        <figcaption>Navratri - Festival of Goddess Durga</figcaption>
      </figure>
    </div>
  </div>
);

export default Festivals;