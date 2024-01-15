import { useState } from "react";

const QuestionCard = ({question, bringNextQuestion }) => {
  const [selectedBtn, setSelectedBtn] = useState(null);

  const handleClick = (e, value) => {
    question.answer = value;
    setSelectedBtn(value);
    bringNextQuestion();
    setTimeout(moveNext, 1000)
  };

  const moveNext = () => {
    const element = document.getElementById('main')
        //element.scrollTop += num
        element.scrollTo({top: element.scrollTop + 600, behavior: "smooth"})
 
  }
  return (
    <div className="h-screen text-blue-600 flex justify-center items-center snap-always snap-start">
      <div className="">
        <p className="font-semibold"><small>{question.index}</small></p>
        <h3 className="text-3xl ">{question.title}</h3>
        <div className="mt-8 grid grid-cols-5 gap-2 justify-center">
          <button
            onClick={(e) => {
              handleClick(e, 1);
            }}
            className={
              `aspect-square flex justify-center items-center border-blue-500 border rounded backdrop-brightness-90 ` +
              (selectedBtn === 1 ? "bg-blue-900 text-white" : "")
            }
          >
            1
          </button>
          <button
            onClick={(e) => {
              handleClick(e, 2);
            }}
            className={
              `aspect-square flex justify-center items-center border-blue-500 border rounded backdrop-brightness-90 ` +
              (selectedBtn === 2 ? "bg-blue-900 text-white" : "")
            }
          >
            2
          </button>
          <button
            onClick={(e) => {
              handleClick(e, 3);
            }}
            className={
              `aspect-square flex justify-center items-center border-blue-500 border rounded backdrop-brightness-90 ` +
              (selectedBtn === 3 ? "bg-blue-900 text-white" : "")
            }
          >
            3
          </button>
          <button
            onClick={(e) => {
              handleClick(e, 4);
            }}
            className={
              `aspect-square flex justify-center items-center border-blue-500 border rounded backdrop-brightness-90 ` +
              (selectedBtn === 4 ? "bg-blue-900 text-white" : "")
            }
          >
            4
          </button>
          <button
            onClick={(e) => {
              handleClick(e, 5);
            }}
            className={
              `aspect-square flex justify-center items-center border-blue-500 border rounded backdrop-brightness-90 ` +
              (selectedBtn === 5 ? "bg-blue-900 text-white" : "")
            }
          >
            5
          </button>
          <button
            onClick={(e) => {
              handleClick(e, 6);
            }}
            className={
              `aspect-square flex justify-center items-center border-blue-500 border rounded backdrop-brightness-90 ` +
              (selectedBtn === 6 ? "bg-blue-900 text-white" : "")
            }
          >
            6
          </button>
          <button
            onClick={(e) => {
              handleClick(e, 7);
            }}
            className={
              `aspect-square flex justify-center items-center border-blue-500 border rounded backdrop-brightness-90 ` +
              (selectedBtn === 7 ? "bg-blue-900 text-white" : "")
            }
          >
            7
          </button>
          <button
            onClick={(e) => {
              handleClick(e, 8);
            }}
            className={
              `aspect-square flex justify-center items-center border-blue-500 border rounded backdrop-brightness-90 ` +
              (selectedBtn === 8 ? "bg-blue-900 text-white" : "")
            }
          >
            8
          </button>
          <button
            onClick={(e) => {
              handleClick(e, 9);
            }}
            className={
              `aspect-square flex justify-center items-center border-blue-500 border rounded backdrop-brightness-90 ` +
              (selectedBtn === 9 ? "bg-blue-900 text-white" : "")
            }
          >
            9
          </button>
          <button
            onClick={(e) => {
              handleClick(e, 10);
            }}
            className={
              `aspect-square flex justify-center items-center border-blue-500 border rounded backdrop-brightness-90 ` +
              (selectedBtn === 10 ? "bg-blue-900 text-white" : "")
            }
          >
            10
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
