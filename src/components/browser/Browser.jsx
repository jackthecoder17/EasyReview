import style from "./Browser.module.scss";
import chrome from "../../assets/chrome.svg";
import google from "../../assets/google.svg";
import safari from "../../assets/safari.svg";
import { Link } from "react-router-dom";
// import { Navbar } from "../navbar/Navbar.component";
const Browser = () => {
  return (
    <div className={`w-full h-screen flex flex-col bg-[#4F46BA] ${style.browserpage}`}>
      {/* <Navbar /> */}
      <div className="w-full h-full flex flex-col ">
        <div className="flex-grow"></div>
        <div className={`bg-white pt-5 pb-5 rounded-t-[50px] ${style.maincont}`}>
          <div className={`w-full flex flex-col justify-center items-center ${style.imagecont}`}>
            <img src="/logo1.svg" alt="" className={`h-12`}/>
            <h1
            className="text-2xl md:text-4xl flex text-center self-center text-[#21243D] font-bold mt-3"
            >Choose your browser</h1>
          </div>
          <div className={`mt-7 mb-7 w-[90%] mx-auto flex flex-col justify-center items-center gap-4`}>

            <Link to="/getstarted"
            className={`flex flex-row items-center ${style.button} gap-4 p-3 rounded-[14px]`}
            >
              <img src={safari} alt="" className="h-11"/>
              <h2 className="text-xl">Safari</h2>
            </Link>
            <Link to="/getstarted"
            className={`flex flex-row items-center ${style.button} gap-4 p-3 rounded-[14px]`}
            >
              <img src={google} className="h-11" alt="" />
              <h2
              className="text-xl"
              >Google</h2>
            </Link>
            <Link to="/getstarted"
            className={`flex flex-row items-center ${style.button} gap-4 p-3 rounded-[14px]`}
            >
              <img src={chrome} className="h-11" alt="" />
              <h2 className="text-xl">Chrome</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Browser;
