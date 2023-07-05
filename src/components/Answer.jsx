
const Answer = ({
  currentQuestionIndex,
  currentUserAnswer,
  handleAnswerSelection,
  Answers
}) => {
  return (
    <div>
      {Answers.map((answer) => (
        <button
          key={answer}
          onClick={() => handleAnswerSelection(currentQuestionIndex, answer)}
          className={currentUserAnswer === answer ? "selected" : ""} // classname conditional rendering
        >
          {answer}
        </button>
      ))}
    </div>
  );
};

export default Answer;
