import React from "react";

function Footer() {
  return (
    <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
      <div className="basis-1/2">
        <h1 className="text-[12rem] font-semibold leading-none tracking-tight">
          refokus.
        </h1>
      </div>
      <div className="basis-1/2 flex text-sm gap-8">
        <div>
          <h4 className="basis-1/3 mb-10 text-zinc-500 capitalize">socials</h4>
          {["instagram", "twitter (x?)", "linkedin"].map((item, index) => {
            return (
              <a key={index} className="text-zinc-400 block mt-2 capitalize">{item}</a>
            );
          })}
        </div>
        <div>
          <h4 className="basis-1/3 mb-10 text-zinc-400 capitalize">Sitemap</h4>
          {["Home", "Careers", "Channel", "Contact"].map((item, index) => {
            return (
              <a key={index} className="text-zinc-200 block mt-2 capitalize">{item}</a>
            );
          })}
        </div>
        <div className="basis-1/2 flex flex-col items-end">
          <p className="text-right">Refokus is a pioneering digital agency driven by design and empowered
          by technology.</p>
          <div className="flex bg-[#7443FF] w-fit px-4 py-2 gap-3 rounded-md mt-5 items-center justify-start h-7">
          <img className="h-full" src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/633495afcda694178a5243f6_Logo%20mark.svg" alt="" />
          <h3 className="font-semibold">refokus.</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
