"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";

import PicMain from "../../../public/pics/picMain.jpg";

import { montserrat } from "../fonts";
import { evolventa } from "../fonts";
import Button from "./Button";

const mainArray = [
  {
    title: "Юридические лица",
    description:
      "Сопровождение сделок, помощь в урегулировании правовых конфликтов и разрешении других юридических задач",
  },
  {
    title: "Физические лица",
    description:
      "Консультации по правовым вопросам, сопровождение сделок, представление ваших интересов в суде",
  },
  {
    title: "Банкротство",
    description: "Представление интересов по делам о банкротстве",
  },
];

const Main = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index: any) => {
    setSelectedItem(index);
  };

  return (
    <main className="bg-gradient-to-r from-[#EBECF1] to-[#FCFCFD]">
      <div className="md:mx-[12.5vw] grid grid-cols-6 text-[#1B1743] select-none">
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
                className={`border-[0.09vh] px-[0.83vw] py-[1.11vh] ${
                  selectedItem === index
                    ? "border-[#962C52]"
                    : "border-[#D3D3E3]"
                } cursor-pointer`}
              >
                <p
                  className={` ${
                    selectedItem === index ? "text-[#962C52]" : "text-[#D3D3E3]"
                  } md:text-[1.48vh] md:leading-[2.22vh] ${
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
        <div>123</div>
      </div>
    </main>
  );
};

export default Main;
