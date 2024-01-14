'use client'
import React, { RefObject, createRef, useRef } from "react";
import Image from "next/image";
import PicAbout from "../../../public/pics/picAbout.jpg";

import { montserrat } from "../fonts";

export const aboutMeRef: RefObject<HTMLDivElement> = createRef();

const About = () => {
  return (
    <section id="aboutMe" ref={aboutMeRef} className="relative">
      <div className="md:px-[12.5vw] md:pt-[11.11vh] md:pb-[12.96vh] grid grid-cols-6 md:gap-x-[1.25vw] text-[#1B1743]">
        <div className="col-span-2 relative">
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
          className={`col-span-3 ${montserrat.className} md:text-[1.48vh] md:leading-[2.22vh] font-medium md:pb-[12.96vh]`}
        >
          <h1 className="md:text-[3.33vh] md:leading-[3.51vh] font-bold md:pb-[7.40vh]">
            Обо мне
          </h1>
          <p className="md:pb-[4.44vh]">
            Здравствуйте! Меня зовут
            <span className="md:text-[1.66vh] font-bold"> Ольга Драпеко</span>
          </p>

          <p className="md:text-[1.66vh] md:leading-[2.22vh] text-[#D8CACF] font-bold md:pb-[0.74vh]">
            2014
          </p>
          <p className="md:pb-[4.44vh]">
            Окончила ЮИ СФУ по специальности юриспруденция (бакалавриат)
          </p>
          <p className="md:text-[1.66vh] md:leading-[2.22vh] text-[#D8CACF] font-bold md:pb-[0.74vh]">
            2016
          </p>
          <p className="md:pb-[4.44vh]">Получила степень магистра</p>
          <div>
            <p className="md:text-[1.66vh] md:leading-[2.22vh] text-[#D8CACF] font-bold md:pb-[1.85vh]">
              10 лет
            </p>
            <ul className="list-disc box-content md:ml-[1.04vw] marker:text-[#D8CACF]">
              <li className="md:pb-[1.11vh]">
                Представление интересов клиентов в арбитражных судах <br />и
                судах общей юрисдикции
              </li>
              <li className="md:pb-[1.11vh]">Сопровождение сделок</li>
              <li>Консультирование по различным правовым вопросам</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#D8CACF] absolute right-0 top-0 bottom-0 h-full w-[23.95vw]"></div>
    </section>
  );
};

export default About;
