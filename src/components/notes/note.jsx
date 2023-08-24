import style from "./note.module.scss";
import Navbar from "../navbar/Navbar";
import copy from "../../assets/vector.svg";
import edit from "../../assets/edit.svg";
import { Link } from "react-router-dom";

const Note = () => {
  return (
    <div className={`w-full h-screen ${style.Note}`}>
      <Navbar />
      <h1
        className="text-center text-[#4F46BA] text-2xl
             mt-3 underline mb-6"
      >
        Paste to Company Website 
      </h1>

      <div className="w-[90%] mx-auto maincont flex flex-row flex-wrap gap-5 justify-center">
        <div className={`${style.comment} `}>
          <p className="mb-3">
            I had a fantastic dining experience at Rebecca`s restaurant. The
            ambiance, service, and food were all exceptional
          </p>
          <div className="flex justify-between">
            <div className="flex gap-1 cursor-pointer">
              <img
                src={copy}
                alt=""
                className="
                    w-5 h-5
                    "
              />
              <p>copy</p>
            </div>
            <Link to="/feedback">
              <img
                src={edit}
                alt=""
                className="
                    w-5 h-5 cursor-pointer
                    "
              />
            </Link>
          </div>
        </div>
        <div className={`${style.comment} `}>
          <p className="mb-3">
            I had a fantastic dining experience at Rebecca`s restaurant. The
            ambiance, service, and food were all exceptional
          </p>
          <div className="flex justify-between">
            <div className="flex gap-1 cursor-pointer">
              <img
                src={copy}
                alt=""
                className="
                    w-5 h-5
                    "
              />
              <p>copy</p>
            </div>
            <Link to="/feedback">
              <img
                src={edit}
                alt=""
                className="
                    w-5 h-5 cursor-pointer
                    "
              />
            </Link>
          </div>
        </div>
        <div className={`${style.comment} `}>
          <p className="mb-3">
            I had a fantastic dining experience at Rebecca`s restaurant. The
            ambiance, service, and food were all exceptional
          </p>
          <div className="flex justify-between">
            <div className="flex gap-1 cursor-pointer">
              <img
                src={copy}
                alt=""
                className="
                    w-5 h-5 
                    "
              />
              <p>copy</p>
            </div>
            <Link to="/feedback">
              <img
                src={edit}
                alt=""
                className="
                    w-5 h-5 cursor-pointer
                    "
              />
            </Link>
          </div>
        </div>
        <div className={`${style.comment} `}>
          <p className="mb-3">
            I had a fantastic dining experience at Rebecca`s restaurant. The
            ambiance, service, and food were all exceptional
          </p>
          <div className="flex justify-between">
            <div className="flex gap-1 cursor-pointer">
              <img
                src={copy}
                alt=""
                className="
                    w-5 h-5
                    "
              />
              <p>copy</p>
            </div>
            <Link to="/feedback">
              <img
                src={edit}
                alt=""
                className="
                    w-5 h-5 cursor-pointer
                    "
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <Link
          to="/note"
          className={`bg-[#4F46BA] text-white  items-center justify-center px-12 py-4 rounded-[17px] font-bold`}
        >
          Post Feedback
        </Link>
      </div>
    </div>
  );
};

export default Note;
