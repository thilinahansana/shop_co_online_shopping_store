import React from "react";
import { FaStar } from "react-icons/fa";
import s1 from "../../assets/Products/s1.png";
import s2 from "../../assets/Products/s2.png";
import s3 from "../../assets/Products/s3.png";
import t1 from "../../assets/Products/t1.png";

const NewArrivals = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="md:text-5xl text-3xl font-extrabold py-10 uppercase">
          New Arrivals
        </h1>
        <div
          className="w-full lg:grid-cols-4 md:grid-cols-4 flex justify-evenly overflow-x-auto space-x-4 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex-shrink-0 w-48 md:w-64">
            <img src={s1} alt="Product 1" className="rounded-xl" />
            <div className="space-y-1">
              <h1 className="mt-4 font-semibold text-sm md:text-lg">
                T-Shirt With Tape Details
              </h1>
              <div className="flex items-center space-x-2">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <p className="text-sm md:text-lg">4.5/5</p>
              </div>
              <h1 className="text-xl font-semibold">$120</h1>
            </div>
          </div>
          <div className="flex-shrink-0 w-48 md:w-64">
            <img src={t1} alt="Product 2" className="rounded-xl" />
            <div className="space-y-1">
              <h1 className="mt-4 font-semibold text-sm md:text-lg">
                T-Shirt With Tape Details
              </h1>
              <div className="flex items-center space-x-2">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <p className="text-sm md:text-lg">4.5/5</p>
              </div>
              <div className="flex space-x-4 items-center">
                <h1 className="text-xl font-semibold">$240</h1>
                <h1 className="text-xl font-semibold text-gray-400 line-through">
                  $260
                </h1>
                <h1 className="text-xs bg-red-100 text-red-500 rounded-full px-2 py-1">
                  -20%
                </h1>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-48 md:w-64">
            <img src={s2} alt="Product 3" className="rounded-xl" />
            <div className="space-y-1">
              <h1 className="mt-4 font-semibold text-sm md:text-lg">
                T-Shirt With Tape Details
              </h1>
              <div className="flex items-center space-x-2">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <p className="text-sm md:text-lg">4.5/5</p>
              </div>
              <h1 className="text-xl font-semibold">$180</h1>
            </div>
          </div>
          <div className="flex-shrink-0 w-48 md:w-64">
            <img src={s3} alt="Product 4" className="rounded-xl" />
            <div className="space-y-1">
              <h1 className="mt-4 font-semibold text-sm md:text-lg">
                T-Shirt With Tape Details
              </h1>
              <div className="flex items-center space-x-2">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <p className="text-sm md:text-lg">4.5/5</p>
              </div>
              <div className="flex space-x-4 items-center">
                <h1 className="text-xl font-semibold">$130</h1>
                <h1 className="text-xl font-semibold text-gray-400 line-through">
                  $160
                </h1>
                <h1 className="text-xs bg-red-100 text-red-500 rounded-full px-2 py-1">
                  -30%
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10">
          <button className="px-20 py-3 mt-4 border rounded-full">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
