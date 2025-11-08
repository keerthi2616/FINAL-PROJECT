import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);
      navigate("/");
    } else {
      alert("Invalid credentials or user not registered!");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Login 🔑</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          placeholder="Enter your email"
        />

        <label style={styles.label}>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
          placeholder="Enter your password"
        />

        <button type="submit" style={styles.button}>Login</button>
      </form>

      <p style={styles.text}>
        Don’t have an account? <Link to="/signup" style={styles.link}>Sign up here</Link>
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
    backgroundColor: "#ffcc00",
    color: "#3b3b58",
    border: "none",
    padding: "0.8rem",
    borderRadius: "4px",
    fontWeight: "bold",
  },
  text: { marginTop: "1rem" },
  link: { color: "#3b3b58", fontWeight: "bold", textDecoration: "none" },
};

export default Login;