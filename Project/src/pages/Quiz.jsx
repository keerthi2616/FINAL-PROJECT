import React, { useState } from "react";
import QuizStart from "../components/QuizStart";
import QuizQuestion from "../components/QuizQuestion";
import QuizResults from "../components/QuizResults";

const Quiz = () => {
  const [quizState, setQuizState] = useState("start"); // start, quiz, results
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizType, setQuizType] = useState(null);

  const currentUser = localStorage.getItem("currentUser");

  const saveQuizResult = (quizTypeKey, finalScore, totalQuestions, finalAnswers) => {
    const quizzes = {
      monuments: "Indian Monuments Quiz",
      festivals: "Indian Festivals Quiz",
      artcraft: "Indian Arts & Crafts Quiz"
    };
    
    const quizHistory = JSON.parse(localStorage.getItem("quizHistory") || "[]");
    quizHistory.push({
      user: currentUser,
      quizType: quizzes[quizTypeKey],
      score: finalScore,
      total: totalQuestions,
      percentage: Math.round((finalScore / totalQuestions) * 100),
      date: new Date().toLocaleDateString(),
      timestamp: new Date().toLocaleString(),
      answers: finalAnswers
    });
    localStorage.setItem("quizHistory", JSON.stringify(quizHistory));
  };

  const quizzes = {
    monuments: {
      title: "Indian Monuments Quiz",
      description: "Test your knowledge about famous Indian monuments",
      questions: [
        {
          id: 1,
          question: "Which is the tallest monument in India?",
          options: ["Taj Mahal", "India Gate", "Qutub Minar", "Statue of Unity"],
          correct: 3,
          explanation: "The Statue of Unity in Gujarat is the tallest statue in the world."
        },
        {
          id: 2,
          question: "In which year was the Taj Mahal built?",
          options: ["1562", "1632", "1672", "1732"],
          correct: 1,
          explanation: "The Taj Mahal was built between 1632 and 1653 by Emperor Shah Jahan."
        },
        {
          id: 3,
          question: "Which monument was built by Ashoka?",
          options: ["Taj Mahal", "Qutub Minar", "Sanchi Stupa", "Charminar"],
          correct: 2,
          explanation: "Sanchi Stupa is one of the oldest stone structures in India, built by Emperor Ashoka."
        },
        {
          id: 4,
          question: "Where is the Red Fort located?",
          options: ["Agra", "Delhi", "Jaipur", "Hyderabad"],
          correct: 1,
          explanation: "The Red Fort (Lal Qila) is located in Delhi and was built by Emperor Shah Jahan."
        },
        {
          id: 5,
          question: "Which is also known as 'The Gateway of India'?",
          options: ["Taj Mahal", "India Gate", "Gateway of India", "Charminar"],
          correct: 2,
          explanation: "The Gateway of India is an iconic monument in Mumbai built in 1911."
        }
      ]
    },
    festivals: {
      title: "Indian Festivals Quiz",
      description: "Test your knowledge about Indian festivals and celebrations",
      questions: [
        {
          id: 1,
          question: "Which festival is known as the 'Festival of Lights'?",
          options: ["Holi", "Diwali", "Eid", "Christmas"],
          correct: 1,
          explanation: "Diwali, celebrated by Hindus, Sikhs, and Buddhists, is known as the Festival of Lights."
        },
        {
          id: 2,
          question: "Which month is Ramadan celebrated?",
          options: ["March", "June", "September", "December"],
          correct: 2,
          explanation: "Ramadan is the 9th month of the Islamic lunar calendar."
        },
        {
          id: 3,
          question: "Holi celebrates the arrival of which season?",
          options: ["Summer", "Spring", "Autumn", "Winter"],
          correct: 1,
          explanation: "Holi, the festival of colors, celebrates the arrival of spring."
        },
        {
          id: 4,
          question: "What is the other name for the New Year in Tamil culture?",
          options: ["Ugadi", "Pongal", "Vishu", "Baisakhi"],
          correct: 1,
          explanation: "Pongal is the harvest festival celebrated in Tamil Nadu during January."
        },
        {
          id: 5,
          question: "Which festival marks the victory of Lord Krishna over a demon?",
          options: ["Dussehra", "Janmashtami", "Navaratri", "Govardhan Puja"],
          correct: 1,
          explanation: "Janmashtami celebrates the birth of Lord Krishna."
        }
      ]
    },
    artcraft: {
      title: "Indian Arts & Crafts Quiz",
      description: "Test your knowledge about Indian traditional arts and crafts",
      questions: [
        {
          id: 1,
          question: "Which art form originated in Kerala?",
          options: ["Bharatanatyam", "Kathakali", "Kathak", "Odissi"],
          correct: 1,
          explanation: "Kathakali is a classical dance form that originated in Kerala."
        },
        {
          id: 2,
          question: "What is the traditional textile art of Rajasthan?",
          options: ["Batik", "Bandhani", "Patola", "Kantha"],
          correct: 1,
          explanation: "Bandhani (tie and dye) is the traditional textile art of Rajasthan."
        },
        {
          id: 3,
          question: "Which pottery style is famous in Jaipur?",
          options: ["Blue Pottery", "Black Pottery", "Terracotta", "Stoneware"],
          correct: 0,
          explanation: "Blue Pottery is the signature craft of Jaipur, Rajasthan."
        },
        {
          id: 4,
          question: "What is the traditional puppet art of Karnataka called?",
          options: ["Kathputli", "Togalu Gombe", "Gombeyatta", "Pavakuttu"],
          correct: 1,
          explanation: "Togalu Gombe is the traditional shadow puppet art form of Karnataka."
        },
        {
          id: 5,
          question: "Which weaving technique is used to create Pashmina shawls?",
          options: ["Hand looming", "Power looming", "Machine weaving", "Digital weaving"],
          correct: 0,
          explanation: "Pashmina shawls are created using traditional hand looming techniques in Kashmir."
        }
      ]
    }
  };

  const startQuiz = (type) => {
    setQuizType(type);
    setQuizState("quiz");
    setCurrentQuestion(0);
    setScore(0);
    setAnswers([]);
  };

  const handleAnswer = (selectedIndex) => {
    const quiz = quizzes[quizType];
    const isCorrect = selectedIndex === quiz.questions[currentQuestion].correct;
    
    setAnswers([
      ...answers,
      {
        question: quiz.questions[currentQuestion].question,
        selected: selectedIndex,
        correct: quiz.questions[currentQuestion].correct,
        isCorrect: isCorrect
      }
    ]);

    if (isCorrect) {
      setScore(score + 1);
    }

    // Move to next question or finish
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizState("results");
    }
  };

  const restartQuiz = () => {
    setQuizState("start");
    setCurrentQuestion(0);
    setScore(0);
    setAnswers([]);
    setQuizType(null);
  };

  return (
    <div style={{ backgroundColor: "#f0f8fc", minHeight: "100vh", paddingTop: "30px", paddingBottom: "30px" }}>
      {quizState === "start" && (
        <QuizStart quizzes={quizzes} onStartQuiz={startQuiz} />
      )}
      
      {quizState === "quiz" && (
        <QuizQuestion
          quiz={quizzes[quizType]}
          currentQuestion={currentQuestion}
          totalQuestions={quizzes[quizType].questions.length}
          onAnswer={handleAnswer}
          score={score}
        />
      )}
      
      {quizState === "results" && (
        <QuizResults
          quiz={quizzes[quizType]}
          score={score}
          totalQuestions={quizzes[quizType].questions.length}
          answers={answers}
          onRestart={restartQuiz}
          onSaveResult={() => saveQuizResult(quizType, score, quizzes[quizType].questions.length, answers)}
        />
      )}
    </div>
  );
};

export default Quiz;