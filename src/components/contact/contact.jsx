
import Mainnav from "../mainNavbar/miannav";
import Footer from "../footer/footer";
const Contact = () => {
  return (
    <>
        <div className="relative bg-white max-w-screen-2xl mx-auto h-auto">
      <Mainnav />
      <div className="w-[90%] mx-auto flex flex-row flex-wrap items-center justify-center mt-32 mb-32 gap-9 md:gap-0">
        <div className="flex flex-col font-open-sans-hebrew text-darkslategray-300 text-center items-center md:w-[45%] ">
          <img src="./orange.svg" alt=""className="mb-5" />
          <p className="text-[#4F46BA] text-[1.2rem] font-semibold font-Montserrat">
            Contact Us
          </p>
          <span className=" w-full sm:w-[70%]">
            <b className="sm:text-[2.8rem] text-[1.6rem]">Let’s talk with our expert</b> 
          </span>
          <p className="text-[1rem] leading-[1.8rem] text-center flex items-center justify-center sm:w-[70%] mt-4 gap-6"
          style={{
            color: 'rgba(16, 24, 40, 0.60)'
          }}
          >
            Get personalized insights and solutions from our team. Start the
            conversation today.
          </p>
        </div>
        <div className="flex flex-wrap justify-between md:w-[55%]">
          <div className="w-full sm:w-[48%] mb-3">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="w-full border border-[#C2C2C2] rounded-[9px] p-3 mt-3 h-[45px]"
            />
          </div>
          <div className="w-full sm:w-[48%] mb-3">
            <label htmlFor="">Company</label>
            <input
              type="text"
              className="w-full border border-[#C2C2C2] rounded-[9px] p-3 mt-3 h-[45px]"
            />
          </div>
          <div className="w-full sm:w-[48%] mb-3">
            <label htmlFor="">Phone Number</label>
            <input
              type="text"
              className="w-full border border-[#C2C2C2] rounded-[9px] p-3 mt-3 h-[45px]"
            />
          </div>
          <div className="w-full sm:w-[48%] mb-3">
            <label htmlFor="">Email Address</label>
            <input
              type="text"
              className="w-full border border-[#C2C2C2] rounded-[9px] p-3 mt-3 h-[45px]"
            />
          </div>
          <div className="w-full">
            <label htmlFor="">Company Description</label>
            <textarea name="" id="" cols="30" rows="5" className="w-full border border-[#C2C2C2] rounded-[9px] p-3 resize-none mt-3"></textarea>
            {/* <input
              type="text"
              className="w-full border border-[#C2C2C2] rounded-[9px] p-3"
            /> */}
          </div>
          <button className="rounded text-[1rem] bg-[#4F46BA] text-white font-poppins mt-4 px-8 py-3">
          Send
        </button>
        </div>
        
      </div>
      
        
    </div>
    <Footer />
    </>

  );
};

export default Contact;
