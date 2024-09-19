import React from "react";
import { IoMailOpenOutline } from "react-icons/io5";

const Newsletter = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black rounded-3xl">
          <div className="container mx-auto p-8">
            <div className="flex flex-col lg:flex-row justify-evenly items-center lg:space-x-8 space-y-6 lg:space-y-0">
              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center lg:text-left lg:w-2/3">
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
              </h1>
              <div className="flex flex-col space-y-4 items-center w-full lg:w-auto">
                <div className="flex bg-white items-center px-6 sm:px-12 rounded-full w-full max-w-sm">
                  <IoMailOpenOutline className="text-xl text-slate-700" />
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    className="bg-transparent border-none focus:ring-0 focus:outline-none py-2 px-2 text-slate-700 placeholder:text-slate-400 w-full"
                  />
                </div>
                <button className="bg-white px-12 sm:px-14  py-2 rounded-full">
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
