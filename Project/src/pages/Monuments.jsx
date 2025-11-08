import React from "react";
import TajMahal from "../assets/tajmahal.jpg";
import QutubMinar from "../assets/qutubminar.jpg";
import RedFort from "../assets/redfort.jpg";
import Charminar from "../assets/charminar.jpg";

const Monuments = () => (
  <div style={{ padding: "1rem" }}>
    <h1>Monuments of India 🏛</h1>
    <p>
      India boasts some of the world’s most stunning architectural marvels, showcasing its ancient history and cultural richness.
    </p>
    <ul>
      <li><strong>Taj Mahal</strong> - The symbol of eternal love located in Agra.</li>
      <li><strong>Qutub Minar</strong> - The tallest brick minaret in the world, in Delhi.</li>
      <li><strong>Red Fort</strong> - A historic fort and UNESCO World Heritage Site in Delhi.</li>
      <li><strong>Charminar</strong> - Iconic monument and mosque in Hyderabad.</li>
    </ul>

    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
      <figure style={{ flex: "1 1 250px", textAlign: "center" }}>
        <img 
          src={TajMahal} 
          alt="Taj Mahal" 
          style={{ width: "100%", borderRadius: "8px" }} 
        />
        <figcaption>Taj Mahal, Agra</figcaption>
      </figure>
      <figure style={{ flex: "1 1 250px", textAlign: "center" }}>
        <img 
          src={QutubMinar} 
          alt="Qutub Minar" 
          style={{ width: "100%", borderRadius: "8px" }} 
        />
        <figcaption>Qutub Minar, Delhi</figcaption>
      </figure>
      <figure style={{ flex: "1 1 250px", textAlign: "center" }}>
        <img 
          src={RedFort} 
          alt="Red Fort" 
          style={{ width: "100%", borderRadius: "8px" }} 
        />
        <figcaption>Red Fort, Delhi</figcaption>
      </figure>
      <figure style={{ flex: "1 1 250px", textAlign: "center" }}>
        <img 
          src={Charminar} 
          alt="Charminar" 
          style={{ width: "100%", borderRadius: "8px" }} 
        />
        <figcaption>Charminar, Hyderabad</figcaption>
      </figure>
    </div>
  </div>
);

export default Monuments;