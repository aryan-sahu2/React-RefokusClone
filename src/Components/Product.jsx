import React from "react";
import Button from "./Button";

function Product({ value, mover }) {
  return (
    <div className="w-full py-9 h-[20rem] hover:bg-slate-900 transition-all text-white">
      <div
        onMouseEnter={mover}
        onMouseLeave={mover}
        className="max-w-screen-xl mx-auto flex items-center justify-between"
      >
        <h1 className="text-6xl capitalize font-medium">{value.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10">{value.description}</p>
          <div className="flex items-center gap-4">
            {value.live && <Button title="Live Website"></Button>}
            {value.case && <Button title="Case Study"></Button>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
