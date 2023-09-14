import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Mainnav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white w-full sticky top-0 z-10">
      <nav className="bg-white w-full mx-auto" aria-label="Global">
        <div className="w-[90%] mx-auto flex items-center justify-between sm:p-6 pt-3 sm:pb-0 pb-2">
          <div className="flex lg:flex-1">
            <Link to="/" href="#" className="">
              <span className="sr-only">Your Company</span>
              <img className=" h-8 sm:h-12 w-auto" src="/logo1.svg" alt="" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Link
              href="#"
              to="/howitworks"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              How it works
            </Link>
            <Link
              to="/pricing"
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Pricing
            </Link>
            <Link
              to="/contactus"
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Contact Us
            </Link>
            <Link
              to="/aboutus"
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              About Us
            </Link>
            <Link
              to="/blog"
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Blog
            </Link>
          </Popover.Group>
          <Link
            to="/pricing"
            className="hidden lg:flex lg:flex-1 lg:justify-end"
          >
            <button className="bg-[#4F46BA] text-white py-2 px-6 rounded-lg flex">
              Get Started
            </button>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden trasnsition-all ease-in-out duration-500"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10  overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 trasnsition-all ease-in-out duration-500">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              {/* <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              /> */}
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/howitworks"
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  How it works
                </Link>
                <Link
                  to="/pricing"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Pricing
                </Link>
                <Link
                  to="/contactus"
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </Link>
                <Link
                  to="/aboutus"
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </Link>
                <Link
                  to="/blog"
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Blog
                </Link>
              </div>
              <Link className="py-6" to="/pricing">
                <button className="bg-[#4F46BA] text-white py-2 px-6 rounded-lg flex">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Mainnav;
