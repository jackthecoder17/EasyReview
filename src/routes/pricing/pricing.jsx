import style from "./pricing.module.scss";
import Mainnav from "../../components/mainNavbar/miannav";
import Footer from "../../components/footer/footer";
const Pricing = () => {
  return (
    <>
    <div className={`w-full h-full max-w-screen-2xl mx-auto ${style.pricing}`}>
      <Mainnav />
      <div className={`w-[90%] mx-auto`}>
        <div
          className="flex flex-col items-center justify-center mt-20 
        mb-20  lg:mb-32 gap-3 md:gap-0 text-center"
        >
          <img src="/money.svg" alt="" className=" h-60 w-60" />
          <h3 className="text-[#4F46BA] text-xl font-semibold">Pricing</h3>
          <h1 className="text-center text-[#333333] sm:text-[2.4rem] font-bold leading-10 tracking-tight lg:mb-5">
            Find your perfect plan
          </h1>
          <p
            className={`text-md md:w-[30%] lg:w-[30%] mt-2`}
            style={{
              color: "rgba(16, 24, 40, 0.60)",
            }}
          >
            Explore Our Silver, Platinum, and Custom Cards for Tailored Review
            Solutions
          </p>
        </div>

        <div
          className={`flex flex-row flex-wrap items-center align-middle justify-center gap-10 mb-20`}
        >
          <div
            className={`flex flex-col items-center justify-center ${style.card} border-2 border-[#DADADA] rounded-[9px] `}
          >
            <div
              className={`flex flex-col items-center justify-center ${style.cardHeader} mb-10`}
            >
              <h1
                className={`text-[#5B48CE] text-4xl text-center font-semibold leading-10 tracking-tight mb-5`}
              >
                Silver Card
              </h1>
              <p
                className={`text-[#4D5052] text-3xl font-semibold leading-10 tracking-tight flex align-middle justify-center items-center`}
              >
                $0{" "}
                <span className="text-sm text-[#4D5052] font-normal ml-1">
                  /month
                </span>
              </p>
            </div>
            <div
              className={`flex flex-col items-center justify-center ${style.cardBody}`}
            >
              <ul className="flex flex-col items-start justify-start gap-3 w-full">
                <li className="flex items-center justify-start gap-5">
                  <img src="/checkmark.svg" alt="" className=" h-4 w-4" />
                  <p className="text-[#4D5052] text-base font-normal">
                    Smart Review Cards Distribution
                  </p>
                </li>
                <li className="flex items-center justify-start gap-5">
                  <img src="/checkmark.svg" alt="" className=" h-4 w-4" />
                  <p className="text-[#4D5052] text-base font-normal">
                    AI Analysis and Generation
                  </p>
                </li>
                <li className="flex items-center justify-start gap-5">
                  <img src="/checkmark.svg" alt="" className=" h-4 w-4" />
                  <p className="text-[#4D5052] text-base font-normal">
                    Effortless Sharing on Major Platforms
                  </p>
                </li>
                <li className="flex items-center justify-start gap-5">
                  <img src="/checkmark.svg" alt="" className=" h-4 w-4" />
                  <p className="text-[#4D5052] text-base font-normal">
                    Customer Interaction
                  </p>
                </li>
                <li className="flex items-center justify-start gap-5">
                  <img src="/checkmark.svg" alt="" className=" h-4 w-4" />
                  <p className="text-[#4D5052] text-base font-normal">
                    Convenient Customer Link
                  </p>
                </li>
              </ul>
              <button className="bg-[#4F46BA] text-white font-semibold text-lg py-3 px-4 rounded-[9px] mt-10 w-full">
                Buy Silver Card
              </button>
            </div>
          </div>
          <div
            className={`flex flex-col items-center justify-center ${style.card} border-2 border-[#DADADA] rounded-[9px] p-4 lg:-translate-y-10`}
          >
            <div
              className={`flex flex-col items-center justify-center ${style.cardHeader} mb-10`}
            >
              <h1
                className={`text-[#5B48CE] text-4xl font-semibold leading-10 tracking-tight mb-5 text-center`}
              >
                Platinum Card
              </h1>
              <p
                className={`text-[#4D5052] text-3xl font-semibold leading-10 tracking-tight flex align-middle justify-center items-center`}
              >
                $0{" "}
                <span className="text-sm text-[#4D5052] font-normal ml-1">
                  /month
                </span>
              </p>
            </div>
            <div
              className={`flex flex-col items-center justify-center ${style.cardBody}`}
            >
              <ul className="flex flex-col items-start justify-start gap-3 w-full">
                <li className="flex items-center justify-start gap-5">
                  <img src="/checkmark.svg" alt="" className=" h-4 w-4" />
                  <p className="text-[#4D5052] text-base font-normal">
                    Smart Review Cards Distribution
                  </p>
                </li>
                <li className="flex items-center justify-start gap-5">
                  <img src="/checkmark.svg" alt="" className=" h-4 w-4" />
                  <p className="text-[#4D5052] text-base font-normal">
                    AI Analysis and Generation
                  </p>
                </li>
                <li className="flex items-center justify-start gap-5">
                  <img src="/checkmark.svg" alt="" className=" h-4 w-4" />
                  <p className="text-[#4D5052] text-base font-normal">
                    Effortless Sharing on Major Platforms
                  </p>
                </li>
                <li className="flex items-center justify-start gap-5">
                  <img src="/checkmark.svg" alt="" className=" h-4 w-4" />
                  <p className="text-[#4D5052] text-base font-normal">
                    Customer Interaction
                  </p>
                </li>
                <li className="flex items-center justify-start gap-5">
                  <img src="/checkmark.svg" alt="" className=" h-4 w-4" />
                  <p className="text-[#4D5052] text-base font-normal">
                    Convenient Customer Link
                  </p>
                </li>
              </ul>
              <button className="bg-[#4F46BA] text-white font-semibold text-lg py-3 px-4 rounded-[9px] mt-10 w-full">
                Buy Silver Card
              </button>
            </div>
          </div>
          <div
            className={`flex flex-col items-center justify-center ${style.card} border-2 border-[#DADADA] rounded-[9px] p-4 lg:-translate-y-9`}
          >
            <div
              className={`flex flex-col items-center justify-center ${style.cardHeader} mb-10`}
            >
              <h1
                className={`text-[#5B48CE] text-4xl font-semibold leading-10 tracking-tight mb-5 text-center`}
              >
                Custom Card
              </h1>
              <p
                className={`text-[#4D5052] text-3xl font-semibold leading-10 tracking-tight flex align-middle justify-center items-center`}
              >
                $0{" "}
                <span className="text-sm text-[#4D5052] font-normal ml-1">
                  /month
                </span>
              </p>
            </div>
            <div
              className={`flex flex-col items-center justify-center ${style.cardBody} `}
            >
              <p className=" text-[#4D5052] text-base font-normal ">
                Our Custom Plan offers flexibility to design a solution that
                perfectly suits your business. From specialized features to
                tailored pricing, we work closely with you to create a plan that
                aligns with your vision.
              </p>
              <button className="bg-[#4F46BA] text-white font-semibold text-lg py-3 px-4 rounded-[9px] mt-10 w-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
     
    </div>
    <Footer />
    </>
    
  );
};

export default Pricing;
