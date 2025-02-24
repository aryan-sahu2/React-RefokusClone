import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div className="max-w-screen-xl py-6 mx-auto flex justify-between items-center border-b-2 border-zinc-700">
        <div className="nleft flex items-center">
          <img
            src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
            alt=""
          />
          <div className="links gap-14 flex ml-20">
            {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
              elem.length === 0 ? (
                <span key={index} className="h-6 w-[2px] bg-zinc-500"></span>
              ) : (
                <a
                  key={index}
                  className="text-sm items-center flex font-regular "
                  href="#"
                >
                  {index === 1 && (
                    <span
                      key={index}
                      style={{ boxShadow: " 0 0 0.45em #00FF19" }}
                      className="inline-block w-1 h-1 mx-1 rounded-full  bg-green-500"
                    ></span>
                  )}
                  {elem}
                </a>
              )
            )}
          </div>
        </div>
        <Button title="Get Started"></Button>
      </div>
    </>
  );
};

export default Navbar;
