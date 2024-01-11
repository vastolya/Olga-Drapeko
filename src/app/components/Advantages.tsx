import React from "react";
import Image from "next/image";

import IconConvenience from "../../../public/icons/iconConvenience.svg";
import IconExpert from "../../../public/icons/iconExpert.svg";
import IconFlexability from "../../../public/icons/iconFlexability.svg";
import PicAdvantages from '../../../public/pics/picAdvantages.svg'

import { montserrat } from "../fonts";
import Button from "./Button";
import Link from "next/link";

const advantagesArray = [
  {
    src: IconConvenience,
    title: "Удобство",
    text: "Сотрудничество без найма, отчетности, обязательных платежей и отчислений",
  },
  {
    src: IconExpert,
    title: "Экспертный подход",
    text: "Большой опыт работы юриста по спорам, вытекающим из различных областей права",
  },
  {
    src: IconFlexability,
    title: "Гибкость",
    text: "Менее формализованный процесс без временных затрат на кадровую и административную работу",
  },
];

const Advantages = () => {
  return (
    <section className="bg-gradient-to-r from-[#EBECF1] to-[#FCFCFD] relative">
      <div className="md:px-[12.5vw] md:py-[11.11vh] grid grid-cols-6 md:gap-x-[1.25vw] text-[#1B1743]">
        <div className="col-span-4 col-start-3 md:text-[3.33vh] md:leading-[3.51vh] md:pb-[10.37vh] font-bold">
          Преимущества юридического <br />
          аутсорсинга
        </div>
        <div
          className={`col-span-2 ${montserrat.className} grid md:gap-y-[2.22vh]`}
        >
          {advantagesArray.map((item, index) => (
            <div key={index} className="mr-[4vw]">
              <div className="flex gap-x-[0.62vw] md:pb-[1.11vh] md:leading-[2.22vh]">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={40}
                  className={`md:h-[3.70vh] md:w-[2.08vw] object-contain`}
                />
                <h1 className="md:text-[1.66vh] font-bold flex items-center">
                  {item.title}
                </h1>
              </div>
              <p className="md:text-[1.48vh] font-medium">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div
          className={`col-span-2 ${montserrat.className} flex flex-col justify-between`}
        >
          <div className="md:leading-[2.22vh]">
            <div className="md:pb-[2.59vh]">
              <h1 className="md:text-[1.66vh]  md:pb-[1.11vh] font-bold ">
                Офлайн-консультации (Красноярск)
              </h1>
              <p className="md:text-[1.48vh] mr-[7vw] font-medium">
                Подробное изучение документов, помогает быстрее понять специфику
                ваших юридических потребностей
              </p>
            </div>
            <div className="">
              <h1 className="md:text-[1.66vh] md:pb-[1.11vh] font-bold">
                Онлайн-консультации
              </h1>
              <p className="md:text-[1.48vh] mr-[5vw] font-medium">
                Позволяют обсуждать юридические вопросы, не выходя из дома,
                своевременная и доступная юридическая помощь
              </p>
            </div>
          </div>
          <Link href={`/#`}>
            <Button title="Подробнее об услуге" />
          </Link>
        </div>
      </div>
      <div className="absolute top-[20vh] right-[10vw]">
        <Image src={PicAdvantages} alt={`picAdvantages`} width={5000} className="h-[50.18vh] w-[29.27vw] object-contain  transform scale-x-[-1]"/>
      </div>
    </section>
  );
};

export default Advantages;
