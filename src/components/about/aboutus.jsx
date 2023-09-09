import Mainnav from "../mainNavbar/miannav";
import Footer from "../footer/footer";
import style from "./aboutus.module.scss";
const AboutUs = () => {
  return (
    <>
     <div className={`relative bg-white w-full h-full font-montserrat max-w-screen-2xl mx-auto ${style.AboutUs}`}>
      <Mainnav />

      <div className="sm:p-6 w-[90%] mx-auto flex items-center flex-wrap justify-between mt-20 mb-20  md:gap-0 gap-10">
        <div className="flex flex-col font-open-sans-hebrew text-darkslategray-300  md:w-[48%]">
          <h3 className="text-[#4F46BA] text-xl font-semibold">About us</h3>
          <h1 className="text-[#333] text-3xl md:text-5xl font-bold leading-[1.2] mt-4 mb-4 md:w-[80%]">
            Simplify Customer Reviews for Business Success
          </h1>
          <p
            className="text-lg"
            style={{
              color: "rgba(16, 24, 40, 0.60)",
            }}
          >
            Discover EasyReview, your partner in effortless feedback collection.
            Our tailored cards and smart AI transform customer insights into
            powerful reviews with a single tap. Elevate your business`s
            reputation with EasyReview today.
          </p>
          <div>
            <button className="bg-[#4F46BA]  text-white py-4 px-8 rounded-lg flex mt-8">
              Discover More
            </button>
          </div>
        </div>
        <div className="flex flex-col font-open-sans-hebrew text-darkslategray-300  md:w-[48%] ">
          <img src="./aboutus1.svg" alt="" className=" w-[100%] h-[100%]" />
        </div>
      </div>

      <div className=" sm:p-6 w-[90%] mx-auto flex flex-wrap justify-between mt-[50px] md:mt-[200px] gap-10 md:gap-0">
        <div className="flex flex-col font-open-sans-hebrew text md:w-1/3">
          <img src="/modern1.svg" alt="" className="md:w-[90%] w-[100%] mb-3" />
          <h1 className="text-xl  font-semibold mt-2 mb-3">Discover Easy Review</h1>
          <p
            className="md:w-[85%] w-[100%] text-sm mb-3"
            style={{
              color: "rgba(16, 24, 40, 0.60)",
            }}
          >
            Welcome to EasyReview, where we`re transforming the way businesses
            and organizations connect with their customers. Our passion lies in
            facilitating the collection of authentic feedback and reviews from
            valued customers.
          </p>
        </div>
        <div className="flex flex-col font-open-sans-hebrew text-darkslategray-300 md:w-1/3 md:-translate-y-8">
          <img src="/modern2.svg" alt="" className="md:w-[90%] w-[100%] mb-3" />
          <h1 className="text-xl  font-semibold mt-2 mb-3">Simplifying Feedback</h1>
          <p
            className="md:w-[85%] w-[100%] text-sm mb-3"
            style={{
              color: "rgba(16, 24, 40, 0.60)",
            }}
          >
            We understand the significance of genuine customer feedback at
            EasyReview. Through our subscription-based model, companies
            effortlessly gather insights using smart cards. With a simple tap,
            customers can share their thoughts through user-friendly online
            survey and our cutting-edge AI technology
          </p>
        </div>
        <div className="flex flex-col font-open-sans-hebrew text-darkslategray-300 md:w-1/3">
          <img src="/modern3.svg" alt="" className="md:w-[90%] w-[100%] mb-3" />
          <h1 className="text-xl  font-semibold mt-2 mb-3">Our Mission</h1>
          <p
            className="md:w-[85%] w-[100%] text-sm mb-3"
            style={{
              color: "rgba(16, 24, 40, 0.60)",
            }}
          >
            Our mission at EasyReview is to bridge the gap between businesses
            and their customers, nurturing transparency and open dialogue. Join
            us in shaping a future where feedback is cherished, businesses
            flourish, and customer experiences form the heart of every success
            story. Experience the impact of EasyReview today.
          </p>
        </div>
      </div>

      <div
        className="w-[90%] mx-auto flex flex-wrap justify-center rounded-tl-[60px] gap-6 md:gap-0 mt-20 mb-20 p-5 sm:p-10"
        style={{
          backgroundColor: "rgba(66, 133, 244, 0.05)",
        }}
      >
        <div className="flex flex-col font-open-sans-hebrew text-darkslategray-300 text-center items-center md:w-[45%] w-[100%] ">
          <img src="./orange.svg" alt="" className="h-20 w-20"/>
          <p className="text-[#4F46BA] text-[1.2rem] font-Montserrat font-bold">
            Subscribe
          </p>
          <span className=" w-full sm:w-[70%]">
            <b className="sm:text-[2rem] text-[1.3rem]">
              Subscribe to our newsletter
            </b>
          </span>
          <p
            className="text-[1rem] leading-[1.8rem] text-gray-400 text-center flex items-center justify-center sm:w-[70%] mt-4 gap-6"
            style={{
              color: "rgba(16, 24, 40, 0.60)",
            }}
          >
            Get Customer Feedback Delivered Straight to Your Inbox
          </p>
        </div>
        <div className="flex flex-col font-open-sans-hebrew text-darkslategray-300 justify-center md:w-[45%] w-[100%]">
          <label
            htmlFor=""
            className="text-[1rem] font-Montserrat font-semibold"
          >
            Enter Email Address
          </label>
          <input
            type="text"
            className="w-full border border-[#C2C2C2] rounded-[9px] p-3 mt-3"
            style={{
              backgroundColor: "transparent",
            }}
          />
          <div>
            <button className="rounded text-[1rem] bg-[#4F46BA] text-white font-poppins mt-4 px-8 py-3">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <br />
      <br />

      
    </div>
    <Footer />
    </>
   
  );
};

export default AboutUs;
