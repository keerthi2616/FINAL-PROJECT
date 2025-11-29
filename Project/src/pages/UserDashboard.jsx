import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    joinDate: "",
    quizzesTaken: 0,
    averageScore: 0,
    favorites: []
  });
  const [quizHistory, setQuizHistory] = useState([]);
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();

  useEffect(() => {
    // Load user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("userProfile") || "{}");
    const userSignup = JSON.parse(localStorage.getItem("userSignup") || "{}");
    const currentUser = localStorage.getItem("currentUser");
    
    // Get quiz history for current user only
    const allQuizHistory = JSON.parse(localStorage.getItem("quizHistory") || "[]");
    const userQuizHistory = allQuizHistory.filter(q => q.user === currentUser);
    
    setUserData({
      name: userSignup.username || storedUser.name || currentUser || "User",
      email: userSignup.email || storedUser.email || "user@example.com",
      joinDate: storedUser.joinDate || new Date().toLocaleDateString(),
      quizzesTaken: userQuizHistory.length,
      averageScore: userQuizHistory.length > 0 
        ? Math.round(userQuizHistory.reduce((sum, q) => sum + q.percentage, 0) / userQuizHistory.length)
        : 0,
      favorites: JSON.parse(localStorage.getItem("userFavorites") || "[]")
    });

    setQuizHistory(userQuizHistory);
  }, []);

  const handleAddFavorite = (item) => {
    if (!userData.favorites.includes(item)) {
      const updatedFavorites = [...userData.favorites, item];
      setUserData({ ...userData, favorites: updatedFavorites });
      localStorage.setItem("userFavorites", JSON.stringify(updatedFavorites));
    }
  };

  const handleRemoveFavorite = (item) => {
    const updatedFavorites = userData.favorites.filter(fav => fav !== item);
    setUserData({ ...userData, favorites: updatedFavorites });
    localStorage.setItem("userFavorites", JSON.stringify(updatedFavorites));
  };

  const handleDeleteQuizResult = (index) => {
    const updatedHistory = quizHistory.filter((_, i) => i !== index);
    setQuizHistory(updatedHistory);
    localStorage.setItem("quizHistory", JSON.stringify(updatedHistory));
  };

  return (
    <div className="dashboard">
      <div className="container">
        {/* Header */}
        <div className="dashboard-header">
          <h1>👤 User Dashboard</h1>
          <p>Welcome back, <strong>{userData.name}</strong>!</p>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card blue">
            <div className="value">{userData.quizzesTaken}</div>
            <div className="label">Quizzes Completed</div>
          </div>
          <div className="stat-card purple">
            <div className="value" style={{ color: '#7c4dff' }}>{userData.averageScore}%</div>
            <div className="label">Average Score</div>
          </div>
          <div className="stat-card green">
            <div className="value" style={{ color: '#28a745' }}>{userData.favorites.length}</div>
            <div className="label">Saved Favorites</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs">
          <button className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>📋 Profile</button>
          <button className={`tab-button ${activeTab === 'history' ? 'active' : ''}`} onClick={() => setActiveTab('history')}>📚 Quiz History</button>
          <button className={`tab-button ${activeTab === 'favorites' ? 'active' : ''}`} onClick={() => setActiveTab('favorites')}>⭐ Favorites</button>
        </div>

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="card-panel">
            <h2>Profile Information</h2>
            <div className="profile-grid">
              <div className="profile-row"><strong className="muted">👤 Name:</strong><span>{userData.name}</span></div>
              <hr />
              <div className="profile-row"><strong className="muted">📧 Email:</strong><span>{userData.email}</span></div>
              <hr />
              <div className="profile-row"><strong className="muted">📅 Member Since:</strong><span>{userData.joinDate}</span></div>
              <hr />
              <div className="profile-row"><strong className="muted">🎯 Total Quizzes:</strong><span>{userData.quizzesTaken}</span></div>
              <hr />
              <div className="profile-row"><strong className="muted">📊 Average Score:</strong><span style={{ color: '#0066cc', fontWeight: 700 }}>{userData.averageScore}%</span></div>
            </div>
          </div>
        )}

        {/* History Tab */}
        {activeTab === "history" && (
          <div className="card-panel">
            <h2>Quiz History</h2>
            {quizHistory.length > 0 ? (
              <div className="history-list">
                {quizHistory.map((quiz, index) => (
                  <div className="history-item" key={index}>
                    <div>
                      <strong style={{ color: '#333', fontSize: 16 }}>{quiz.quizType || 'Quiz'}</strong>
                      <div className="meta">Score: {quiz.score}/{quiz.total} ({quiz.percentage}%) • {quiz.date || new Date().toLocaleDateString()}</div>
                    </div>
                    <button className="btn-delete" onClick={() => handleDeleteQuizResult(index)}>Delete</button>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: 40, color: '#999' }}>
                <p style={{ fontSize: 16 }}>No quiz history yet. Start taking quizzes!</p>
                <button className="tab-button" onClick={() => navigate('/quiz')} style={{ background: '#0066cc', color:'#fff', borderRadius:8 }}>Take a Quiz →</button>
              </div>
            )}
          </div>
        )}

        {/* Favorites Tab */}
        {activeTab === "favorites" && (
          <div className="card-panel">
            <h2>Saved Favorites</h2>
            <div className="favorites-grid">
              {['Taj Mahal','Diwali','Blue Pottery','Holi','Kathakali'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleAddFavorite(item)}
                  className={`fav-button ${userData.favorites.includes(item) ? 'active' : ''}`}
                >
                  {userData.favorites.includes(item) ? `✓ ${item}` : `☆ ${item}`}
                </button>
              ))}
            </div>
            {userData.favorites.length > 0 && (
              <div>
                <h3 style={{ color: '#333', fontSize: 16, marginBottom: 15 }}>Your Favorites:</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {userData.favorites.map((fav) => (
                    <div key={fav} className="fav-pill">
                      <span style={{ color: '#155724' }}>⭐ {fav}</span>
                      <button onClick={() => handleRemoveFavorite(fav)} style={{ background:'transparent', border:'none', color:'#dc3545', cursor:'pointer', fontSize:16 }}>✕</button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
