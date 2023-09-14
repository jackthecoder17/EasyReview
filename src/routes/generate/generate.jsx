
import Mainnav from "../../components/mainNavbar/miannav";
import Footer from "../../components/footer/footer";
import { useState } from "react";
import { Link } from "react-router-dom";
const Generate = () => {
  const [selectedAnswers, setSelectedAnswers] = useState([null, null, null]);

  const handleAnswerClick = (index, answer) => {
    const newAnswer = [...selectedAnswers];
    newAnswer[index] = answer;
    setSelectedAnswers(newAnswer);
  };

  return (
    <>
      <div className="relative bg-white max-w-screen-2xl mx-auto h-auto">
        <Mainnav />
        <div
          className={`w-[90%] mx-auto flex items-center flex-col mt-5 text-center`}
        >
          <h3 className="text-[#4F46BA] opensans font-semibold text-lg">
            Generate
          </h3>
          <h1 className="text-[#333] text-4xl font-bold opensans">
            Generate your questions
          </h1>
          <p className="mt-3 lg:w-[45%] mx-auto leading-6">
            Describe your existing or new business in detail, and receive
            feedback oriented questions.
          </p>
        </div>
        <div className="w-[90%] mx-auto flex flex-col items-center justify-center mt-10 mb-10 gap-9 md:gap-0">
          <div className="flex flex-col w-full sm:w-[70%] md:w-[50%] ">
            {/* company name */}
            <label htmlFor="" className="monteserrat flex gap-1">
              Company Name <img src="./star.svg" alt="" className=" w-2 h-2" />{" "}
            </label>
            <input
              type="text"
              className="w-full border border-[#C2C2C2] rounded-[9px] p-3 mt-3 h-[45px]"
              placeholder="Enter your business name"
            />

            {/* Describe Company */}
            <label htmlFor="" className="monteserrat flex gap-1 mt-5">
              Describe Company{" "}
              <img src="./star.svg" alt="" className=" w-2 h-2" />{" "}
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              className="w-full border border-[#C2C2C2] rounded-[9px] p-3 resize-none mt-3"
              placeholder="Simply tell about your company"
            ></textarea>

            {/* Company Review Link */}
            <label htmlFor="" className="monteserrat flex gap-1 mt-5">
              Company Review Link{" "}
              <img src="./star.svg" alt="" className=" w-2 h-2" />{" "}
            </label>
            <div className="w-full flex">
              <input
                type="text"
                className="w-full border border-[#C2C2C2] rounded-[9px] p-3 mt-3 h-[45px]"
                placeholder="Paste google review link"
              />
              <button className="bg-[#4F46BA] text-white rounded-[9px] p-3 mt-3 h-[45px] ml-3 monteserrat">
                Generate
              </button>
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto bg-[#4F46BA14] rounded-lg mb-20">
          <div className="w-[90%] mx-auto py-4 flex flex-col ">
            {/* header */}
            <div className="flex justify-between items-center mb-10">
              <h1 className="text-[#333] opensans text-base md:text-3xl font-bold">
                Generated Questions
              </h1>
              <div className="flex md:gap-5 justify-center items-center">
                <img src="./refresh.svg" alt="" className="w-5 h-5" />
                <button className="bg-[#4F46BA] text-white rounded-[9px] p-3 ml-3 monteserrat text-sm md:px-5">
                  + Add
                </button>
              </div>
            </div>
            {/* questions */}
            {[0, 1, 2].map((questionIndex) => (
              <div
                className="flex flex-col mb-10 bg-white p-5 rounded-xl"
                key={questionIndex}
              >
                <div className="flex justify-end">
                  <img src="./delete.svg" alt="" className="w-5 h-5" />
                </div>
                <h1
                  className={`
              font-bold text-base mb-5 monteserrat text-[#333]
              `}
                >
                  Q.{questionIndex + 1} How was your overall experience?
                </h1>
                <div className="grid sm:grid-cols-2 gap-4">
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
                <div className="flex mt-5 justify-end gap-5 items-center">
                  <button className="bg-[#F1F1FA] flex gap-2 p-2 rounded-md justify-center items-center monteserrat">
                    <p className="text-[#4A4A4A] ">Edit</p>
                    <img src="./edit.svg" alt="" className="w-4 h-4 -mt-1" />
                  </button>
                  <img src="./refresh.svg" alt="" className="w-5 h-5 cursor-pointer" />
                </div>
              </div>
            ))}
            <div className="flex justify-center">
              <Link to="/billing" className="monteserrat bg-[#4F46BA] text-white p-5 rounded-md">
                Process to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Generate;
