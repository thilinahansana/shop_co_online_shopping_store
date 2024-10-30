import React, { useState } from "react";
import Description from "./Description";
import Rating from "./Rating";
import FAQs from "./FAQs";

const ProductDetails = () => {
  const [page, setPage] = useState("description");

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex flex-row justify-evenly">
          <h1
            className="text-md md:text-xl cursor-pointer"
            onClick={() => handlePageChange("description")}
          >
            Product Details
          </h1>
          <h1
            className="text-md md:text-xl cursor-pointer"
            onClick={() => handlePageChange("rating")}
          >
            Rating & Reviews
          </h1>
          <h1
            className="text-md md:text-xl cursor-pointer"
            onClick={() => handlePageChange("faqs")}
          >
            FAQs
          </h1>
        </div>
        <div>
          {page === "description" && <Description />}
          {page === "rating" && <Rating />}
          {page === "faqs" && <FAQs />}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
