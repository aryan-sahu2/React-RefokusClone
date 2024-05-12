import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
function Products() {
  var products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
      url: "https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm",
    },
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
      url: "https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4",
    },
    {
      title: "Webflow",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow. ",
      live: true,
      case: false,
      url: "https://cdn.refokus.com/refokus-promo/webflow-education-promo.mp4",
    },
    {
      title: "Refokus",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design. ",
      live: true,
      case: true,
      url: "https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm",
    },
    {
      title: "Silvr",
      description:
        "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
      live: true,
      case: true,
      url: "https://cdn.refokus.com/website/2022/videos/Silvr.webm",
    },
  ];
  const moveFunc = (yParam) => {
    setPos(yParam * 20);
  };

  const [pos, setPos] = useState(0);

  return (
    <div className="mt-32 relative">
      {products.map((item, index) => {
        return (
          <Product
            mover={() => {
              moveFunc(index);
            }}
            key={index}
            value={item}
          />
        );
      })}
      <div className="absolute w-full h-full pointer-events-none  top-0">
        <motion.div
          initial={{ x: "-50%", y: pos, opacity: 0 }}
          animate={{ y: pos + `rem`, opacity: 1 }}
          transition={{ ease: [0.83, 0, 0.17, 1], duration: 0.6 }}
          className="w-96 h-[20rem]  absolute rounded-md hover:scale-110 left-[44%]  -translate-x-[50%] overflow-hidden"
        >
          {products.map((item, index) => {
            return (
              <motion.div
                key={index}
                transition={{ ease: [0.83, 0, 0.17, 1], duration: 0.5 }}
                animate={{ y: -pos + `rem` }}
                className="w-full h-full  "
              >
                <video
                  autoPlay
                  loop
                  muted
                  className="h-full object-cover w-full"
                  src={item.url}
                ></video>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
