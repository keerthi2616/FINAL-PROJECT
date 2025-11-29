import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [accountType, setAccountType] = useState(null); // null, "user", or "admin"
  const [step, setStep] = useState("type"); // "type" or "form"
  const navigate = useNavigate();

  const handleSelectType = (type) => {
    setAccountType(type);
    setStep("form");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    
    // Check if account already exists
    const existingEmail = localStorage.getItem(`user_${email}`);
    if (existingEmail) {
      setShowError(true);
      setErrorMessage("This email is already registered. Please use a different email or login.");
      setTimeout(() => setShowError(false), 4000);
      return;
    }

    // Store user data with email as key, including account type
    localStorage.setItem(`user_${email}`, JSON.stringify({ email, password, accountType }));
    
    // Also store in profiles list for admin dashboard
    const allProfiles = JSON.parse(localStorage.getItem("userProfiles") || "[]");
    allProfiles.push({ name: email, email, joinDate: new Date().toLocaleDateString(), accountType });
    localStorage.setItem("userProfiles", JSON.stringify(allProfiles));
    
    setShowSuccess(true);
    
    // Show success message for 2 seconds, then redirect to login
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  const goBack = () => {
    setStep("type");
    setAccountType(null);
    setEmail("");
    setPassword("");
  };

  return (
    <div style={{ backgroundColor: "#f0f4ff", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "20px" }}>
      <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "40px", boxShadow: "0 8px 24px rgba(0,0,0,0.15)", maxWidth: "420px", width: "100%", border: "3px solid #5e72e4" }}>
        {showSuccess ? (
          <div style={{ padding: "20px", textAlign: "center" }}>
            <h2 style={{ color: "#2dce89", marginBottom: "20px", fontSize: "32px" }}>✓ Success!</h2>
            <p style={{ fontSize: "16px", color: "#333", marginBottom: "10px", fontWeight: "500" }}>Your {accountType} account has been created successfully.</p>
            <p style={{ fontSize: "14px", color: "#999" }}>⏳ Redirecting to login page...</p>
          </div>
        ) : step === "type" ? (
          <>
            <h2 style={{ color: "#5e72e4", textAlign: "center", marginBottom: "10px", fontSize: "28px" }}>Choose Account Type</h2>
            <p style={{ textAlign: "center", color: "#999", marginBottom: "30px", fontSize: "14px" }}>Select what type of account you want to create</p>

            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <button
                onClick={() => handleSelectType("user")}
                style={{
                  padding: "20px",
                  borderRadius: "12px",
                  border: "2px solid #0066cc",
                  backgroundColor: "#f0f8ff",
                  color: "#0066cc",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  textAlign: "left"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#cce5ff";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#f0f8ff";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <div style={{ fontSize: "20px", marginBottom: "5px" }}>👤</div>
                <strong>User Account</strong>
                <div style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>
                  Access quizzes, save favorites, and track your progress
                </div>
              </button>

              <button
                onClick={() => handleSelectType("admin")}
                style={{
                  padding: "20px",
                  borderRadius: "12px",
                  border: "2px solid #dc3545",
                  backgroundColor: "#fff5f5",
                  color: "#dc3545",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  textAlign: "left"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffe5e5";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#fff5f5";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <div style={{ fontSize: "20px", marginBottom: "5px" }}>🔐</div>
                <strong>Admin Account</strong>
                <div style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>
                  Manage users, messages, and platform content
                </div>
              </button>
            </div>
          </>
        ) : (
          <>
            {showError && (
              <div style={{ backgroundColor: "#ffe5e5", border: "2px solid #ff6b6b", color: "#c92a2a", padding: "12px", borderRadius: "8px", marginBottom: "20px", fontSize: "14px", fontWeight: "500" }}>
                ⚠ {errorMessage}
              </div>
            )}
            <h2 style={{ color: "#5e72e4", textAlign: "center", marginBottom: "10px", fontSize: "28px" }}>Create {accountType === "admin" ? "Admin" : "User"} Account</h2>
            <p style={{ textAlign: "center", color: "#999", marginBottom: "25px", fontSize: "14px" }}>
              {accountType === "admin" ? "🔐 Set up your admin credentials" : "👤 Join us to explore culture"}
            </p>

            <form onSubmit={handleSignup} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} 
                required 
                style={{ padding: "12px", borderRadius: "8px", border: "2px solid #5e72e4", fontSize: "14px", fontFamily: "inherit" }} 
              />
              <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)} 
                required 
                style={{ padding: "12px", borderRadius: "8px", border: "2px solid #5e72e4", fontSize: "14px", fontFamily: "inherit" }} 
              />
              <button 
                type="submit" 
                style={{ padding: "12px", borderRadius: "8px", border: "none", backgroundColor: "#5e72e4", color: "#fff", fontSize: "16px", fontWeight: "bold", cursor: "pointer", transition: "background-color 0.3s" }}
              >
                Sign Up
              </button>
              <button 
                type="button" 
                onClick={goBack} 
                style={{ padding: "12px", borderRadius: "8px", border: "2px solid #999", backgroundColor: "#f9f9f9", color: "#999", fontSize: "16px", fontWeight: "bold", cursor: "pointer", transition: "all 0.3s" }}
              >
                ← Back
              </button>
            </form>

            <div style={{ marginTop: "25px", textAlign: "center", borderTop: "1px solid #eee", paddingTop: "20px" }}>
              <p style={{ fontSize: "14px", color: "#666" }}>Already have an account? <a href="/login" style={{ color: "#5e72e4", textDecoration: "none", fontWeight: "bold" }}>Login here</a></p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Signup;