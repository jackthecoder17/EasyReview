import "./EasyReviewHome.styles.scss";
import Mainnav from "./mainNavbar/miannav";
import Footer from "./footer/footer";
const EasyReviewHome = () => {
  return (
    <div className="Easycontainer w-full h-full overflow-hidden text-left text-base text-slateblue font-montserrat">
      {/* header */}

      <Mainnav />
      {/* first section*/}
      <div className="w-[90%] mx-auto  flex flex-row flex-wrap items-center justify-between text-darkslategray-200 Enhance mt-10 lg:mt-0">
        <div className="md:w-1/2 flex flex-col items-start justify-start gap-8 sm:p-6">
          <h1 className="font-open-sans-hebrew md:leading-tight text-[#333333] text-2xl lg:text-5xl">
            Enhance Business Reputation with Genuine Customer Reviews.
          </h1>
          <p className="leading-8 text-[#828282]">
            The Ultimate Review Collection Solution with a single card tap
          </p>
          <div className="flex gap-8">
            <button className="bg-[#F1573B] text-white py-2 px-6 rounded-lg mt-6 flex gap-3 justify-center items-center">
              <p>Get Started</p>
              <div
                className="
             w-8 h-8 rounded-md bg-white
              flex items-center justify-center
             "
              >
                <img className="h-4" alt="" src="/rightarrow.svg" />
              </div>
            </button>
            <button className="text-[#F1573B] mt-6">How it’s Work</button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            className="w-full h-auto object-cover"
            alt=""
            src="/image1@2x.png"
          />
        </div>
      </div>
      {/* second section */}
      <div className="flex flex-col mt-10 items-center justify-start text-center font-open-sans-hebrew overview">
        <div className="flex flex-col items-center justify-start gap-2 px-4 md:px-32 lg:px-48 firstcont">
          <b className="leading-7 text-left text-[#4F46BA]">Overview</b>
          <b className="text-4xl md:text-5xl leading-tight text-darkslategray-200">
            Tap, Generate, Thrive
          </b>
          <p className="leading-7 font-montserrat text-center w-full md:w-3/4">
            Transforming Feedback into Growth: Revolutionizing Reviews with
            AI-Powered Simplicity.
          </p>
        </div>
        <div className="flex flex-wrap justify-center sm:gap-14 text-left text-xl secondcont">
          <div className="flex flex-col p-6 items-start justify-start gap-4">
            <img className="w-12 h-12" alt="" src="/icon7.svg" />
            <b className="tracking-tight leading-7 sm:w-48">
              Effortless Review Collection
            </b>
            <div className="text-sm leading-7 font-montserrat text-gray-600 sm:w-60">
              Simplifies the process of gathering customer feedback through
              tap-and-go technology, increasing participation and yielding
              real-time reviews.
            </div>
          </div>
          <div className="flex flex-col p-6 items-start justify-start gap-4">
            <img className="w-12 h-12" alt="" src="/icon8.svg" />
            <b className="tracking-tight leading-7 sm:w-48">
              Enhanced Review Quality
            </b>
            <div className="text-sm leading-7 font-montserrat text-gray-600 sm:w-60">
              AI-generated prompts help customers articulate detailed and
              diverse reviews, leading to more informative and valuable feedback
              for the business.
            </div>
          </div>
          <div className="flex flex-col p-6 items-start justify-start gap-4">
            <img className="w-12 h-12" alt="" src="/icon9.svg" />
            <b className="tracking-tight leading-7 sm:w-48">
              Streamlined Sharing
            </b>
            <div className="text-sm leading-7 font-montserrat text-gray-600 sm:w-60">
              Pre-written review samples empower customers to easily share their
              thoughts on various platforms, bolstering the company`s online
              reputation.
            </div>
          </div>
          <div className="flex flex-col p-6 items-start justify-start gap-4">
            <img className="w-12 h-12" alt="" src="/icon10.svg" />
            <b className="tracking-tight leading-7 sm:w-48">
              Data-Driven Insights
            </b>
            <div className="text-sm leading-7 font-montserrat text-gray-600 sm:w-60">
              Continuous review collection and analysis provide businesses with
              data-driven insights to improve customer experience and make
              informed strategic decisions.
            </div>
          </div>
        </div>
      </div>

      {/* third section */}
      <div className="w-[90%] flex flex-col items-center justify-start gap-4 mt-9 mx-auto">
        <div className="w-full flex flex-col items-center justify-start gap-2 px-4 md:px-32">
          <b className="leading-7">Our Clients</b>
          <div className="text-center leading-7 font-manrope text-gray-600">
            Trusted by world’s leading brands
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 py-6">
          <img
            className="w-full md:w-auto h-auto object-cover mix-blend-normal"
            alt=""
            src="/image-1@2x.png"
          />
          <img
            className="w-full md:w-auto h-auto object-cover mix-blend-normal"
            alt=""
            src="/image-2@2x.png"
          />
        </div>
      </div>

      {/* fourth section */}
      <div className="flex flex-col md:flex-row py-8 px-4 md:px-6 items-center justify-between gap-8 mt-9 mx-auto font-open-sans-hebrew integration">
        <div className="flex flex-col p-8  justify-start w-full md:w-1/2">
          <div className="w-full">
            <img
              className="w-full h-auto object-cover"
              src="/Image.svg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col sm:p-8 items-start justify-start w-full md:w-1/2">
          <div className="flex flex-col items-start justify-start gap-4 mb-[3rem]">
            <b className="leading-7 text-[#4F46BA]">Key Features</b>
            <b className="text-4xl md:text-5xl tracking-tight leading-relaxed text-darkslategray-200">
              Integrated Review Management Platform
            </b>
          </div>
          <div className="flex flex-col gap-8 text-xl text-gray-500 font-montserrat maincol">
            <div className="flex flex-row items-start gap-6">
              <img className="w-12 h-12" alt="" src="/icon5.svg" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg leading-7 font-medium">
                  Contactless Review Collection
                </h2>
                <p className="leading-7 text-gray-600">
                  Offer physical cards technology for easy tap-and-go review
                  submission, reducing friction for customers.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start gap-6">
              <img className="w-12 h-12" alt="" src="/icon6.svg" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg leading-7 font-medium">
                  Centralized Review Hub
                </h2>
                <p className="leading-7 text-gray-600">
                  Provide a user-friendly online platform where businesses can
                  view, manage, and respond to collected reviews, streamlining
                  their online reputation management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* fifth section */}
      <div className="w-[90%] flex flex-col md:flex-row  items-center justify-center gap-16 mx-auto integration">
        <div className="flex flex-col items-start justify-start gap-8 w-full md:w-1/2">
          <div className="flex flex-col items-start justify-start gap-4">
            <div className="leading-7 font-semibold text-[#4F46BA]">
              Key Features
            </div>
            <b className="text-4xl md:text-5xl tracking-tight leading-relaxed font-open-sans-hebrew text-darkslategray-200">
              AI-Powered Review Generation
            </b>
          </div>
          <div className="flex flex-col gap-8 text-xl text-gray-500 maincol">
            <div className="flex flex-row items-start gap-6">
              <img className="w-12 h-12" alt="" src="/icon3.svg" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg leading-7 font-medium">
                  Personalized Review Prompts
                </h2>
                <p className="leading-7 text-gray-600">
                  AI algorithms to analyze customer responses and generate
                  tailored review prompts, ensuring reviews are relevant and
                  comprehensive.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start gap-6">
              <img className="w-12 h-12" alt="" src="/icon4.svg" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg leading-7 font-medium">
                  Diverse Review Samples
                </h2>
                <p className="leading-7 text-gray-600">
                  Provide customers with multiple AI-generated review samples
                  based on their input, offering a variety of perspectives and
                  wording.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-8 items-start justify-start w-full md:w-1/2">
          <img
            className="object-cover w-full h-auto"
            alt=""
            src="/image@2x.png"
          />
        </div>
      </div>
      {/* sixth section */}
      <div className="w-[90%] flex flex-col items-start justify-start gap-12 font-open-sans-hebrew  mx-auto integration">
        <div className="flex flex-col items-start justify-start gap-5 w-full md:w-3/4 lg:w-1/2">
          <b className="leading-7 text-[#4F46BA]">Why choose us</b>
          <b className="text-4xl md:text-5xl tracking-tight leading-relaxed text-darkslategray-200">
            Authenticity, Insights, <br /> Empowerment
          </b>
        </div>
        <div className="flex flex-col md:flex-row py-8 px-0 w-full items-center justify-center gap-16 text-sm text-gray-500 font-montserrat maincol">
          <div className="flex flex-col gap-10 w-full md:w-1/2">
            <div className="flex flex-row gap-6 bg-silver rounded-md p-4">
              <img className="w-12 h-12" alt="" src="/icon.svg" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg leading-7 font-medium">
                  Tailored Authenticity
                </h2>
                <p className="leading-7 text-gray-600">
                  At EasyReview, we understand the importance of authenticity
                </p>
                <div className="leading-8 font-medium text-slateblue">
                  Learn more
                </div>
              </div>
            </div>
            <div className="flex flex-row  gap-6 bg-mediumblue rounded-md p-4">
              <img className="w-12 h-12" alt="" src="/icon1.svg" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg leading-7 font-medium">
                  Efficiency and Insights Combined
                </h2>
                <p className="leading-7 text-gray-600">
                  At EasyReview, we understand the importance of authenticity in
                  customer reviews. Unlike generic review platforms,
                </p>
                <div className="leading-8 font-medium text-slateblue">
                  Learn more
                </div>
              </div>
            </div>
            <div className="flex flex-row  gap-6 bg-silver rounded-md p-4">
              <img className="w-12 h-12" alt="" src="/icon2.svg" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg leading-7 font-medium">
                  Seamless Integration and Empowered Customers
                </h2>
                <p className="leading-7 text-gray-600">
                  At EasyReview, we understand the importance of authenticity in
                </p>
                <div className="leading-8 font-medium text-slateblue">
                  Learn more
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full md:w-1/2">
            <img
              className="rounded-md object-cover w-full h-auto"
              alt=""
              src="/rodeoprojectmanagementsoftwareonesnucaqqunsplash-1@2x.png"
            />
            <div className="absolute top-0 left-0 bg-slateblue w-20 h-20 rounded-full"></div>
          </div>
        </div>
      </div>
      {/* seventh section */}
      <div className="w-full flex flex-col items-center justify-start mx-auto mb-10">
        <div className="flex flex-col items-center justify-start gap-5 py-8 px-8 md:px-24 lg:px-48">
          <div className="leading-7 font-semibold text-[#4F46BA]">Feedback</div>
          <b className="text-4xl md:text-5xl tracking-tight leading-relaxed font-open-sans-hebrew text-darkslategray-200 text-center">
            Frequently asked Questions
          </b>
        </div>
        <div className="flex flex-col items-center justify-start text-xl text-gray-200 font-manrope py-8 px-8 md:px-24 lg:px-48 w-full md:w-3/4">
          <div className="flex flex-col items-start justify-between w-full gap-6">
            <div className="flex justify-between items-center w-full border-b border-gray-400 py-4">
              <div className="leading-7 font-medium text-[#101828]">
                What is EasyReview ?
              </div>
              <img className="w-5 h-5" alt="" src="/vector.svg" />
            </div>
            <div className="flex justify-between items-center w-full border-b border-gray-400 py-4">
              <div className="leading-7 font-medium text-[#101828]">
                How are the generated reviews personalized ?
              </div>
              <img className="w-5 h-5" alt="" src="/vector.svg" />
            </div>
            <div className="flex justify-between items-center w-full border-b border-gray-400 py-4">
              <div className="leading-7 font-medium text-[#101828]">
                What insights does the analytics dashboard provide?
              </div>
              <img className="w-5 h-5" alt="" src="/vector.svg" />
            </div>
            <div className="flex justify-between items-center w-full border-b border-gray-400 py-4">
              <div className="leading-7 font-medium text-[#101828]">
                Is customer data safe and secure?
              </div>
              <img className="w-5 h-5" alt="" src="/vector.svg" />
            </div>
            <div className="flex justify-between items-center w-full border-b border-gray-400 py-4">
              <div className="leading-7 font-medium text-[#101828]">
                How can my business get started with EasyReview?
              </div>
              <img className="w-5 h-5" alt="" src="/vector.svg" />
            </div>
          </div>
        </div>
      </div>

     <Footer/>
    </div>
  );
};

export default EasyReviewHome;
