import Link from "next/link";
import Image from "next/image";
import React from "react";
import FeedbackForm from "../components/FeedbackForm";

import { evolventa } from "../fonts";
import { montserrat } from "../fonts";
import IconArrowLeft from "../../../public/icons/iconArrowLeft.svg";
import PicAdvantages from "../../../public/pics/picAdvantages.svg";
import IconConvenience from "../../../public/icons/iconConvenience.svg";
import IconExpert from "../../../public/icons/iconExpert.svg";
import IconFlexability from "../../../public/icons/iconFlexability.svg";

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

const outsourcing = () => {
  return (
    <main className={``}>
      <div className="bg-gradient-to-r from-[#EBECF1] to-[#FCFCFD] md:h-[10.74vh] h-[128px]"></div>
      <div className={` bg-gradient-to-r from-[#EBECF1] to-[#FCFCFD]`}>
        <div className="mx-3 py-6 md:mx-[12.5vw] md:py-[5.55vh] text-[#1B1743]">
          <h1
            className={`md:pb-[1.48vh] text-[32px] leading-[32px] md:text-[7.4vh] md:leading-[7.4vh] font-bold `}
          >
            Юридическое
            <br /> сопровождение бизнеса
          </h1>
          <p className="hidden md:block md:text-[1.48vh] md:leading-[2.22vh] font-medium">
            (Юридический аутсорсинг)
          </p>
        </div>
      </div>
      <section className="pb-[60px] md:pb-0 md:mx-[12.5vw] grid md:grid-cols-6 md:gap-x-[1.25vw] text-[#1B1743]">
        <div className="mx-4 md:mx-0 md:col-span-6">
          <Link
            href="/"
            className="flex md:gap-[0.62vw] gap-3 w-fit md:pt-[1.85vh] pt-6 pb-6 md:pb-[4.44vh]"
          >
            <Image
              src={IconArrowLeft}
              alt={`IconArrowLeft`}
              width={24}
              className="md:h-[2.22vh] md:w-[1.25vw]"
            />
            <p
              className={`${montserrat.className} md:text-[1.48vh] text-base leading-6 md:leading-[2.22vh] text-[#807D9B] font-semibold`}
            >
              Назад
            </p>
          </Link>
        </div>
        <div className="col-span-2 md:relative hidden md:block">
          <div className="absolute left-[-2.55vw]">
            <Image
              src={PicAdvantages}
              alt="Bunkruptcy"
              height={1000}
              className="md:h-[46.48vh] md:w-[27.13vw] object-contain"
            />
          </div>
        </div>
        <div className={`md:col-span-4 ${montserrat.className}`}>
          <div>
            <h1
              className={`mx-3 md:mx-0 text-2xl leading-[26px] pb-4 md:col-span-4 md:pb-[1.85vh] ${evolventa.className} md:text-[3.33vh] md:leading-[3.51vh] font-bold `}
            >
              Юридическое сопровождение компании
              <br /> с выполнением функций юридической службы
            </h1>
            <p className="mx-3 md:mx-0 text-sm leading-5 pb-10 md:pb-[5.55vh] md:text-[1.48vh] md:leading-[2.22vh] font-medium">
              Одним из способов минимизации юридических рисков
              <br className="hidden md:block" /> в деятельности компании
              является юридический аутсорсинг
            </p>
            <div className="mx-3 md:mx-0 grid md:grid-cols-4 md:gap-x-[1.25vw] pb-10 md:pb-[4.44vh]">
              <div className="pb-10 md:pb-0 md:col-span-2">
                <p className="text-base leading-[22px] pb-4 md:pb-[1.85vh] md:text-[1.66vh] md:leading-[2.22vh] font-bold">
                  Услуги
                </p>
                <ul className="text-sm leading-5 ml-[16px] md:text-[1.48vh] md:leading-[2.22vh] list-disc box-content md:ml-[1.04vw] marker:text-[#D8CACF] font-medium">
                  <li className="md:pb-[1.11vh] pb-2 md:pl-[0.62vw] pl-1">
                    Консультирование по юридическим вопросам, возникающим в
                    процессе деятельности
                  </li>
                  <li className="md:pb-[1.11vh] pb-2 md:pl-[0.62vw] pl-1">
                    Подготовка коммерческих контрактов и аудит уже имеющихся
                    заключенных контрактов
                  </li>
                  <li className="md:pb-[1.11vh] pb-2 md:pl-[0.62vw] pl-1">
                    Досудебная работа с контрагентами
                  </li>
                  <li className="md:pb-[1.11vh] pb-2 md:pl-[0.62vw] pl-1">
                    Оценка применяемых типовых форм контрактов и договорных
                    конструкций
                  </li>
                  <li className="md:pb-[1.11vh] pb-2 md:pl-[0.62vw] pl-1">
                    Подготовка юридических заключений и оценка правовых рисков
                    бизнес-решений
                  </li>
                  <li className="md:pl-[0.62vw] pl-1">
                    Оптимизация юридических процессов компании
                  </li>
                </ul>
              </div>
              <div
                className={`md:col-span-2 flex flex-col gap-y-7 md:gap-y-[2.59vh]`}
              >
                {advantagesArray.map((item, index) => (
                  <div key={index}>
                    <div className="flex gap-3 pb-2 leading-[22px] md:gap-x-[0.62vw] md:pb-[1.11vh] md:leading-[2.22vh]">
                      <Image
                        src={item.src}
                        alt={item.title}
                        width={40}
                        className={`md:h-[3.70vh] md:w-[2.08vw] object-contain`}
                      />
                      <h1 className="text-base md:text-[1.66vh] font-bold flex items-center">
                        {item.title}
                      </h1>
                    </div>
                    <p className="text-sm md:text-[1.48vh] font-medium">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`h-fit py-6 px-3 md:px-[1.25vw] md:py-[2.22vh] bg-[#F8F6F7] border-[0.09vh] border-[#F0F0F5]  rounded-md shadow-md`}
            >
              <div className="pb-2 md:pb-[1.11vh] flex items-center text-[#962C52]">
                <p className="text-lg leading-6 md:text-[1.66vh] md:leading-[2.22vh] font-bold">
                  от 20 000 ₽&nbsp;
                </p>
                <p className="text-sm leading-5 md:text-[1.29vh] md:leading-[1.85vh] font-normal">
                  / в месяц
                </p>
              </div>
              <p className="text-sm leading-5 md:text-[1.29vh] md:leading-[1.85vh] font-normal">
                Стоимость большего пакета услуг определяется индивидуально в
                каждой ситуации
              </p>
            </div>
          </div>
        </div>
      </section>
      <FeedbackForm />
    </main>
  );
};

export default outsourcing;
