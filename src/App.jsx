

import Question from "./components/Question";
import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {

  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);
  
    const fetchQuestion = () => {
        axios
            .get("https://wd40-trivia.onrender.com/api/questions")
            .then((response) => {
                setQuestions(response.data);
            })
            .catch((error) => {setError(error.message)});
        };
    
    useEffect(() => {
        fetchQuestion();
    }, []);
  return (
    <div className="App">
    
      <div className="block">
          {error ? (<p>Error:{error}</p>) : (<Question questions={questions}/> )} {/**conditioning rendering */}
      </div>
    </div>
  );
}

