import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    localStorage.setItem(
      "user",
      JSON.stringify({ email: formData.email, password: formData.password })
    );
    alert("Signup successful! Please login.");
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Sign Up 📝</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        <label style={styles.label}>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <label style={styles.label}>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />
        <label style={styles.label}>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Create Account</button>
      </form>

      <p style={styles.text}>
        Already have an account? <Link to="/login" style={styles.link}>Login here</Link>
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: { color: "#3b3b58" },
  form: { display: "flex", flexDirection: "column", gap: "1rem" },
  label: { textAlign: "left", fontWeight: "bold" },
  input: { padding: "0.6rem", borderRadius: "4px", border: "1px solid #ccc" },
  button: {
    backgroundColor: "#3b3b58",
    color: "#ffcc00",
    border: "none",
    padding: "0.8rem",
    borderRadius: "4px",
    fontWeight: "bold",
  },
  text: { marginTop: "1rem" },
  link: { color: "#3b3b58", fontWeight: "bold", textDecoration: "none" },
};

export default Signup;