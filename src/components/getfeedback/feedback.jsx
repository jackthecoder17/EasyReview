import style from "./feedback.module.scss";
import Navbar from "../navbar/Navbar";
import Star from "../stars/stars";
import { useState } from "react";
const Feedback = () => {
    const [rating, setRating] = useState(0);
  return (
    <div className={`${style.feedbackcont} w-full`}>
      <Navbar />
      <div className={`w-[90%] sm:w-[65%] mx-auto mt-16`}>
        <div
          className={`flex gap-3 mb-5 ${style.feedbackhead} items-center}`}
        >
          <div
            className="
          bg-[#8F3AAC] text-white rounded-full w-12 h-12 flex justify-center items-center text-2xl uppercase
          "
          >
            k
          </div>

          <div>
            <h3>Katona Beatrix</h3>
            <p>Posting Publicly</p>
          </div>
          {/* star rating */}
        
        </div>
        <div className="flex space-x-2 align-middle justify-center mb-5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                selected={rating > i}
                onSelect={() => setRating(i + 1)}
              />
            ))}
          </div>

        <textarea
          placeholder="Enter your feedback!"
          className="w-full p-3 border rounded-md 
          resize-none
          focus:outline-none focus:ring-2 focus:ring-[#4F46BA] transition duration-200 ease-in-out
           placeholder:text-[#4A4A4A]
          "
          rows="4"
        ></textarea>
        <button
          className="
        bg-[#4F46BA] text-white rounded-[16px] w-full p-3 mt-3 text-xl
        "
        >
          <p>Post</p>
        </button>
      </div>
    </div>
  );
};

export default Feedback;
