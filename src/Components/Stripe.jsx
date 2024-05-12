import React from "react";

function Stripe({values}) {
  return (
    <div className="w-[16.66%] px-[1.2vw] py-5 border-t-[1.2px] border-b-[1.2px] border-r-[1px] flex items-center justify-between gap-9 border-zinc-700">
      <img src={values.url} alt="" />
      <span className="font-semibold">{values.number}</span>
    </div>
  );
}

export default Stripe;
