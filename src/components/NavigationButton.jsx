
const NavigationButton = ({
  handleNextQuestion,
  handlePreviousQuestion,
  handleSubmit,
  currentQuestionIndex,
  totalQuestions,
  isSubmitted,
  selectedAnswer,
}) => {
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  return (
    <div>
      {!isFirstQuestion && (
        <button
          className="previous_button"
          onClick={handlePreviousQuestion}
          disabled={isSubmitted}
        >
          Previous
        </button>
      )}
      {isLastQuestion ? (
        <button
          className="submit_button"
          onClick={handleSubmit}
          disabled={!selectedAnswer || isSubmitted}
        >
          Submit
        </button>
      ) : (
        selectedAnswer && (
          <button
            className="next_button"
            onClick={handleNextQuestion}
            disabled={isSubmitted}
          >
            Next
          </button>
        )
      )}
    </div>
  );
};

export default NavigationButton;

