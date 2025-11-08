import React from "react";
import IndiaFlag from "../assets/indiaflag.jpg";
import CultureDance from "../assets/culturedance.jpg";
import TraditionalClothes from "../assets/traditionalclothes.jpg";
import IndianCuisine from "../assets/indiancuisine.jpg";

const Home = () => (
  <div style={{ padding: "1rem" }}>
    <h1>Welcome to Indian Culture 🇮🇳</h1>
    <p>
      India is a land of diversity, rich traditions, vibrant festivals, and timeless monuments.
      Explore the heart of Indian culture through its art, history, and celebrations.
    </p>

    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
      <figure style={{ flex: "1 1 250px", textAlign: "center" }}>
        <img src={IndiaFlag} alt="Indian Flag" style={{ width: "100%", borderRadius: "8px" }} />
        <figcaption>National Flag of India</figcaption>
      </figure>

      <figure style={{ flex: "1 1 250px", textAlign: "center" }}>
        <img src={CultureDance} alt="Cultural Dance" style={{ width: "100%", borderRadius: "8px" }} />
        <figcaption>Traditional Indian Dance</figcaption>
      </figure>

      <figure style={{ flex: "1 1 250px", textAlign: "center" }}>
        <img src={TraditionalClothes} alt="Traditional Clothes" style={{ width: "100%", borderRadius: "8px" }} />
        <figcaption>Indian Traditional Clothing</figcaption>
      </figure>

      <figure style={{ flex: "1 1 250px", textAlign: "center" }}>
        <img src={IndianCuisine} alt="Indian Cuisine" style={{ width: "100%", borderRadius: "8px" }} />
        <figcaption>Delicious Indian Food</figcaption>
      </figure>
    </div>
  </div>
);

export default Home;