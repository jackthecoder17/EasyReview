import style from "./note.module.scss";
import Navbar from "../../components/navbar/Navbar";

import copy from "../../assets/copy.svg";
import edit from "../../assets/edit.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Note = () => {
  const [note, setNote] = useState("");
  useEffect(() => {
    setNote(localStorage.getItem("review"));
  }, []);
const copyToClipboard = () => {
  navigator.clipboard.writeText(note);
  console.log("copied");
}
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
           {note}
          </p>
          <div className="flex justify-between">
            <div className="flex gap-1 cursor-pointer hover:text-[#4F46BA] text-[#353535] focus:shadow-outline"
            onClick={copyToClipboard}
            >
              <img
                src={copy}
                alt=""
                className="
                    w-5 h-5
                    "
              />
              <p className="hover:text-[#4F46BA]">copy</p>
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
        {/* <div className={`${style.comment} `}>
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
        </div> */}
      </div>

      <div className="flex justify-center mt-5">
        <a
          href="https://www.google.com/search?q=restaurants+near+me&oq=rest&aqs=chrome.0.69i59j46i199i433i465i512j0i67i457i650j0i402i650l2j0i67i131i433i650j0i67i650j69i61.1140j0j7&sourceid=chrome&ie=UTF-8#ip=1&lkt=LocalPoiReviews&lrd=0x103b8e80f3d34b3f:0x5fb889ef026bca56,3,,,,&rlimm=6897414488948722262"
          target="_blank"
          rel="noreferrer"
          className={`bg-[#4F46BA] text-white  items-center justify-center px-12 py-4 rounded-[17px] font-bold`}
        >
          Post Feedback
        </a>
      </div>
    </div>
  );
};

export default Note;
