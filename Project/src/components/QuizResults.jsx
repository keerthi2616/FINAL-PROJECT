import React from "react";

const QuizResults = ({ quiz, score, totalQuestions, answers, onRestart, onSaveResult }) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  React.useEffect(() => {
    // Save quiz result when component mounts
    if (onSaveResult) {
      onSaveResult();
    }
  }, [onSaveResult]);

  const getResultMessage = () => {
    if (percentage === 100) return "🏆 Perfect Score! Outstanding!";
    if (percentage >= 80) return "🎉 Excellent! Great job!";
    if (percentage >= 60) return "👍 Good! Keep learning!";
    if (percentage >= 40) return "📚 Not bad, but review the material!";
    return "💪 Keep practicing! You'll improve!";
  };

  const getResultColor = () => {
    if (percentage >= 80) return "#28a745";
    if (percentage >= 60) return "#0066cc";
    if (percentage >= 40) return "#ffc107";
    return "#dc3545";
  };

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
      {/* Score Display */}
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "12px",
          padding: "40px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          marginBottom: "30px"
        }}
      >
        <h1 style={{ color: "#333", fontSize: "32px", marginBottom: "20px", marginTop: "0" }}>
          Quiz Complete!
        </h1>

        {/* Score Circle */}
        <div
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            backgroundColor: getResultColor(),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 30px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ color: "#fff", fontSize: "50px", fontWeight: "bold", lineHeight: "1" }}>
              {score}/{totalQuestions}
            </div>
            <div style={{ color: "#fff", fontSize: "18px", marginTop: "5px" }}>
              {percentage}%
            </div>
          </div>
        </div>

        {/* Result Message */}
        <h2 style={{ color: getResultColor(), fontSize: "24px", marginBottom: "30px" }}>
          {getResultMessage()}
        </h2>

        {/* Statistics */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginBottom: "30px"
          }}
        >
          <div style={{ padding: "15px", backgroundColor: "#d4edda", borderRadius: "8px" }}>
            <div style={{ color: "#155724", fontSize: "24px", fontWeight: "bold" }}>
              {score}
            </div>
            <div style={{ color: "#155724", fontSize: "14px" }}>Correct Answers</div>
          </div>
          <div style={{ padding: "15px", backgroundColor: "#f8d7da", borderRadius: "8px" }}>
            <div style={{ color: "#721c24", fontSize: "24px", fontWeight: "bold" }}>
              {totalQuestions - score}
            </div>
            <div style={{ color: "#721c24", fontSize: "14px" }}>Incorrect Answers</div>
          </div>
        </div>

        {/* Restart Button */}
        <button
          onClick={onRestart}
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
          ← Back to Quiz Selection
        </button>
      </div>

      {/* Detailed Review */}
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "12px",
          padding: "30px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)"
        }}
      >
        <h3 style={{ color: "#333", fontSize: "20px", marginBottom: "20px", marginTop: "0" }}>
          📋 Review Your Answers
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {answers.map((answer, index) => (
            <div
              key={index}
              style={{
                padding: "15px",
                borderRadius: "8px",
                borderLeft: answer.isCorrect ? "4px solid #28a745" : "4px solid #dc3545",
                backgroundColor: answer.isCorrect ? "#f0f8f5" : "#fff5f5"
              }}
            >
              <div style={{ marginBottom: "10px" }}>
                <strong style={{ color: "#333" }}>Q{index + 1}: {answer.question}</strong>
              </div>
              <div style={{ fontSize: "14px", marginBottom: "8px" }}>
                <span style={{ color: "#666" }}>Your Answer: </span>
                <span style={{ color: answer.isCorrect ? "#28a745" : "#dc3545", fontWeight: "bold" }}>
                  {quiz.questions[index].options[answer.selected]}
                  {answer.isCorrect ? " ✓" : " ✗"}
                </span>
              </div>
              {!answer.isCorrect && (
                <div style={{ fontSize: "14px" }}>
                  <span style={{ color: "#666" }}>Correct Answer: </span>
                  <span style={{ color: "#28a745", fontWeight: "bold" }}>
                    {quiz.questions[index].options[answer.correct]}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizResults;