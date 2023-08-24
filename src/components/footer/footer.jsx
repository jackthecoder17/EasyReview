import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-[#4F46BA]">
      <div className="w-[90%] mx-auto bg-slateblue flex flex-row pt-20 flex-wrap  pb-20 items-start  gap-11 lg:gap-40 text-lg text-white font-manrope ">
        <div className="flex flex-col px-2.5">
          <img className="w-32" alt="" src="/logo.svg" />
        </div>
        <div className="flex flex-col px-2.5 gap-4">
          <b className="tracking-tight leading-6">Product</b>
          <div className="flex flex-col gap-2 text-sm text-gray-300">
            <Link to="/howitworks" className="leading-6">How it’s work</Link>
            <Link to="/" className="leading-6">Dashboard</Link>
          </div>
        </div>
        <div className="flex flex-col px-2.5 gap-4">
          <b className="tracking-tight leading-6">Resources</b>
          <div className="flex flex-col gap-2 text-sm text-gray-300">
            <div className="leading-6">Knowledge Center</div>
            <div className="leading-6">Support Portal</div>
          </div>
        </div>
        <div className="flex flex-col px-2.5 gap-4">
          <b className="tracking-tight leading-6">Company</b>
          <div className="flex flex-col gap-2 text-sm text-gray-300">
            <Link className="leading-6" to="/aboutus">About Us</Link>
            <Link className="leading-6" to="contactus">Contact</Link>
            <div className="leading-6">Support</div>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto bg-slateblue flex flex-row pt-6 pb-6 items-start justify-center text-sm text-gray-300 font-manrope  bg-[#4F46BA]">
        <div className="container mx-auto flex flex-row items-start justify-between">
          <div className="flex flex-row flex-wrap items-start justify-start">
            <div className="self-stretch relative leading-6 flex items-center ">
              © 2023 · Easyreview.in
            </div>
          </div>
          <div className="flex flex-row flex-wrap items-start justify-end text-right">
            <div className="relative flex flex-row flex-wrap items-start justify-end gap-4">
              <div className="flex flex-row items-end justify-end gap-5">
                <div className="relative leading-6">Privacy Policy</div>
                <div className="relative box-border w-px h-6 border-l border-gainsboro"></div>
              </div>
              <div className="flex flex-row items-start justify-end">
                <div className="relative leading-6">Terms of Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
