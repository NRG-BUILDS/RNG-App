import { useState } from "react";
import QuestionCard from "./QuestionCard..";

const QuestionView = () => {
  const totalQuestions = [
    {
      title: "What scale would you give literacy in your area?",
      answer: null,
      index: 1
    },
    {
      title: "2. WHat is another name for???",
      answer: null,
      index: 2
    },
    {
      title: "3. WHat is anothe r name for???",
      answer: null,
      index: 3
    },
    {
      title: "4. WHat is anothe r name for???",
      answer: null,
      index: 4
    },
    {
      title: "5. WHat is anothe r name for???",
      answer: null,
      index: 5
    },
  ];
  const [viewedQuestion, setViewedQuestion] = useState([totalQuestions[0]])
  const [index, setIndex] = useState(1)
  const bringNextQuestion = () => {
    setIndex(index + 1)
    if (index < totalQuestions.length) {
        setViewedQuestion([...viewedQuestion, totalQuestions[index]])
    } else {
        console.log(viewedQuestion)
    }
    
  }

  return (
    <div className="max-w-3xl px-4">
      <div className="">
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory" id="main">
           {viewedQuestion.map((question) => (
                <QuestionCard question={question} bringNextQuestion={bringNextQuestion} key={question.title}/>
          
        ))} 
        </div>
        <div>
            Complete Qeustioons above
        </div>
        
      </div>
    </div>
  );
};

export default QuestionView;
