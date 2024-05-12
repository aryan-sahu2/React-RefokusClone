import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const Button = ({title="Get Started"}) => {
  return (
    <div className="px-4 py-1 rounded-full text-sm bg-zinc-100 min-w-40 max-w-40  text-black border">
      <span className="text-sm flex items-center justify-between">
        {title} <BsArrowReturnRight />
      </span>
    </div>
  );
};

export default Button;
