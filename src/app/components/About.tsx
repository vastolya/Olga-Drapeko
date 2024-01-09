import React from "react";

import { montserrat } from "../fonts";

const About = () => {
  return (
    <div className="md:mx-[12.5vw] my-[11.11vh] grid grid-cols-6 md:gap-x-[1.25vw] text-[#1B1743]">
      <div className="col-span-2">123</div>
      <div className="col-span-3">
        <h1 className="md:text-[3.33vh] md:leading-[3.51vh] font-bold">Обо мне</h1>
       <div className={`${montserrat.className}`}>
        <p>123</p>
       </div>
      </div>
    </div>
  );
};

export default About;
