import React from "react";

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1>Contact Us 📞</h1>
      <p>If you have any questions or feedback, feel free to reach out to us using the details below:</p>

      <div style={styles.infoBox}>
        <h3>📍 Address:</h3>
        <p>K L University, Andhra Pradesh, India</p>
      </div>

      <div style={styles.infoBox}>
        <h3>📞 Phone Numbers:</h3>
        <p>9704066529</p>
        <p>9573647670</p>
      </div>

      <div style={styles.infoBox}>
        <h3>✉ Email:</h3>
        <p>2400032616@kluniversity.in</p>
        <p>2400032475@kluniversity.in</p>
      </div>

      <div style={styles.infoBox}>
        <h3>🕒 Working Hours:</h3>
        <p>Monday to Saturday: 9:00 AM – 6:00 PM</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.6",
    fontFamily: "Arial, sans-serif",
  },
  infoBox: {
    marginTop: "1.5rem",
    backgroundColor: "#f9f9f9",
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
  }
};

export default Contact;