
import ProgressBar from "./ProgressBar";

const Review = ({ questions, userAnswers, handleRestart }) => {
  let finalScore = 0;

  return (
    <div>
      <h1>-- Survey Results --</h1>
      <ProgressBar progress={userAnswers.length} total={questions.length} />
      <hr />
      {questions.map((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correctAnswer;

        if (isCorrect) {
          finalScore++;
        }

        return (
          <div key={question.id}>
            <h3>{question.question}</h3>
            <p className="Your_answer">Your Answer: {userAnswer[index]}</p>
            {isCorrect ? (
              <p className="correct-answer">Perfect! You are absolutely correct!</p>
            ) : (
              <>
                <p className="incorrect-answer">Oops.. Incorrect! </p>
                <p className="correct_answer">
                  Correct Answer: {question.correctAnswer}
                </p>
              </>
            )}
          </div>
        );
      })}
      <hr />
      <h1 className="final_score">
        Final Score: {finalScore}/{questions.length}
      </h1>
      <button className="restart_button" onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
};


export default Review;



