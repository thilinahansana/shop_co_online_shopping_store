import React from "react";
import { FaStar } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

const HappyCustomers = () => {
  return (
    <div className="w-full relative">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold mt-8 uppercase py-8">
          Happy Customers
        </h1>
        <div
          className="overflow-x-auto flex space-x-4 pb-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Customer card 1 */}
          <div className="flex-shrink-0 border rounded-xl p-8 space-y-4 min-w-[300px] max-w-[350px]">
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
            </div>
          </div>

          {/* Customer card 2 */}
          <div className="flex-shrink-0 border rounded-xl p-8 space-y-4 min-w-[300px] max-w-[350px]">
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
            </div>
          </div>
          <div className="flex-shrink-0 border rounded-xl p-8 space-y-4 min-w-[300px] max-w-[350px]">
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
            </div>
          </div>
          <div className="flex-shrink-0 border rounded-xl p-8 space-y-4 min-w-[300px] max-w-[350px]">
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
            </div>
          </div>

          {/* Repeat for additional customer cards */}
        </div>
      </div>
    </div>
  );
};

export default HappyCustomers;
