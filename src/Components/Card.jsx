import React from "react";
import { motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";

function Card({ width, head, para, hoverProp = false }) {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hoverProp && "#7443FF",
        paddingLeft: "30px",
        paddingRight: "25px",
      }}
      className={` p-5 rounded-xl bg-zinc-800  min-h-[30rem] flex flex-col justify-between ${width}`}
    >
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h3>Up Next: Culture</h3>
          <GoArrowRight />
        </div>
        <h1 className="text-3xl font-medium mt-10">Who we are</h1>
      </div>
      <div className="down w-full mt-0 ">
        {head && (
          <>
            <h1 className="text-6xl font-semibold tracking-normal leading-none">
              Start a project
            </h1>
            <button className="rounded-full px-5 py-2 border-zinc-50 border-[1px] mt-5">
              Contact Us
            </button>
          </>
        )}

        {para && (
          <p className="text-sm font-medium text-zinc-500 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ad
            dolore corporis.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
