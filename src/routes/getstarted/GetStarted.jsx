import Navbar from "../../components/navbar/Navbar";
import phone from "../../assets/phone.svg";
import style from "./GetStarted.module.scss";
import { useNavigate } from "react-router";
const GetStarted = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/question");
  };
    return (
      <div className={`w-full flex flex-col h-screen ${style.getstarted}`}>
        <Navbar />
        <div className={`first-line:mt-20 self-center w-[90%] md:w-[60%] pb-9 mx-auto flex flex-col justify-center items-center bg-[#FFF] rounded-3xl ${style.maincont}`}
        style={{
          filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        }}
        >
          <img src={phone} alt="" className={`${style.image}`}/>
          <h1 className="
          text-left text-2xl md:text-4xl text-[#21243D] font-bold mt-3
          ">Welcome ! Thank you for choosing us</h1>
          <p
          className="text-left text-[#21243D] text-sm md:text-xl mt-3 "
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia con</p>
          <button
          className="w-[100%]  rounded-[19px] bg-[#4F46BA] mt-5 text-sm md:text-2xl"
          onClick={handleGetStarted}
          >
            Get Started
          </button>
        </div>
      </div>
    );
  };

  export default GetStarted;