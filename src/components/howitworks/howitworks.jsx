import Mainnav from "../mainNavbar/miannav";
import Footer from "../footer/footer";
const Howitworks = () => {
  return (
    <div className="">
      <div className="relative bg-white w-full min-h-screen overflow-hidden text-left  text-gray-400 font-open-sans-hebrew max-w-screen-2xl mx-auto">
        <Mainnav />
        <div className="flex flex-col items-center space-y-8 p-4">
          <b className=" text-lg text-[#4F46BA] leading-8 ">How it Works</b>
          <b className="text-xl md:text-5xl tracking-tight  text-[#333] text-center sm:w-[55%]">
            Streamlined Review Enhancement with EasyReview
          </b>

          <p
            className="tracking-tight 
        text-[1.1rem]
        text-darkslategray-300 text-center sm:w-[35%]"
          >
            Experience the Future of Authentic Reviews: Elevate Your Business
            Presence
          </p>
        </div>

        <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 p-4 bg-slateblue rounded text-black mb-10">
          <button
            className="leading-tight font-semibold 
        bg-[#4F46BA] text-white px-6 py-3 rounded-lg
        font-manrope"
          >
            Get Started
          </button>
          <button className="text-[#4F46BA] font-medium font-montserrat flex gap-3 items-center justify-center align-middle">
            <img src="./play.svg" alt="" />
            <p className="text-[1.1rem]">See It In Action</p>
          </button>
        </div>

        <img
          className="rounded-2xl object-cover flex align-middle justify-center mx-auto"
          style={{
            maxWidth: "700px",
            width: "90%",
          }}
          alt="Description of Image"
          src="/personpayingwithitssmartphonewalletapp-1@2x.png"
        />

        <div
          className="
      flex flex-col items-center justify-center
      w-[90%] mx-auto mt-20 mb-20
      "
        >
          <img src="./orange.svg" alt="" />
          <h1 className="text-center text-[#333333] sm:text-[2.4rem] font-bold leading-10 tracking-tight">
            How it Works
          </h1>
        </div>
        <div className="w-[90%] mx-auto mt-10 mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-between w-full ">
            <div className="flex flex-col items-start justify-start gap-4 w-full border border-[#EAEAEA] rounded-md p-5 sm:p-9">
              <img className="w-12 h-12" alt="" src="/icon5.svg" />
              <b className="tracking-tight leading-7 text-[#3B3B3B]">
                Order Review Cards
              </b>
              <div className="text-sm leading-7 font-montserrat text-gray-600 ">
                Receive specialized review cards as part of your EasyReview
                subscription. These uniquely designed cards serve as the bridge
                between your business and valuable customer feedback. With a
                focus on simplicity and effectiveness, these cards are at the
                forefront of modern review acquisition.
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-4 w-full border border-[#EAEAEA] rounded-md p-5 sm:p-9">
              <img className="w-12 h-12" alt="" src="/icon2.svg" />
              <b className="tracking-tight leading-7 text-[#3B3B3B]">
                Customer Interaction
              </b>
              <div className="text-sm leading-7 font-montserrat text-gray-600 ">
                Empower your team to seamlessly interact with customers using
                our review cards. A simple tap on the customer`s device is all
                it takes to initiate the process. This innovative interaction
                method ensures a user-friendly experience while setting the
                stage for meaningful feedback collection.
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-4 w-full border border-[#EAEAEA] rounded-md p-5 sm:p-9">
              <img className="w-12 h-12" alt="" src="/change.svg" />
              <b className="tracking-tight leading-7 text-[#3B3B3B]">
                Convenient Customer Link
              </b>
              <div className="text-sm leading-7 font-montserrat text-gray-600 ">
                Customers are instantly connected through a link that appears on
                their devices. This link opens in their preferred browser,
                whether it`s Safari, Chrome, or any other browser they choose.
                We understand the value of accessibility, and this step ensures
                a hassle-free transition into the feedback process.
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-4 w-full border border-[#EAEAEA] rounded-md p-5 sm:p-9">
              <img className="w-12 h-12" alt="" src="/icon4.svg" />
              <b className="tracking-tight leading-7 text-[#3B3B3B]">
                Respond to Pre-set Questions
              </b>
              <div className="text-sm leading-7 font-montserrat text-gray-600 ">
                SiUpon opening the link, customers encounter thoughtfully
                crafted pre-set questions. These questions are designed to
                capture their experience with your business in a comprehensive
                manner. By responding to these prompts, customers provide
                insights that go beyond conventional feedback.
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-4 w-full border border-[#EAEAEA] rounded-md p-5 sm:p-9">
              <img className="w-12 h-12" alt="" src="/blue.svg" />
              <b className="tracking-tight leading-7 text-[#3B3B3B]">
                AI Analysis and Generation
              </b>
              <div className="text-sm leading-7 font-montserrat text-gray-600 ">
                Behind the scenes, our advanced AI algorithm comes into play. It
                meticulously analyzes the responses provided by customers,
                diving deep into the sentiments, preferences, and opinions
                expressed. This analysis forms the foundation for creating
                reviews that resonate with the unique experiences shared.
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-4 w-full border border-[#EAEAEA] rounded-md p-5 sm:p-9">
              <img className="w-12 h-12" alt="" src="/icon6.svg" />
              <b className="tracking-tight leading-7 text-[#3B3B3B]">
                Tailored Sample Reviews
              </b>
              <div className="text-sm leading-7 font-montserrat text-gray-600 ">
                Building upon the AI analysis, EasyReview generates sample
                reviews that align with your brand`s voice and style. These
                reviews are carefully tailored to encapsulate the essence of
                customer feedback. The result is a collection of reviews that
                not only reflect genuine experiences but also enhance your
                brand`s online reputation.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Howitworks;
