import React from "react";
import localFont from "next/font/local";
import Image from "next/image";

import IconTelegram from "../../../public/icons/iconTelegram.svg";
import IconWhatsapp from "../../../public/icons/iconWhatsapp.svg";

import {montserrat} from '../fonts'



const Header = () => {
  const menuArray = [
    { title: "Услуги" },
    { title: "Обо мне" },
    { title: "Контакты" },
  ];
  const socialArray = [
    { src: IconTelegram, alt: "Telegram" },
    { src: IconWhatsapp, alt: "Whatsapp" },
  ];

  const contactPhone = "+7 923 341 32 66";
  const contactEmail = "oa.drapeko@gmail.com";

  return (
    <header className="md:mx-[12.5vw] text-[#1B1743] flex justify-between">
      <div className="flex items-center">
        <div>
          <p className="text-[#962C52] md:text-[1.11vh] md:leading-[1.38vh] ">
            Юрист
          </p>
          <p className=" font-bold md:text-[2.03vh] md:leading-[2.59vh]">
            Ольга Драпеко
          </p>
        </div>
      </div>
      <div
        className={`flex md:gap-x-[6.25vw]  ${montserrat.className} md:text-[1.48vh] md:leading-[2.22vh] font-semibold`}
      >
        <div className="flex md:gap-x-[2.08vw] items-center">
          {menuArray.map((item, index) => (
            <p key={index} className={`md:px-[0.62vw] md:py-[1.11vh]`}>
              {item.title}
            </p>
          ))}
        </div>
        <div className="flex md:gap-x-[2.5vw] md:py-[2.59vh]">
          <div className=" text-end">
            <p className="md:pb-[1.11vh]">{contactEmail}</p>
            <p>{contactPhone}</p>
          </div>
          <div className="flex md:gap-x-[0.41vw] items-center">
            {socialArray.map((item, index) => (
              <div key={index} className="bg-[#F8F6F7] h-fit rounded-md">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={24}
                  className="mx-[0.62vw] my-[1.11vh] md:h-[2.22vh] md:w-[1.25vw]"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
