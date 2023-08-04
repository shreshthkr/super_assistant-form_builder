import React, { useEffect, useState } from 'react'
import axios from "axios";
const QuizzPage = () => {
  
    const [showResponse, setShowResponse] = useState(false);
    const [quizData, setQuizData] = useState([]);
  
    useEffect(() => {
      // Fetch quiz data from the backend
      axios.get("https://tasty-teal-octopus.cyclic.app/comprehension")
        .then((response) => {
          setQuizData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching quiz data: ", error);
        });
    }, []);
    const handleClick = () => {
        if (quizData.length > 0) {
        const questionId = quizData[0]._id;
        axios.delete(`https://tasty-teal-octopus.cyclic.app/comprehension/${questionId}`)
        .then((res => {
            console.log(res)
        }))
        .catch((err) => {
            console.log(err)
        })
    
        setShowResponse((prevShowResponse) => !prevShowResponse);
      };
    }
    return (
      <div className="flex flex-row justify-center items-center h-screen space-x-20 mt-[-160]">
        <div>
          <p className="text-center mb-4">{showResponse && "Thank you for the response!"}</p>
          {quizData.length > 0 && (
            <div>
              <h2 className="font-bold text-lg text-center">Passage</h2>
              <p>{quizData[0].passage}</p>
  
              <h3 className="text-center mt-4 font-bold">{quizData[0].questionText}</h3>
              <div className="flex flex-col">
                {quizData[0].options.map((option, index) => (
                  <label key={index}>
                    <input
                      type="radio"
                      value={option}
                      className="mr-2"
                      name="option"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
       <button className="px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={handleClick}>Submit</button>
      </div>
    );
}

export default QuizzPage
