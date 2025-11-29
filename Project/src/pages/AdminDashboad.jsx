import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [adminData, setAdminData] = useState({
    totalUsers: 0,
    totalQuizzes: 0,
    totalSubmissions: 0,
    averageScore: 0
  });
  const [activeTab, setActiveTab] = useState("overview");
  const [users, setUsers] = useState([]);
  const [contactMessages, setContactMessages] = useState([]);
  const [quizAttempts, setQuizAttempts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load admin data
    const userProfiles = JSON.parse(localStorage.getItem("userProfiles") || "[]");
    const quizHistory = JSON.parse(localStorage.getItem("quizHistory") || "[]");
    const messages = JSON.parse(localStorage.getItem("contactMessages") || "[]");
    // Exclude admin accounts from the totalUsers metric
    const nonAdminCount = userProfiles.filter((u) => (u.accountType || "user") !== "admin").length;

    setAdminData({
      totalUsers: nonAdminCount,
      totalQuizzes: 3,
      totalSubmissions: quizHistory.length,
      averageScore: quizHistory.length > 0 
        ? Math.round(quizHistory.reduce((sum, q) => sum + q.percentage, 0) / quizHistory.length)
        : 0
    });

    // Keep full profiles list for management, but metrics exclude admins
    setUsers(userProfiles);
    setContactMessages(messages);
    setQuizAttempts(quizHistory);
  }, []);

  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    localStorage.setItem("userProfiles", JSON.stringify(updatedUsers));
    // Update totalUsers to reflect non-admin users only
    const nonAdminCount = updatedUsers.filter((u) => (u.accountType || "user") !== "admin").length;
    setAdminData({ ...adminData, totalUsers: nonAdminCount });
  };

  const handleDeleteMessage = (index) => {
    const updatedMessages = contactMessages.filter((_, i) => i !== index);
    setContactMessages(updatedMessages);
    localStorage.setItem("contactMessages", JSON.stringify(updatedMessages));
  };

  const handleMarkRead = (index) => {
    const updated = [...contactMessages];
    if (updated[index]) {
      updated[index].isNew = false;
      setContactMessages(updated);
      localStorage.setItem("contactMessages", JSON.stringify(updated));
    }
  };

  const handleMarkAllRead = () => {
    const updated = contactMessages.map((m) => ({ ...m, isNew: false }));
    setContactMessages(updated);
    localStorage.setItem("contactMessages", JSON.stringify(updated));
  };

  const handleClearAllData = () => {
    if (window.confirm("Are you sure? This will delete all user data, quiz history, and messages!")) {
      localStorage.removeItem("userProfiles");
      localStorage.removeItem("quizHistory");
      localStorage.removeItem("contactMessages");
      setUsers([]);
      setContactMessages([]);
      setAdminData({
        totalUsers: 0,
        totalQuizzes: 3,
        totalSubmissions: 0,
        averageScore: 0
      });
      alert("All data cleared!");
    }
  };

  return (
    <div style={{ backgroundColor: "#fafafa", minHeight: "100vh", paddingTop: "30px", paddingBottom: "30px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        {/* Admin Header */}
        <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "30px", marginBottom: "30px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <h1 style={{ color: "#dc3545", fontSize: "32px", marginBottom: "5px", marginTop: "0" }}>
                🔐 Admin Dashboard
              </h1>
              <p style={{ color: "#666", fontSize: "14px", marginBottom: "0" }}>
                Manage users, quizzes, and platform content
              </p>
            </div>
            <button
              onClick={() => navigate("/")}
              style={{
                padding: "10px 20px",
                backgroundColor: "#6c757d",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              ← Back
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "30px" }}>
          <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "20px", border: "2px solid #0066cc", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)" }}>
            <div style={{ color: "#0066cc", fontSize: "28px", fontWeight: "bold", marginBottom: "5px" }}>
              {adminData.totalUsers}
            </div>
            <div style={{ color: "#666", fontSize: "14px" }}>Total Users</div>
          </div>

          <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "20px", border: "2px solid #28a745", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)" }}>
            <div style={{ color: "#28a745", fontSize: "28px", fontWeight: "bold", marginBottom: "5px" }}>
              {adminData.totalQuizzes}
            </div>
            <div style={{ color: "#666", fontSize: "14px" }}>Active Quizzes</div>
          </div>

          <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "20px", border: "2px solid #ffc107", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)" }}>
            <div style={{ color: "#ffc107", fontSize: "28px", fontWeight: "bold", marginBottom: "5px" }}>
              {adminData.totalSubmissions}
            </div>
            <div style={{ color: "#666", fontSize: "14px" }}>Quiz Submissions</div>
          </div>

          <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "20px", border: "2px solid #17a2b8", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)" }}>
            <div style={{ color: "#17a2b8", fontSize: "28px", fontWeight: "bold", marginBottom: "5px" }}>
              {adminData.averageScore}%
            </div>
            <div style={{ color: "#666", fontSize: "14px" }}>Avg User Score</div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px", borderBottom: "2px solid #e0e0e0", flexWrap: "wrap" }}>
          <button
            onClick={() => setActiveTab("overview")}
            style={{
              padding: "12px 20px",
              backgroundColor: activeTab === "overview" ? "#dc3545" : "#fff",
              color: activeTab === "overview" ? "#fff" : "#dc3545",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "bold",
              borderRadius: "8px 8px 0 0",
              transition: "all 0.3s"
            }}
          >
            📊 Overview
          </button>
          <button
            onClick={() => setActiveTab("users")}
            style={{
              padding: "12px 20px",
              backgroundColor: activeTab === "users" ? "#dc3545" : "#fff",
              color: activeTab === "users" ? "#fff" : "#dc3545",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "bold",
              borderRadius: "8px 8px 0 0",
              transition: "all 0.3s"
            }}
          >
            {/* Show count of non-admin users */}
            👥 Users ({users.filter((u) => (u.accountType || "user") !== "admin").length})
          </button>
          <button
            onClick={() => setActiveTab("messages")}
            style={{
              padding: "12px 20px",
              backgroundColor: activeTab === "messages" ? "#dc3545" : "#fff",
              color: activeTab === "messages" ? "#fff" : "#dc3545",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "bold",
              borderRadius: "8px 8px 0 0",
              transition: "all 0.3s"
            }}
          >
            💬 Messages ({contactMessages.length}) {contactMessages.filter(m => m.isNew).length > 0 && <span style={{ marginLeft: 8, background: '#dc3545', color: '#fff', padding: '2px 8px', borderRadius: 12, fontSize: 12 }}>{contactMessages.filter(m => m.isNew).length} new</span>}
          </button>
          <button
            onClick={() => setActiveTab("quizzes")}
            style={{
              padding: "12px 20px",
              backgroundColor: activeTab === "quizzes" ? "#dc3545" : "#fff",
              color: activeTab === "quizzes" ? "#fff" : "#dc3545",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "bold",
              borderRadius: "8px 8px 0 0",
              transition: "all 0.3s"
            }}
          >
            🎯 Quiz Attempts ({quizAttempts.length})
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            style={{
              padding: "12px 20px",
              backgroundColor: activeTab === "settings" ? "#dc3545" : "#fff",
              color: activeTab === "settings" ? "#fff" : "#dc3545",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "bold",
              borderRadius: "8px 8px 0 0",
              transition: "all 0.3s"
            }}
          >
            ⚙ Settings
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "30px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)" }}>
            <h2 style={{ color: "#333", fontSize: "22px", marginBottom: "20px", marginTop: "0" }}>
              Platform Overview
            </h2>
            <div style={{ display: "grid", gap: "20px" }}>
              <div style={{ padding: "15px", backgroundColor: "#f0f8ff", borderRadius: "8px", borderLeft: "4px solid #0066cc" }}>
                <strong style={{ color: "#0066cc" }}>📈 Platform Statistics</strong>
                <p style={{ color: "#666", marginTop: "10px", marginBottom: "0" }}>
                  The platform currently has {adminData.totalUsers} registered users, {adminData.totalQuizzes} active quizzes, and {adminData.totalSubmissions} total quiz submissions with an average user score of {adminData.averageScore}%.
                </p>
              </div>
              <div style={{ padding: "15px", backgroundColor: "#f0fff4", borderRadius: "8px", borderLeft: "4px solid #28a745" }}>
                <strong style={{ color: "#28a745" }}>✅ Available Features</strong>
                <ul style={{ color: "#666", marginTop: "10px", marginBottom: "0", paddingLeft: "20px" }}>
                  <li>Interactive Quiz System (Monuments, Festivals, Arts & Crafts)</li>
                  <li>User Profiles & Quiz History Tracking</li>
                  <li>Favorites Management</li>
                  <li>Contact Form & Message Management</li>
                  <li>Admin Dashboard & User Management</li>
                </ul>
              </div>
              <div style={{ padding: "15px", backgroundColor: "#fff3cd", borderRadius: "8px", borderLeft: "4px solid #ffc107" }}>
                <strong style={{ color: "#856404" }}>⚠ Admin Functions</strong>
                <p style={{ color: "#666", marginTop: "10px", marginBottom: "0" }}>
                  Manage users, view contact messages, monitor platform statistics, and configure system settings. Use the tabs above to access different admin functions.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === "users" && (
          <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "30px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)" }}>
            <h2 style={{ color: "#333", fontSize: "22px", marginBottom: "20px", marginTop: "0" }}>
              User Management
            </h2>
            {users.length > 0 ? (
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                      <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
                        <th style={{ padding: "12px", textAlign: "left", color: "#333", fontWeight: "bold" }}>Name</th>
                        <th style={{ padding: "12px", textAlign: "left", color: "#333", fontWeight: "bold" }}>Email</th>
                        <th style={{ padding: "12px", textAlign: "left", color: "#333", fontWeight: "bold" }}>Joined</th>
                        <th style={{ padding: "12px", textAlign: "left", color: "#333", fontWeight: "bold" }}>Role</th>
                        <th style={{ padding: "12px", textAlign: "left", color: "#333", fontWeight: "bold" }}>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={index} style={{ borderBottom: "1px solid #eee" }}>
                        <td style={{ padding: "12px", color: "#333" }}>{user.name || "N/A"}</td>
                          <td style={{ padding: "12px", color: "#333" }}>{user.email || "N/A"}</td>
                          <td style={{ padding: "12px", color: "#666" }}>{user.joinDate || new Date().toLocaleDateString()}</td>
                          <td style={{ padding: "12px", color: "#333", fontWeight: "bold" }}>{(user.accountType || "user").toUpperCase()}</td>
                          <td style={{ padding: "12px" }}>
                          <button
                            onClick={() => handleDeleteUser(index)}
                            style={{
                              padding: "6px 12px",
                              backgroundColor: "#dc3545",
                              color: "#fff",
                              border: "none",
                              borderRadius: "6px",
                              cursor: "pointer",
                              fontSize: "12px",
                              fontWeight: "bold"
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "40px", color: "#999" }}>
                <p>No users registered yet.</p>
              </div>
            )}
          </div>
        )}

        {/* Messages Tab */}
        {activeTab === "messages" && (
          <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "30px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)" }}>
            <h2 style={{ color: "#333", fontSize: "22px", marginBottom: "20px", marginTop: "0" }}>
              Contact Messages
            </h2>
            {contactMessages.length > 0 ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                {contactMessages.map((msg, index) => (
                  <div key={index} style={{ padding: "15px", backgroundColor: msg.isNew ? "#fff7f7" : "#f9f9f9", borderRadius: "8px", borderLeft: msg.isNew ? "4px solid #dc3545" : "4px solid #ccc" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "10px" }}>
                      <div>
                        <strong style={{ color: "#333" }}>{msg.name} {msg.isNew && <span style={{ color: '#dc3545', fontSize: 12, marginLeft: 8 }}>(New)</span>}</strong>
                        <div style={{ color: "#666", fontSize: "13px" }}>{msg.email}</div>
                      </div>
                      <div style={{ display: 'flex', gap: 8 }}>
                        {msg.isNew && (
                          <button
                            onClick={() => handleMarkRead(index)}
                            style={{
                              padding: "6px 12px",
                              backgroundColor: "#28a745",
                              color: "#fff",
                              border: "none",
                              borderRadius: "6px",
                              cursor: "pointer",
                              fontSize: "12px",
                              fontWeight: "bold"
                            }}
                          >
                            Mark Read
                          </button>
                        )}
                        <button
                          onClick={() => handleDeleteMessage(index)}
                          style={{
                            padding: "6px 12px",
                            backgroundColor: "#dc3545",
                            color: "#fff",
                            border: "none",
                            borderRadius: "6px",
                            cursor: "pointer",
                            fontSize: "12px",
                            fontWeight: "bold"
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <p style={{ color: "#555", marginBottom: "5px" }}>{msg.message}</p>
                    <div style={{ color: "#999", fontSize: "12px" }}>{msg.timestamp}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "40px", color: "#999" }}>
                <p>No messages yet.</p>
              </div>
            )}
          </div>
        )}

        {/* Quiz Attempts Tab */}
        {activeTab === "quizzes" && (
          <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "30px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)" }}>
            <h2 style={{ color: "#333", fontSize: "22px", marginBottom: "20px", marginTop: "0" }}>
              Quiz Attempts
            </h2>
            {quizAttempts.length > 0 ? (
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
                      <th style={{ padding: "12px", textAlign: "left", color: "#333", fontWeight: "bold" }}>User</th>
                      <th style={{ padding: "12px", textAlign: "left", color: "#333", fontWeight: "bold" }}>Quiz Type</th>
                      <th style={{ padding: "12px", textAlign: "center", color: "#333", fontWeight: "bold" }}>Score</th>
                      <th style={{ padding: "12px", textAlign: "center", color: "#333", fontWeight: "bold" }}>Percentage</th>
                      <th style={{ padding: "12px", textAlign: "left", color: "#333", fontWeight: "bold" }}>Date</th>
                      <th style={{ padding: "12px", textAlign: "left", color: "#333", fontWeight: "bold" }}>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quizAttempts.map((attempt, index) => (
                      <tr key={index} style={{ borderBottom: "1px solid #eee" }}>
                        <td style={{ padding: "12px", color: "#333" }}>{attempt.user || "Unknown"}</td>
                        <td style={{ padding: "12px", color: "#333" }}>{attempt.quizType || "N/A"}</td>
                        <td style={{ padding: "12px", textAlign: "center", color: "#333", fontWeight: "bold" }}>{attempt.score || 0}/{attempt.total || 0}</td>
                        <td style={{ padding: "12px", textAlign: "center", color: attempt.percentage >= 70 ? "#28a745" : attempt.percentage >= 50 ? "#ffc107" : "#dc3545", fontWeight: "bold" }}>
                          {attempt.percentage || 0}%
                        </td>
                        <td style={{ padding: "12px", color: "#666" }}>{attempt.date || "N/A"}</td>
                        <td style={{ padding: "12px", color: "#999", fontSize: "12px" }}>{attempt.timestamp || "N/A"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "40px", color: "#999" }}>
                <p>No quiz attempts yet.</p>
              </div>
            )}
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "30px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)" }}>
            <h2 style={{ color: "#333", fontSize: "22px", marginBottom: "20px", marginTop: "0" }}>
              System Settings
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ padding: "20px", backgroundColor: "#fff3cd", borderRadius: "8px", borderLeft: "4px solid #ffc107" }}>
                <strong style={{ color: "#856404" }}>🔐 Data Management</strong>
                <p style={{ color: "#666", marginTop: "10px", marginBottom: "15px" }}>
                  Clear all user data, quiz history, and messages from the system. This action cannot be undone.
                </p>
                <button
                  onClick={handleClearAllData}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#dc3545",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "bold"
                  }}
                >
                  Clear All Data
                </button>
              </div>
              <div style={{ padding: "20px", backgroundColor: "#e6ffed", borderRadius: "8px", borderLeft: "4px solid #28a745" }}>
                <strong style={{ color: "#28a745" }}>📭 Message Controls</strong>
                <p style={{ color: "#666", marginTop: "10px", marginBottom: "10px" }}>
                  Manage unread messages: mark all messages as read for the admin inbox.
                </p>
                <button
                  onClick={handleMarkAllRead}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#28a745",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    marginRight: "10px"
                  }}
                >
                  Mark All Read
                </button>
              </div>
              <div style={{ padding: "20px", backgroundColor: "#e8f4f8", borderRadius: "8px", borderLeft: "4px solid #0066cc" }}>
                <strong style={{ color: "#0066cc" }}>📝 Platform Version</strong>
                <p style={{ color: "#666", marginTop: "10px", marginBottom: "0" }}>
                  Cultural Explorer v1.0.0 | Built with React & Vite
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;