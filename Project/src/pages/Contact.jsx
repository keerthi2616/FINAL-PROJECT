
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store message in localStorage and mark as new for admin
    const contactMessages = JSON.parse(localStorage.getItem("contactMessages") || "[]");
    contactMessages.push({
      name,
      email,
      message,
      timestamp: new Date().toLocaleString(),
      isNew: true
    });
    localStorage.setItem("contactMessages", JSON.stringify(contactMessages));

    // Show success message (message saved to admin inbox)
    setShowSuccess(true);
    setName("");
    setEmail("");
    setMessage("");

    // Hide success message after 4 seconds
    setTimeout(() => setShowSuccess(false), 4000);
  };
  return (
    <div style={{ backgroundColor: "#e8f4f8", minHeight: "100vh", paddingTop: "30px", paddingBottom: "30px" }}>
      <h2 style={{ textAlign: "center", color: "#0084d4", fontSize: "36px", marginBottom: "20px" }}>📧 Contact Us</h2>
      
      <div style={{ maxWidth: "500px", margin: "0 auto", backgroundColor: "#fff", borderRadius: "12px", padding: "30px", boxShadow: "0 6px 20px rgba(0,0,0,0.1)", border: "3px solid #0084d4" }}>
        {showSuccess && (
          <div style={{ backgroundColor: "#d4edda", border: "2px solid #28a745", color: "#155724", padding: "15px", borderRadius: "8px", marginBottom: "20px", fontSize: "14px", fontWeight: "500" }}>
            ✅ Message saved! The admin will receive this in the site inbox.
          </div>
        )}

        <div style={{ marginBottom: "25px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", color: "#333", margin: "10px 0" }}>📩 <strong>Email:</strong> <span style={{ color: "#0084d4" }}>info@culturalexplorer.com</span></p>
          <p style={{ fontSize: "16px", color: "#333", margin: "10px 0" }}>📱 <strong>Phone:</strong> <span style={{ color: "#0084d4" }}>+91 9573647670</span></p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input 
            type="text" 
            placeholder="Your Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
            style={{ padding: "12px", borderRadius: "8px", border: "2px solid #0084d4", fontSize: "14px", fontFamily: "inherit" }} 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            style={{ padding: "12px", borderRadius: "8px", border: "2px solid #0084d4", fontSize: "14px", fontFamily: "inherit" }} 
          />
          <textarea 
            placeholder="Your Message" 
            rows="6" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required 
            style={{ padding: "12px", borderRadius: "8px", border: "2px solid #0084d4", fontSize: "14px", fontFamily: "inherit", resize: "vertical" }}
          ></textarea>
          <button 
            type="submit" 
            style={{ padding: "12px", borderRadius: "8px", border: "none", backgroundColor: "#0084d4", color: "#fff", fontSize: "16px", fontWeight: "bold", cursor: "pointer", transition: "background-color 0.3s" }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;