import React from "react";
import { motion } from "framer-motion";

function Marquee({ values, direction }) {
  return (
    <div className="flex w-full relative overflow-x-hidden">
      <div className="absolute top-0 left-0 w-1/4 z-10 bg-gradient-to-l from-transparent to-[#18181B] h-full"></div>
      <div className="absolute top-0 right-0 w-1/4 z-10 bg-gradient-to-r from-transparent to-[#18181B] h-full"></div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
        className="flex w-ful py-16 gap-32 whitespace-nowrap relative z-0"
      >
        {values.map((item, index) => {
          return (
            <img key={index} src={item} alt="" className="w-32 flex-shrink-0" />
          );
        })}
        {values.map((item, index) => {
          return (
            <img key={index} src={item} alt="" className="w-32 flex-shrink-0" />
          );
        })}
      </motion.div>
    </div>
  );
}

export default Marquee;
