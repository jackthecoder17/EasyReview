import Mainnav from "../../components/mainNavbar/miannav";
import Footer from "../../components/footer/footer";
import { useState } from "react";
const Billing = () => {
  return (
    <>
      <div className="relative bg-white max-w-screen-2xl mx-auto h-auto">
        <Mainnav />
        <div className="w-[90%] mx-auto sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-28 mt-5">
          {/* checkout */}
          <div className="w-full">
            <h3 className="opensans text-[#4F46BA] font-bold">Checkout</h3>
            <h1 className="opensans text-3xl font-bold mt-3 mb-5">
              Billing Details
            </h1>
            <p className="text-[#10182899] mb-4">Enter Details</p>

            <div className="w-full flex flex-col gap-3">
              <div className="flex w-full gap-5">
                <div className=" grow">
                  <label htmlFor="" className="monteserrat flex gap-1">
                    First Name{" "}
                    <img src="./star.svg" alt="" className=" w-2 h-2" />{" "}
                  </label>
                  <input
                    type="text"
                    className="w-full border border-[#C2C2C2] rounded-[9px] p-3 mt-3 h-[45px]"
                    placeholder="Enter your business name"
                  />
                </div>
                <div className="grow">
                  <label htmlFor="" className="monteserrat flex gap-1">
                    Last Name{" "}
                    <img src="./star.svg" alt="" className=" w-2 h-2" />{" "}
                  </label>
                  <input
                    type="text"
                    className="w-full border border-[#C2C2C2] rounded-[9px] p-3 mt-3 h-[45px]"
                    placeholder="Enter your business name"
                  />
                </div>
              </div>
              <div className="w-full">
                <div>
                  <label htmlFor="" className="monteserrat flex gap-1">
                    Company Name{" "}
                    <img src="./star.svg" alt="" className=" w-2 h-2" />{" "}
                  </label>
                  <input
                    type="text"
                    className="w-full border border-[#C2C2C2] rounded-[9px] p-3 mt-3 h-[45px]"
                    placeholder="Enter your business name"
                  />
                </div>
              </div>
              <div className="w-full">
                <div>
                  <label htmlFor="" className="monteserrat flex gap-1">
                    Phone Number{" "}
                    <img src="./star.svg" alt="" className=" w-2 h-2" />{" "}
                  </label>
                  <input
                    type="text"
                    className="w-full border border-[#C2C2C2] rounded-[9px] p-3 mt-3 h-[45px]"
                    placeholder="Enter your business name"
                  />
                </div>
              </div>
              <div className="w-full">
                <div>
                  <label htmlFor="" className="monteserrat flex gap-1">
                    Email Address{" "}
                    <img src="./star.svg" alt="" className=" w-2 h-2" />{" "}
                  </label>
                  <input
                    type="text"
                    className="w-full border border-[#C2C2C2] rounded-[9px] p-3 mt-3 h-[45px]"
                    placeholder="Enter your business name"
                  />
                </div>
              </div>
            </div>

            <p className="text-[#10182899] mb-4 mt-10">Enter Address</p>

            <div className="w-full flex flex-col gap-3">
              <div className="w-full">
                <div>
                  <label htmlFor="" className="monteserrat flex gap-1">
                    Country <img src="./star.svg" alt="" className=" w-2 h-2" />{" "}
                  </label>
                  <input
                    type="text"
                    className="w-full border border-[#C2C2C2] rounded-[9px] p-3 mt-3 h-[45px]"
                    placeholder="Enter your business name"
                  />
                </div>
              </div>
              <div className="w-full">
                <div>
                  <label htmlFor="" className="monteserrat flex gap-1">
                    Street Address{" "}
                    <img src="./star.svg" alt="" className=" w-2 h-2" />{" "}
                  </label>
                  <input
                    type="text"
                    className="w-full border border-[#C2C2C2] rounded-[9px] p-3 mt-3 h-[45px]"
                    placeholder="Enter your business name"
                  />
                </div>
              </div>
              <div className="flex w-full gap-5">
                <div className=" grow">
                  <label htmlFor="" className="monteserrat flex gap-1">
                    State <img src="./star.svg" alt="" className=" w-2 h-2" />{" "}
                  </label>
                  <input
                    type="text"
                    className="w-full border border-[#C2C2C2] rounded-[9px] p-3 mt-3 h-[45px]"
                    placeholder="Enter your business name"
                  />
                </div>
                <div className="grow">
                  <label htmlFor="" className="monteserrat flex gap-1">
                    City/Town{" "}
                    <img src="./star.svg" alt="" className=" w-2 h-2" />{" "}
                  </label>
                  <input
                    type="text"
                    className="w-full border border-[#C2C2C2] rounded-[9px] p-3 mt-3 h-[45px]"
                    placeholder="Enter your business name"
                  />
                </div>
              </div>
              <div className="w-full">
                <div>
                  <label htmlFor="" className="monteserrat flex gap-1">
                    Zip Code{" "}
                    <img src="./star.svg" alt="" className=" w-2 h-2" />{" "}
                  </label>
                  <input
                    type="text"
                    className="w-full border border-[#C2C2C2] rounded-[9px] p-3 mt-3 h-[45px]"
                    placeholder="Enter your business name"
                  />
                </div>
              </div>
              <div className="w-full">
                <label
                  htmlFor="companyName"
                  className="opensans flex gap-3 text-[#333333] font-bold"
                >
                  <input type="checkbox" id="companyName" name="companyName" className="w-5 h-5 cursor-pointer"/>
                  Ship to a different address
                </label>
              </div>
            </div>
          </div>
          {/* order summary */}
          <div className="w-full mb-36">
            <h3 className="opensans text-3xl font-bold sm:mt-7 mb-5">
              Order Details
            </h3>
            <div className="w-full flex flex-col gap-5">
              <div className="w-full flex justify-between border-b-2 border-b-[#E0E0E0] pb-3">
                <p className="monteserrat text-[#1C1C1C] font-semibold">
                  Product
                </p>
                <p className="monteserrat text-[#1C1C1C] font-semibold">
                  Price
                </p>
              </div>
              <div className="w-full flex justify-between border-b-2 border-b-[#E0E0E0] pb-3">
                <p className="monteserrat text-[#AEACAC] font-semibold">Card</p>
                <p className="monteserrat text-[#AEACAC] font-semibold">
                  30 AED
                </p>
              </div>
              <div className="w-full flex justify-between border-b-2 border-b-[#E0E0E0] pb-3">
                <p className="monteserrat text-[#AEACAC] font-semibold">Tax</p>
                <p className="monteserrat text-[#AEACAC] font-semibold">
                  5 AED
                </p>
              </div>
              <div className="w-full flex justify-between pb-3">
                <p className="monteserrat text-[#1C1C1C] font-semibold">
                  Subtotal
                </p>
                <p className="monteserrat text-[#1C1C1C] font-semibold">
                  35 AED
                </p>
              </div>
              <div className="flex w-full justify-end">
                <button className=" bg-[#4F46BA] text-white py-3 rounded-[9px] font-bold text-md manrope px-5">
                  Place Order
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

export default Billing;
