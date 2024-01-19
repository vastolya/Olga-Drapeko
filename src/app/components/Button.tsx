import React from "react";

import { montserrat } from "../fonts";

const Button = (props: any) => {
  return (
    <button
      className={`py-4 md:py-[1.11vh] md:px-[1.25vw] md:rounded-[0.74vh] rounded-md transition-all ease-in-out duration-300 bg-[#962C52] hover:bg-[#1B1743] text-white  ${montserrat.className} text-base md:text-[1.48vh] leading-6 md:leading-[2.22vh] font-semibold md:w-fit w-full hover:shadow-md active:scale-[97%] transition-all`}
    >
      {props.title}
    </button>
  );
};

export default Button;
