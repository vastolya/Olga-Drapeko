"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import PicMain from "../../../public/pics/picMain.jpg";

import { montserrat } from "../fonts";

import Button from "./Button";

const mainArray = [
  {
    title: "Юридические лица",
    description:
      "Сопровождение сделок, помощь в урегулировании правовых конфликтов и разрешении других юридических задач",
    services: [
      { title: "Юридическое сопровождение бизнеса (аутсорсинг)", link: "/#" },
      { title: "Разрешение споров и медиация", link: "/#" },
    ],
  },
  {
    title: "Физические лица",
    description:
      "Консультации по правовым вопросам, сопровождение сделок, представление ваших интересов в суде",
    services: [{ title: "Разрешение споров и медиация", link: "/#" }],
  },
  {
    title: "Банкротство",
    description: "Представление интересов по делам о банкротстве",
    services: [{ title: "Юридическое сопровождение банкротства", link: "/#" }],
  },
];

const Main = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index: any) => {
    setSelectedItem(index);
  };

  return (
    <main className="bg-gradient-to-r from-[#EBECF1] to-[#FCFCFD]">
      <div className="md:mx-[12.5vw] grid grid-cols-6 md:gap-x-[1.25vw] text-[#1B1743] select-none md:pb-[11.11vh]">
        <div className="col-span-2">
          <div className="relative">
            <div className="z-[22] absolute">
              <Image
                src={PicMain}
                alt="main portrait"
                width={600}
                className="md:w-[20.72vw] md:h-[61.11vh] object-cover rounded-md"
              />
            </div>
            <div className="bg-[#D8CACF] absolute top-[1.85vh] left-[1.04vw] md:w-[20.72vw] md:h-[61.11vh] rounded-md "></div>
          </div>
        </div>
        <div className="col-start-3 col-span-4 md:my-[14.6vh]">
          <div className="flex gap-x-[0.05vw] md:pb-[5.55vh]">
            {mainArray.map((item, index) => (
              <div
                key={index}
                onClick={() => handleItemClick(index)}
                className={`border-[0.11vh] px-[0.83vw] py-[1.11vh] first:rounded-l-md last:rounded-r-md ${
                  selectedItem === index
                    ? "border-[#962C52]"
                    : "border-[#D3D3E3]"
                } cursor-pointer`}
              >
                <p
                  className={` ${
                    selectedItem === index ? "text-[#962C52]" : "text-[#D3D3E3]"
                  } md:text-[1.48vh] md:leading-[2.22vh] font-semibold ${
                    montserrat.className
                  }`}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <h1 className="font-bold md:text-[7.40vh] md:leading-[7.40vh] md:pb-[4.44vh]">
            Юрист для бизнеса
            <br />и частных лиц
          </h1>
          <div className="">
            <Button title="Записаться на консультацию" />
          </div>
        </div>
        <div className="col-span-2 md:mt-[7.40vh]">
          <h1 className="md:text-[3.33vh] md:leading-[3.51vh] md:pb-[1.85vh] font-bold">
            {mainArray[selectedItem].title}
          </h1>
          <p
            className={`md:text-[1.48vh] md:leading-[2.22vh] font-medium ${montserrat.className}`}
          >
            {mainArray[selectedItem].description}
          </p>
        </div>
        <div className="col-span-4 md:mt-[7.40vh] grid md:gap-y-[0.74vh]">
          {mainArray[selectedItem].services.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={`h-fit flex items-center px-[1.25vw] py-[2.22vh] bg-white border-[1px] border-[#F0F0F5] font-bold md:text-[1.66vh] md:leading-[2.22vh] rounded-md ${montserrat.className}`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
