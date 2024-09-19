import React from "react";
import { motion } from "framer-motion";
import casual from "../../assets/dressstyle/image 11.png";
import formal from "../../assets/dressstyle/image 13.png";
import party from "../../assets/dressstyle/image 12.png";
import gym from "../../assets/dressstyle/image 14.png";

const hoverEffect = {
  scale: 1.05,
  transition: {
    duration: 0.3,
    ease: "easeInOut",
  },
};

const DressStyle = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 flex flex-col items-center bg-slate-200 rounded-3xl">
        <h1 className="text-3xl md:text-5xl font-extrabold mt-8 uppercase text-center">
          Browse By Dress Style
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-10">
          <motion.div
            className="bg-slate-50 md:h-60 h-48 rounded-xl relative overflow-hidden"
            whileHover={hoverEffect}
          >
            <img
              src={casual}
              alt="Casual"
              className="object-cover w-full h-full"
            />
            <h1 className="text-2xl font-semibold text-gray-800 absolute top-4 left-4">
              Casual
            </h1>
          </motion.div>

          <motion.div
            className="bg-slate-50 md:h-60 h-48 rounded-xl relative overflow-hidden md:col-span-2"
            whileHover={hoverEffect}
          >
            <img
              src={formal}
              alt="Formal"
              className="object-cover w-full h-full"
            />
            <h1 className="text-2xl font-semibold text-gray-800 absolute top-4 left-4">
              Formal
            </h1>
          </motion.div>

          <motion.div
            className="bg-slate-50 md:h-60 h-48 rounded-xl relative overflow-hidden md:col-span-2"
            whileHover={hoverEffect}
          >
            <img
              src={party}
              alt="Party"
              className="object-cover w-full h-full"
            />
            <h1 className="text-2xl font-semibold text-gray-800 absolute top-4 left-4">
              Party
            </h1>
          </motion.div>

          <motion.div
            className="bg-slate-50 md:h-60 h-48 rounded-xl relative overflow-hidden"
            whileHover={hoverEffect}
          >
            <img src={gym} alt="Gym" className="object-cover w-full h-full" />
            <h1 className="text-2xl font-semibold text-gray-800 absolute top-4 left-4">
              Gym
            </h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DressStyle;
