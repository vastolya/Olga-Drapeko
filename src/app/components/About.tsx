"use client";
import React, { RefObject, createRef, useRef } from "react";
import Image from "next/image";
import PicAbout from "../../../public/pics/picAbout.jpg";

import { montserrat } from "../fonts";
import { evolventa } from "../fonts";

export const aboutMeRef: RefObject<HTMLDivElement> = createRef();

const About = () => {
  return (
    <section id="aboutMe" ref={aboutMeRef} className="relative">
      <div className=" mx-3 md:px-[12.5vw] my-[60px] md:my-0 md:pt-[11.11vh] md:pb-[12.96vh] grid md:grid-cols-6 grid-cols-3 md:gap-x-[1.25vw] text-[#1B1743]">
        <div className="col-span-2 hidden md:block relative ">
          <div className="bg-[#D8CACF] h-[66.38vh] w-full absolute top-0 left-[-1.04vw] rounded-tr-[550px] rounded-md"></div>
          <div className="z-[22] absolute w-full">
            <Image
              src={PicAbout}
              alt={`pic about`}
              height={1000}
              className="h-[64.53vh] w-full object-cover rounded-tl-[550px] rounded-md z-10"
            />
          </div>
        </div>
        <div
          className={`col-span-3 ${montserrat.className} md:text-[1.48vh] text-sm leading-[20px] md:leading-[2.22vh] font-medium md:pb-[12.96vh]`}
        >
          <h1
            className={`md:text-[3.33vh] text-[24px] leading-[26px] md:leading-[3.51vh] font-bold pb-6 md:pb-[7.40vh] ${evolventa.className}`}
          >
            Обо мне
          </h1>
          <p className="md:pb-[4.44vh] pb-7">
            Меня зовут
            <span className="md:text-[1.66vh] text-base leading-[22px] font-bold">
              {" "}
              Ольга Драпеко
            </span>
          </p>

          <p className="md:text-[1.66vh] text-base leading-[22px] md:leading-[2.22vh]  font-bold pb-2 md:pb-[0.74vh]">
            Образование
          </p>
          <p className="md:pb-[4.44vh] pb-7">
            В 2014 году окончила Юридический институт Сибирского{" "}
            <br className="hidden md:block" />
            Федерального Университета по специальности
            <br className="hidden md:block" /> юриспруденция. В 2016 году
            получила степень магистра
          </p>
          <p className="md:text-[1.66vh] md:leading-[2.22vh] text-base leading-[22px] font-bold pb-2 md:pb-[0.74vh]">
            Практика
          </p>
          <p className="md:pb-[4.44vh]">
            Более 10 лет я занимаюсь юридической практикой и оказываю
            <br className="hidden md:block" /> правовую поддержу клиентам,
            представляю их интересы в<br className="hidden md:block" />
            судах и административных органах, сопровождаю сделки и
            <br className="hidden md:block" />
            консультирую по разным правовым вопросам
          </p>
          {/* <div>
            <p className="md:text-[1.66vh] md:leading-[2.22vh] text-[#D8CACF] font-bold md:pb-[1.85vh]">
              10 лет
            </p>
            <ul className="list-disc box-content md:ml-[1.04vw] marker:text-[#D8CACF]">
              <li className="md:pb-[1.11vh] md:pl-[0.62vw]">
                Представление интересов клиентов в арбитражных судах <br />и
                судах общей юрисдикции
              </li>
              <li className="md:pb-[1.11vh] md:pl-[0.62vw]">Сопровождение сделок</li>
              <li className="md:pl-[0.62vw]">Консультирование по различным правовым вопросам</li>
            </ul>
          </div> */}
        </div>
      </div>
      <div className="bg-[#D8CACF] hidden md:block absolute right-0 top-0 bottom-0 h-full w-[23.95vw]"></div>
    </section>
  );
};

export default About;
