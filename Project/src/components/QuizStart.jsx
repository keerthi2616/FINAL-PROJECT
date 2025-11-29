import React from "react";

const QuizStart = ({ quizzes, onStartQuiz }) => {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", color: "#0066cc", fontSize: "40px", marginBottom: "10px" }}>
        🎯 Interactive Quiz
      </h1>
      <p style={{ textAlign: "center", color: "#666", fontSize: "18px", marginBottom: "40px" }}>
        Test your knowledge about Indian culture, monuments, festivals, and arts!
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          padding: "20px"
        }}
      >
        {Object.entries(quizzes).map(([key, quiz]) => (
          <div
            key={key}
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              padding: "25px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
              border: "2px solid #e0e0e0",
              transition: "all 0.3s ease",
              cursor: "pointer",
              textAlign: "center"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 102, 204, 0.2)";
              e.currentTarget.style.borderColor = "#0066cc";
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
              e.currentTarget.style.borderColor = "#e0e0e0";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <h2 style={{ color: "#0066cc", fontSize: "24px", marginBottom: "10px", marginTop: "0" }}>
              {quiz.title}
            </h2>
            <p style={{ color: "#666", fontSize: "14px", marginBottom: "20px", minHeight: "40px" }}>
              {quiz.description}
            </p>
            <p style={{ color: "#999", fontSize: "13px", marginBottom: "20px" }}>
              📝 {quiz.questions.length} Questions
            </p>
            <button
              onClick={() => onStartQuiz(key)}
              style={{
                padding: "12px 30px",
                fontSize: "16px",
                fontWeight: "bold",
                color: "#fff",
                backgroundColor: "#0066cc",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "background-color 0.3s",
                width: "100%"
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#0052a3")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#0066cc")}
            >
              Start Quiz →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizStart;