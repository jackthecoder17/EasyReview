import React from "react";
import Mainnav from "../../components/mainNavbar/miannav";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";
import style from "./blog.module.scss";
const Blog = () => {
  return (
    <>
    <div className={`w-full max-w-screen-2xl mx-auto h-full ${style.Blog}`}>
      <Mainnav />
      <div className={`w-[90%] mx-auto sm:p-6 mt-[6.5rem]`}>
        <div className={`flex flex-col w-full ${style.section1} mt-5`}>
          <h1 className={`text-[#4F46BA] font-bold text-xl`}>The Blog</h1>
          <p
            style={{
              color: "rgba(16, 24, 40, 0.60)",
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "28.8px",
            }}
          >
            Updates from the EasyReview team
          </p>
          <img src="/reputation.svg" alt="" className="w-full" />

          <div className="flex justify-between w-[98%] mt-4">
            <p>Craft</p>
            <p>15 Min Read</p>
          </div>

          <div className="w-full">
            <h1 className="text-2xl md:text-4xl font-bold font-Open-Sans-Hebrew md:w-[36%] mb-4">
              Revolutionizing Customer Reviews
            </h1>
            <p className="md:w-[70%] sm:w-[80%] mb-3">
              In today's competitive business landscape, customer feedback is
              more valuable than ever. It's a direct window into the minds of
              your customers, providing insights that can drive growth and
              success. What if there was a seamless, innovative way for
              businesses to collect authentic reviews effortlessly? That's where
              the concept of "card" steps in, reshaping the way businesses
              connect with their customers.
            </p>
            <div className="flex flex-row gap-3 items-center">
              <img src="/profilemain.svg" alt="" className=" h-8 w-8" />
              <p>Tuomas Artman | July 05, 2023</p>
            </div>
          </div>
        </div>

        <div
          className={`w-full grid grid-cols-1 md:grid-cols-2 gap-20 mt-20 ${style.section2} mb-20`}
        >
          <div className={`flex flex-col w-full `}>
            <img src="/blog1.svg" alt="" className="w-full" />
            <div className="flex justify-between w-full mt-4">
              <p>Craft</p>
              <p>15 Min Read</p>
            </div>
            <div className="w-full h-full flex flex-col">
              <h1 className="text-2xl md:text-4xl font-bold font-Open-Sans-Hebrew md:w-[60%] mb-4">
                Simplifying Feedback Collection
              </h1>
              <p className=" mb-3">
                In today's competitive business landscape, customer feedback is
                more valuable than ever. It's a direct window into the minds of
                your customers, providing insights that can drive growth and
                success. What if there was a seamless, innovative way for
                businesses to collect authentic reviews effortlessly? That's
                where the concept of "card" steps in, reshaping the way
                businesses connect with their customers.
              </p>
              <div className="flex flex-grow">
                  
              </div>
              <div className="flex flex-row gap-3 items-center ">
                <img src="/blogpro1.svg" alt="" className=" h-8 w-8" />
                <p>Saige Fuentes | July 29, 2023</p>
              </div>
            </div>
          </div>
          <div className={`flex flex-col w-full `}>
            <img src="/blog2.svg" alt="" className="w-full" />
            <div className="flex justify-between w-full mt-4">
              <p>News</p>
              <p>25 Min Read</p>
            </div>
            <div className="w-full h-full flex flex-col">
              <h1 className="text-2xl md:text-4xl font-bold font-Open-Sans-Hebrew md:w-[80%] mb-4">
                Empowering Businesses with Insights
              </h1>
              <p className=" mb-3">
                Beyond just gathering feedback, this approach holds the
                potential to transform your business strategy. Subscriptions
                through the card ensure a steady influx of insights, helping you
                stay in tune with your customers' changing preferences. The ease
                of use encourages consistent participation, fostering a culture
                of customer-centricity.
              </p>
              <div className="flex flex-grow">
                  
              </div>
              <div className="flex flex-row gap-3 items-center">
                <img src="/blogpro2.svg" alt="" className=" h-8 w-8 " />
                <p>Bowen Higgins | Aug 02, 2023</p>
              </div>
            </div>
          </div>
          <div className={`flex flex-col w-full`}>
            <img src="/blog3.svg" alt="" className="w-full" />
            <div className="flex justify-between w-full mt-4">
              <p>News</p>
              <p>10 Min Read</p>
            </div>
            <div className="w-full h-full flex flex-col">
              <h1 className="text-2xl md:text-4xl font-bold font-Open-Sans-Hebrew md:w-[60%] mb-4">
                AI-Powered Convenience
              </h1>
              <p className=" mb-3">
                The innovative application of AI technology takes this concept
                to new heights. After customers provide their feedback, an AI
                prompt processes their responses and crafts sample reviews
                tailored to their sentiments. This not only simplifies the
                process for customers but also empowers them to share their
                thoughts on review platforms seamlessly.
              </p>
              <div className="flex flex-grow">
                  
              </div>
              <div className="flex flex-row gap-3 items-center">
                <img src="/blogpro3.svg" alt="" className=" h-8 w-8" />
                <p>Leighton Kramer | Jan 15, 2023</p>
              </div>
            </div>
          </div>
          <div className={`flex flex-col w-full `}>
            <img src="/blog4.svg" alt="" className="w-full" />
            <div className="flex justify-between w-full mt-4">
              <p>News</p>
              <p>5 Min Read</p>
            </div>
            <div className="w-full h-full flex flex-col">
              <h1 className="text-2xl md:text-4xl font-bold font-Open-Sans-Hebrew md:w-[70%] mb-4">
                Empowering the Customer Voice
              </h1>
              <p className=" mb-3">
                In a world where customer opinions hold immense power, "card"
                provides customers with an amplified voice. The tailored sample
                reviews give them the opportunity to effortlessly share their
                thoughts, contributing to a transparent and authentic portrayal
                of your business.
              </p>
              <div className="flex flex-grow">
                  
              </div>
              <div className="flex flex-row gap-3 items-center">
                <img src="/blogpro4.svg" alt="" className=" h-8 w-8" />
                <p>Kylan Gentry | March 29, 2023</p>
              </div>
            </div>
          </div>
          <div className={`flex flex-col w-full `}>
            <img src="/blog5.svg" alt="" className="w-full" />
            <div className="flex justify-between w-full mt-4">
              <p>News</p>
              <p>8 Min Read</p>
            </div>
            <div className="w-full h-full flex flex-col">
              <h1 className="text-2xl md:text-4xl font-bold font-Open-Sans-Hebrew md:w-[80%] mb-4">
                Embrace the Change
              </h1>
              <p className=" mb-3">
                In an era of evolving customer expectations, embracing
                innovation is key to success. The "card" concept presents a
                futuristic approach to feedback collection, nurturing
                relationships between businesses and customers. By simplifying
                the process, harnessing AI, and amplifying the customer voice,
                this approach has the potential to reshape how reviews are
                gathered and utilized.
              </p>
              <div className="flex flex-grow">
                  
              </div>
              <div className="flex flex-row gap-3 items-center">
                <img src="/blogpro5.svg" alt="" className=" h-8 w-8" />
                <p>Amelie Griffith | June 20, 2023</p>
              </div>
            </div>
          </div>
          <div className={`flex flex-col w-full `}>
            <img src="/blog6.svg" alt="" className="w-full" />
            <div className="flex justify-between w-full mt-4">
              <p>News</p>
              <p>30 Min Read</p>
            </div>
            <div className="w-full h-full flex flex-col">
              <h1 className="text-2xl md:text-4xl font-bold font-Open-Sans-Hebrew md:w-[60%] mb-4">
                Join the Journey
              </h1>
              <p className=" mb-3">
                The "card" revolution is on the horizon, and your business can
                be at the forefront. Embrace this innovative idea to not only
                streamline your review collection process but also to foster a
                deeper connection with your customers. Together, let's unlock
                the potential of customer feedback and pave the way for business
                growth in this dynamic landscape.
              </p>
              <div className="flex flex-grow">
                  
              </div>
              <div className="flex flex-row gap-3 items-center">
                <img src="/blogpro6.svg" alt="" className=" h-8 w-8" />
                <p>Franklin Sierra | July 29, 2023</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-start mx-auto mb-10">
        <div className="flex flex-col items-center justify-start gap-5 py-8 px-8 md:px-24 lg:px-48">
          <div className="leading-7 font-semibold text-[#4F46BA]">Feedback</div>
          <b className="text-4xl md:text-5xl tracking-tight leading-relaxed font-open-sans-hebrew text-darkslategray-200 text-center">
            Frequently asked Questions
          </b>
        </div>
        <div className="flex flex-col items-center justify-start text-xl text-gray-200 font-manrope py-8 px-8 md:px-24 lg:px-48 w-full md:w-[90%]">
          <div className="flex flex-col items-start justify-between w-full gap-6">
            <div className="flex justify-between items-center w-full border-b border-gray-400 py-4">
              <div className="leading-7 font-medium text-[#101828]">
                What is EasyReview ?
              </div>
              <img className="w-5 h-5 mr-5" alt="" src="/vector.svg" />
            </div>
            <div className="flex justify-between items-center w-full border-b border-gray-400 py-4">
              <div className="leading-7 font-medium text-[#101828]">
                How are the generated reviews personalized ?
              </div>
              <img className="w-5 h-5 mr-5" alt="" src="/vector.svg" />
            </div>
            <div className="flex justify-between items-center w-full border-b border-gray-400 py-4">
              <div className="leading-7 font-medium text-[#101828]">
                What insights does the analytics dashboard provide?
              </div>
              <img className="w-5 h-5 mr-5" alt="" src="/vector.svg" />
            </div>
            <div className="flex justify-between items-center w-full border-b border-gray-400 py-4">
              <div className="leading-7 font-medium text-[#101828]">
                Is customer data safe and secure?
              </div>
              <img className="w-5 h-5 mr-5" alt="" src="/vector.svg" />
            </div>
            <div className="flex justify-between items-center w-full border-b border-gray-400 py-4">
              <div className="leading-7 font-medium text-[#101828]">
                How can my business get started with EasyReview?
              </div>
              <img className="w-5 h-5 mr-5" alt="" src="/vector.svg" />
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </div>
    <Footer />
    </>
    
  );
};

export default Blog;
