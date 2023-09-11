import { useState } from "react";
import style from "./question.module.scss";
import Navbar from "../../components/navbar/Navbar";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import LoaderIcon from "react-loader-icon";
import { GenerateReviewApi } from "../../api/questionApi";
const Question = () => {
  const navigate = useNavigate(); 
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([null, null, null]);

  const handleAnswerClick = (index, answer) => {
    const newAnswer = [...selectedAnswers];
    newAnswer[index] = answer;
    setSelectedAnswers(newAnswer);
  };

  const handleGenerate = () => {
    setIsLoading(true);
    GenerateReviewApi({
      reccomendation1: selectedAnswers[0],
      reccomendation2: selectedAnswers[1],
      reccomendation3: selectedAnswers[2],
    })
      .then((res) => {
        console.log(res);
        localStorage.setItem("review", res.data.review);
        console.log(selectedAnswers);
        setIsLoading(false);
        navigate("/note");

      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
    console.log("HEY");
  };
  return (
    <div className={`${style.Question} w-full h-screen flex flex-col`}>
      <Navbar />
      <div className={`w-[90%] flex flex-col mx-auto`}>
        <div className={`w-full flex flex-col`}>
          <h1 className={`text-xl text-[#898989] font-bold mt-3 mb-11`}>
            Select an answer
          </h1>
          {[0, 1, 2].map((questionIndex) => (
            <div className="flex flex-col mb-10" key={questionIndex}>
              <h1
                className={`
              font-bold text-xl
              `}
              >
                How was your overall experience?
              </h1>
              <div className="flex flex-wrap gap-4">
                {["Good", "Average", "Excellent", "Bad"].map((answer) => (
                  <button
                    key={answer}
                    onClick={() => handleAnswerClick(questionIndex, answer)}
                    className={`flex items-center px-4 py-4 border rounded-lg  
                    ${
                      selectedAnswers[questionIndex] === answer
                        ? "border-[#4F46BA]"
                        : ""
                    }
                    `}
                  >
                    <span
                      className={`w-4 h-4 border rounded-full mr-2 ${
                        selectedAnswers[questionIndex] === answer
                          ? "bg-[#4F46BA]"
                          : "bg-white border-[#BBBBBB]"
                      }`}
                    ></span>
                    {answer}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <div className="flex w-full gap-6 mt-12 justify-center">
            <button
              className="
            font-bold text-xl text-[#21243D]
            "
            >
              Back
            </button>
            <button
              onClick={handleGenerate}
              disabled={selectedAnswers.includes(null) || isLoading}
              className={`bg-[#4F46BA] text-white flex items-center justify-center px-12 py-4 rounded-[17px] font-bold`}
            >
              {
                isLoading ? <LoaderIcon type="cylon" color="#fff" size={25} /> : "Generate"
              }
              {/* Generate */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Question;
