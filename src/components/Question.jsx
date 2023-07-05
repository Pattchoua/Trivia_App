import { useState } from "react";
import ProgressBar from "./ProgressBar";
import BackgroundMusic from "./BackgroundMusic";
import Review from "./Review";
import Answer from "./Answer";
import NavigationButton from "./NavigationButton";
import audioFile from "../assets/Bum.mp3";


//State Initialization
const Question = ({ questions }) => {
  //const initialUserAnswers = Array(questions.length).fill("");
  const [userAnswers, setUserAnswers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progress, setProgress] = useState(0);


// Answer selection
  const handleAnswerSelection = (currentQuestionIndex, answer) => {
    setUserAnswers((prevAnswer) => {
      const updatedAnswers = [...prevAnswer];
      updatedAnswers[currentQuestionIndex] = answer;
      return updatedAnswers;
    });
  };

//Navigation Functions
  const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setProgress((prevProgress) => prevProgress + 1);
  };
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setProgress((prevProgress) => prevProgress - 1);
    }
  };

  //Form Submission
  const handleSubmit = () => {
      setIsSubmitted(true);
      setProgress(questions.length);
  };

  // Restarsting the Survey
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setIsSubmitted(false);
    setProgress(0);
  };

  //conditional rendering

  if (isSubmitted) {
    return <Review questions={questions} 
    userAnswers={userAnswers}
    handleRestart={handleRestart} 
    />;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h1>-- Survey --</h1>
      <ProgressBar progress={progress} total={questions.length} />
      <hr />
      {currentQuestion && (
        <div>
          <h3>{currentQuestion.question}</h3>
          <Answer
            Answers={currentQuestion.answers}
            currentQuestionIndex={currentQuestionIndex}
            handleAnswerSelection={handleAnswerSelection}
            isSubmitted={isSubmitted}
            currentUserAnswer={userAnswers[currentQuestionIndex]}
          />
          <hr />
          <NavigationButton
            handleNextQuestion={handleNextQuestion}
            handlePreviousQuestion={handlePreviousQuestion}
            handleSubmit={handleSubmit}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            isSubmitted={isSubmitted}
            selectedAnswer={userAnswers[currentQuestionIndex]}
          />
        </div>
      )}
      <BackgroundMusic musicUrl={audioFile} />
    </div>
  );
};

export default Question;
