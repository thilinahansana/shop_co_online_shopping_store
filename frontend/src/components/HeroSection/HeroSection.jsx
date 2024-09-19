import React from "react";
import mainimg from "../../assets/Hero/heroimg.png";

const HeroSection = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:space-x-20 p-4">
        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mt-4">
            Find Clothes That Match Your Style
          </h1>
          <p className="text-gray-500 mt-4 md:mt-6 lg:mt-12">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black text-white px-28 md:px-10 py-3 mt-6 rounded-full">
            Shop Now
          </button>
          {/* Statistics */}
          <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 md:mt-10">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="text-3xl md:text-4xl font-bold">200+</h1>
              <p className="text-gray-500">International Brands</p>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="text-3xl md:text-4xl font-bold">2000+</h1>
              <p className="text-gray-500">High-Quality Products</p>
            </div>
            <div className="flex flex-col items-center lg:items-start col-span-2 md:col-span-1">
              <h1 className="text-3xl md:text-4xl font-bold">30,000+</h1>
              <p className="text-gray-500">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <img src={mainimg} alt="hero" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
