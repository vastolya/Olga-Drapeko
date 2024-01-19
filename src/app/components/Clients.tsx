import React from "react";
import Image from "next/image";

import PicClient01 from "../../../public/pics/picClient01.svg";
import PicClient02 from "../../../public/pics/picClient02.svg";
import PicClient03 from "../../../public/pics/picClient03.svg";
import PicClient04 from "../../../public/pics/picClient04.svg";
import PicClient05 from "../../../public/pics/picClient05.svg";
import PicClient06 from "../../../public/pics/picClient06.svg";
import PicClient07 from "../../../public/pics/picClient07.svg";

const clientArray = [
  { src: PicClient01 },
  { src: PicClient02 },
  { src: PicClient03 },
  { src: PicClient04 },
  { src: PicClient05 },
  { src: PicClient06 },
  { src: PicClient07 },
];

const Clients = () => {
  return (
    <section className=" bg-gradient-to-r from-[#EBECF1] to-[#FCFCFD]">
      <div className="px-3 md:px-[12.5vw] py-[60px] md:py-[11.11vh] grid grid-cols-3 md:grid-cols-6 md:gap-x-[1.25vw] ">
        <h1
          className={`md:col-start-3 col-span-3 md:col-span-4 md:text-[3.33vh] text-[24px] leading-[26px] md:leading-[3.51vh] font-bold text-[#1B1743] pb-6 md:pb-[7.4vh]`}
        >
          Доверие клиентов
        </h1>
        <div className="md:col-span-6 col-span-3 flex md:gap-[2.5vw] gap-6 md:mx-auto overflow-hidden overflow-x-auto focus:overflow-x-scroll scrollbar-hide">
          {clientArray.map((item, index) => (
            <div key={index} className="flex md:items-center md:justify-center ">
              <Image
                src={item.src}
                alt=""
                width={300}
                className="md:h-full min-h-[80px] min-w-[120px] object-contain grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
