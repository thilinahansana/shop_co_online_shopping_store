import React from "react";
import { FaStar } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { GiSettingsKnobs } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";
const Rating = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto p-4">
        <div className=" flex justify-between items-center mb-6">
          <h1 className="md:text-xl text-sm font-bold">
            All Reviews <span className="text-sm font-light">(451)</span>
          </h1>
          <div className="flex items-center space-x-4">
            <div className="bg-slate-200 p-3 rounded-full ">
              <GiSettingsKnobs className="text-xl" />
            </div>
            <div className="bg-slate-200 py-3 px-6 rounded-full items-center justify-between hidden md:flex">
              <p>Latest</p>
              <RiArrowDropDownLine className="text-2xl" />
            </div>
            <div className="bg-black text-white text-sm md:text-lg py-3 px-6 rounded-full">
              <p>Write a Review</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center  lg:grid lg:grid-cols-2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0 border rounded-xl p-6 md:p-8 min-w-[300px] max-w-[600px] space-y-2 mb-6"
            >
              <div className="flex items-center space-x-2">
                <FaStar className="text-yellow-400 text-xl" />
                <FaStar className="text-yellow-400 text-xl" />
                <FaStar className="text-yellow-400 text-xl" />
                <FaStar className="text-yellow-400 text-xl" />
                <FaStar className="text-yellow-400 text-xl" />
              </div>
              <div className="space-y-4">
                <div className="flex space-x-2 items-center">
                  <h1 className="text-xl font-semibold">Sarah M.</h1>
                  <FaCircleCheck className="text-xl text-green-600" />
                </div>
                <p className="text-sm">
                  "I'm blown away by the quality and style of the clothes I
                  received from Shop.co. From casual wear to elegant dresses,
                  every piece I've bought has exceeded my expectations.”
                </p>
                <p>Posted on August 24,2024</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="border rounded-full py-3 px-8">
            Load More Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rating;
