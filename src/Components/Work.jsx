import React, { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
const Work = () => {
  var imagesData = [
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f112dec7a59534cca51a3d_portfolioCard_cc-01-p-500.webp",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cd6ec7666ac6009cfcb7db_11-p-500.jpg",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b2cab86e8df24e528c4441_Frame%201.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cc29f414c45ee4f46aa3ba_01-p-500.jpg",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41324914b470b20ec7d03_Frame%203.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cd6ecc885579ba1b4ffc97_10.jpg",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ];
  const [images, setImages] = useState(imagesData);

  const { scrollYProgress } = useScroll();
  scrollYProgress.on("change", (data) => {
    function imageShow(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }
    switch (Math.floor(data * 100)) {
      case 0:
        imageShow([]);
        break;
      case 3:
        imageShow([0]);
        break;
      case 4:
        imageShow([0,1]);
        break;
      case 6:
        imageShow([0,1, 2]);
        break;
      case 8:
        imageShow([0,1, 2, 3]);
        break;
      case 10:
        imageShow([0,1, 2, 3, 4]);
        break;
      case 11:
        imageShow([0,1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto text-center relative">
        <h1 className="text-[30vw] mt-20 font-medium select-none leading-none">
          work
        </h1>
        <div className="absolute  top-0 w-full h-full ">
          {images.map((item, index) =>
            item.isActive ? (
              <img
                key={index}
                className="w-60 rounded-lg absolute -translate-x-[50%] -translate-y-[50%]"
                style={{ top: item.top, left: item.left }}
                src={item.url}
                alt=""
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
