import React, { useState } from "react";
import productImg1 from "../../assets/Products/image1.png"; // Replace with your actual images
import productImg2 from "../../assets/Products/image2.png";
import productImg3 from "../../assets/Products/image3.png";
import productImg4 from "../../assets/Products/image4.png";
import { FaCircle, FaStar } from "react-icons/fa";
import { GoCheckCircleFill, GoPlus } from "react-icons/go";
import { HiOutlineMinusSmall } from "react-icons/hi2";

const ProductOverview = () => {
  const [selectedImage, setSelectedImage] = useState(productImg1); // Default image
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
      {/* Left Section - Image Gallery */}
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:justify-between lg:space-x-10">
        {/* Thumbnail Images */}
        <div className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4 lg:w-1/4">
          {[productImg1, productImg2, productImg3].map((img, index) => (
            <div
              key={index}
              className="bg-gray-200 w-24 h-24 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-3xl relative overflow-hidden z-10"
            >
              <img
                src={img}
                alt={`product thumbnail ${index + 1}`}
                className={`w-full h-full object-cover ${
                  selectedImage === img
                    ? "border-2 border-black"
                    : "border border-gray-300"
                } rounded-3xl cursor-pointer`}
                onClick={() => setSelectedImage(img)}
              />
            </div>
          ))}
        </div>

        {/* Main Product Image */}
        <div className="w-11/12 sm:w-3/4 lg:w-3/4 h-48 sm:h-64 lg:h-full max-w-md lg:px-2 bg-gray-200 rounded-3xl mb-4 lg:mb-0">
          <img
            src={productImg4}
            alt="selected product"
            className="w-4/6 h-full mx-auto"
          />
        </div>
      </div>

      {/* Right Section - Product Information */}
      <div className="flex flex-col space-y-4 mt-6 lg:mt-0">
        {/* Product Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
          ONE LIFE GRAPHIC T-SHIRT
        </h1>

        {/* Rating */}
        <div className="flex items-center">
          <div className="flex text-yellow-500 space-x-2">
            {/* Star rating */}
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-lg sm:text-xl" />
            ))}
          </div>
          <span className="ml-2 text-gray-600 text-sm sm:text-base">4.5/5</span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-2xl sm:text-3xl font-semibold">$260</span>
          <span className="line-through text-gray-400 text-lg sm:text-xl font-semibold">
            $300
          </span>
          <span className="text-red-500 bg-red-100 rounded-full px-2 sm:px-3 py-1">
            -40%
          </span>
        </div>

        {/* Product Description */}
        <p className="text-gray-500 text-sm sm:text-base">
          This graphic t-shirt is perfect for any occasion. Crafted from a soft
          and breathable fabric, it offers superior comfort and style.
        </p>
        <hr className="border-t border-gray-200 my-4" />

        {/* Color Selection */}
        <div>
          <h3 className="text-sm sm:text-lg font-light mb-2 text-gray-500">
            Select Colors
          </h3>
          <div className="flex space-x-3">
            <GoCheckCircleFill className="text-[#5b4921] text-3xl sm:text-4xl" />
            <FaCircle className="text-[#2a3e2b] text-3xl sm:text-4xl" />
            <FaCircle className="text-[#232C4F] text-3xl sm:text-4xl" />
          </div>
        </div>
        <hr className="border-t border-gray-200 my-4" />

        {/* Size Selection */}
        <div>
          <h3 className="text-sm sm:text-lg font-light mb-2 text-gray-500">
            Choose Size
          </h3>
          <div className="flex space-x-2 sm:space-x-4">
            {["Small", "Medium", "Large", "X-Large"].map((size) => (
              <button
                key={size}
                className={`px-4 py-2 text-sm sm:px-8 xl:text-lg sm:py-3 rounded-full ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <hr className="border-t border-gray-200 my-6" />

        {/* Quantity Selector and Add to Cart */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* Quantity selector */}
          <div className="flex items-center justify-between space-x-2 bg-gray-100 rounded-full px-6 sm:px-8 py-2 sm:py-3 w-2/3 sm:w-1/3">
            <HiOutlineMinusSmall
              className=" text-xl sm:text-2xl cursor-pointer"
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            />
            <span className="text-lg sm:text-xl">{quantity}</span>
            <GoPlus
              className="text-xl sm:text-2xl cursor-pointer"
              onClick={() => setQuantity(quantity + 1)}
            />
          </div>

          {/* Add to Cart Button */}
          <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full w-full sm:w-2/3">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
