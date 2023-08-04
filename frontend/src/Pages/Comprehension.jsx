import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Comprehension = () => {
  const [passage, setPassage] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preDefault();
    const data = {
      passage: passage,
      questionText: questionText,
      options: [option1, option2, option3],
    };
    axios
      .post("https://tasty-teal-octopus.cyclic.app/comprehension", data)
      .then((response) => {
        console.log(response);
      });
  };

  const handleClick = () => {
    navigate ("/quizz")
  }


  return (
    <div className="flex justify-center items-center h-screen space-x-20">
      <div>
      </div>
      <form onSubmit={handleSubmit}>
        <h2 className="font-bold text-lg text-center">Question</h2>
        <textarea
          placeholder="Type passage here"
          value={passage}
          onChange={(e) => setPassage(e.target.value)}
          className="w-full border-2 p-4"
        />
        <div className="w-full">
          <h3 className="text-center mt-4 font-bold">Question 1.1</h3>
          <input
            type="text"
            placeholder="Question Text"
            required
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            className="w-full border-2 p-4"
          />
          <input
            type="text"
            placeholder="Option 1"
            required
            value={option1}
            onChange={(e) => setOption1(e.target.value)}
            className="w-full border-2 p-4 mt-4"
          />
          <input
            type="text"
            placeholder="Option 2"
            required
            value={option2}
            onChange={(e) => setOption2(e.target.value)}
            className="w-full border-2 p-4"
          />
          <input
            type="text"
            placeholder="Option 3"
            value={option3}
            onChange={(e) => setOption3(e.target.value)}
            className="w-full border-2 p-4"
          />
          <input
            type="text"
            placeholder="enter answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full border-2 p-4 mt-10"
          />
        </div>
        <button
          type="submit"
          className="w-40 m-auto mt-5 bg-blue-500 text-white p-4 rounded-lg"
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Comprehension;
