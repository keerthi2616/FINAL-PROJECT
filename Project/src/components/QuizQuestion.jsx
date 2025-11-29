import React, { useState } from "react";

const QuizQuestion = ({ quiz, currentQuestion, totalQuestions, onAnswer, score }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const question = quiz.questions[currentQuestion];
  const isAnswered = selectedAnswer !== null;

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
  };

  const handleNext = () => {
    onAnswer(selectedAnswer);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
      {/* Header */}
      <div style={{ marginBottom: "30px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
          <span style={{ color: "#0066cc", fontSize: "14px", fontWeight: "bold" }}>
            Question {currentQuestion + 1} of {totalQuestions}
          </span>
          <span style={{ color: "#0066cc", fontSize: "14px", fontWeight: "bold" }}>
            Score: {score}/{totalQuestions}
          </span>
        </div>

        {/* Progress Bar */}
        <div
          style={{
            width: "100%",
            height: "8px",
            backgroundColor: "#e0e0e0",
            borderRadius: "10px",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              width: `${progressPercentage}%`,
              height: "100%",
              backgroundColor: "#0066cc",
              transition: "width 0.3s ease"
            }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "12px",
          padding: "30px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          marginBottom: "30px"
        }}
      >
        {/* Question */}
        <h2 style={{ color: "#333", fontSize: "22px", marginBottom: "30px", marginTop: "0" }}>
          {question.question}
        </h2>

        {/* Options */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "25px" }}>
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === question.correct;
            let buttonStyle = {
              padding: "15px",
              fontSize: "16px",
              border: "2px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
              cursor: isAnswered ? "default" : "pointer",
              textAlign: "left",
              transition: "all 0.3s ease",
              fontWeight: isSelected ? "bold" : "normal"
            };

            if (isAnswered) {
              if (isCorrect) {
                buttonStyle.backgroundColor = "#d4edda";
                buttonStyle.borderColor = "#28a745";
                buttonStyle.color = "#155724";
              } else if (isSelected && !isCorrect) {
                buttonStyle.backgroundColor = "#f8d7da";
                buttonStyle.borderColor = "#dc3545";
                buttonStyle.color = "#721c24";
              }
            } else if (isSelected) {
              buttonStyle.backgroundColor = "#cce5ff";
              buttonStyle.borderColor = "#0066cc";
              buttonStyle.color = "#0066cc";
            }

            return (
              <button
                key={index}
                onClick={() => !isAnswered && handleAnswer(index)}
                style={buttonStyle}
                onMouseEnter={(e) => {
                  if (!isAnswered) {
                    e.target.style.borderColor = "#0066cc";
                    e.target.style.backgroundColor = "#f0f8ff";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isAnswered && !isSelected) {
                    e.target.style.borderColor = "#ddd";
                    e.target.style.backgroundColor = "#f9f9f9";
                  }
                }}
              >
                <span style={{ marginRight: "10px" }}>
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
                {isAnswered && isCorrect && " ✓"}
                {isAnswered && isSelected && !isCorrect && " ✗"}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div
            style={{
              backgroundColor: "#fffbea",
              border: "2px solid #ffc107",
              borderRadius: "8px",
              padding: "15px",
              marginBottom: "20px",
              color: "#856404"
            }}
          >
            <strong>💡 Explanation:</strong> {question.explanation}
          </div>
        )}

        {/* Next Button */}
        {isAnswered && (
          <button
            onClick={handleNext}
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
            {currentQuestion === 5 - 1 ? "See Results" : "Next Question"} →
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizQuestion;