import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Get stored user data
    const storedUser = localStorage.getItem(`user_${email}`);
    
    if (!storedUser) {
      setShowError(true);
      setErrorMessage("Account not found. Please sign up first.");
      setTimeout(() => setShowError(false), 4000);
      return;
    }

    const user = JSON.parse(storedUser);
    if (user.password !== password) {
      setShowError(true);
      setErrorMessage("Incorrect password. Please try again.");
      setTimeout(() => setShowError(false), 4000);
      return;
    }

    // Successful login
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("currentUser", email);
    localStorage.setItem("userRole", user.accountType); // Store user role (user or admin)
    setIsAuthenticated(true);
    
    // Redirect based on account type
    if (user.accountType === "admin") {
      navigate("/admin-dashboard"); // Redirect admin to admin dashboard
    } else {
      navigate("/"); // Redirect user to home
    }
  };

  return (
    <div style={{ backgroundColor: "#f0f4ff", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "20px" }}>
      <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "40px", boxShadow: "0 8px 24px rgba(0,0,0,0.15)", maxWidth: "420px", width: "100%", border: "3px solid #11cdef" }}>
        <h2 style={{ color: "#11cdef", textAlign: "center", marginBottom: "10px", fontSize: "28px" }}>Login</h2>
        <p style={{ textAlign: "center", color: "#999", marginBottom: "25px", fontSize: "14px" }}>Access your account</p>

        {showError && (
          <div style={{ backgroundColor: "#ffe5e5", border: "2px solid #ff6b6b", color: "#c92a2a", padding: "12px", borderRadius: "8px", marginBottom: "20px", fontSize: "14px", fontWeight: "500" }}>
            ⚠ {errorMessage}
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)} 
            required 
            style={{ padding: "12px", borderRadius: "8px", border: "2px solid #11cdef", fontSize: "14px", fontFamily: "inherit" }} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e)=>setPassword(e.target.value)} 
            required 
            style={{ padding: "12px", borderRadius: "8px", border: "2px solid #11cdef", fontSize: "14px", fontFamily: "inherit" }} 
          />
          <button 
            type="submit" 
            style={{ padding: "12px", borderRadius: "8px", border: "none", backgroundColor: "#11cdef", color: "#fff", fontSize: "16px", fontWeight: "bold", cursor: "pointer", transition: "background-color 0.3s" }}
          >
            Login
          </button>
        </form>

        <div style={{ marginTop: "25px", textAlign: "center", borderTop: "1px solid #eee", paddingTop: "20px" }}>
          <p style={{ fontSize: "14px", color: "#666" }}>Don't have an account? <a href="/signup" style={{ color: "#11cdef", textDecoration: "none", fontWeight: "bold" }}>Create one here</a></p>
        </div>

        <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#f0f8ff", borderRadius: "8px", borderLeft: "4px solid #11cdef" }}>
          <p style={{ margin: "0", fontSize: "12px", color: "#666" }}>
            <strong>Demo Accounts:</strong><br/>
            User: user@test.com | Pass: test123<br/>
            Admin: admin@test.com | Pass: admin123
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;