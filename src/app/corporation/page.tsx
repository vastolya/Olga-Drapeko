import React from "react";
import Link from "next/link";
import { montserrat } from "../fonts";
import { evolventa } from "../fonts";

const corporation = () => {
  return (
    <main>
      <div className="bg-gradient-to-r from-[#EBECF1] to-[#FCFCFD] h-[10.74vh]"></div>
      <div
        className={`md:mb-[4.44vh] bg-gradient-to-r from-[#EBECF1] to-[#FCFCFD]`}
      >
        <h1
          className={`md:mx-[12.5vw] md:py-[5.55vh] md:text-[7.4vh] md:leading-[7.4vh] font-bold text-[#1B1743]`}
        >
          Юридические лица
        </h1>
      </div>
      <section
        className={`md:pb-[11.11vh] md:mx-[12.5vw] grid grid-cols-6 md:gap-x-[1.25vw] text-[#1B1743] ${montserrat.className}`}
      >
        <div className="col-span-6 md:pb-[5.55vh]">
          <h1
            className={`${evolventa.className} md:pb-[1.85vh] md:text-[3.33vh] md:leading-[3.51vh] font-bold`}
          >
            Выбрать услугу
          </h1>
          <div className="flex md:text-[1.48vh] md:leading-[2.22vh] font-medium">
            <p className="text-[#962C52] underline cursor-pointer">Свяжитесь со мной</p>
            <p>, если у вас возникнут трудности при выборе</p>
          </div>
        </div>
        <Link href="/outsourcing" className="col-span-3 shadow-md border-[0.09vh] hover:border-[#962C52] rounded-md">
          <div className="md:py-[9.44vh] md:px-[1.25vw] text-center">
            <p className="md:pb-[1.11vh] md:text-[1.66vh] md:leading-[2.22vh] font-bold ">
              Юридическое сопровождение бизнеса
            </p>
            <p className="md:text-[1.29vh] md:leading-[1.85vh] font-normal">
              (Юридический аутсорсинг)
            </p>
          </div>
        </Link>
        <Link href="/mediation" className="col-span-3 shadow-md border-[0.09vh] hover:border-[#962C52] rounded-md">
          <div className="md:py-[10.92vh] md:px-[1.25vw] text-center">
            <p className="md:text-[1.66vh] md:leading-[2.22vh] font-bold ">
            Разрешение споров и медиация
            </p>
          </div>
        </Link>
      </section>
    </main>
  );
};

export default corporation;
