import React from "react";
import versace from "../../assets/brands/Group.png";
import zara from "../../assets/brands/Group1.png";
import gucci from "../../assets/brands/Group2.png";
import prada from "../../assets/brands/Group3.png";
import calvin from "../../assets/brands/Group4.png";

const Brands = () => {
  return (
    <div className="w-full bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
          <img src={versace} alt="Versace" className="" />
          <img src={zara} alt="Zara" className="" />
          <img src={gucci} alt="Gucci" className="" />
          <img src={prada} alt="Prada" className="" />
          <img
            src={calvin}
            alt="Calvin Klein"
            className="col-span-2 md:col-span-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Brands;
