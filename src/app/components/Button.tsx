import React from "react";

import { montserrat } from "../fonts";

const Button = (props: any) => {
  return (
    <button
      className={`md:py-[1.11vh] md:px-[1.25vw] rounded-md bg-[#962C52] text-white  ${montserrat.className} md:text-[1.48vh] md:leading-[2.22vh] font-semibold w-fit`}
    >
      {props.title}
    </button>
  );
};

export default Button;
