import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import FeedbackForm from "../components/FeedbackForm";

import { montserrat } from "../fonts";
import { evolventa } from "../fonts";
import IconArrowLeft from "../../../public/icons/iconArrowLeft.svg";
import PicBankruptcy from "../../../public/pics/picBankruptcy.svg";

const bankruptcy = () => {
  return (
    <main>
      <div className="bg-gradient-to-r from-[#EBECF1] to-[#FCFCFD] h-[10.74vh]"></div>
      <div className={` bg-gradient-to-r from-[#EBECF1] to-[#FCFCFD]`}>
        <h1
          className={`md:mx-[12.5vw] md:py-[5.55vh] md:text-[7.4vh] md:leading-[7.4vh] font-bold text-[#1B1743]`}
        >
          Юридическое сопровождение банкротства
        </h1>
      </div>
      <section className="md:mx-[12.5vw] grid grid-cols-6 md:gap-x-[1.25vw] text-[#1B1743]">
        <div className="col-span-6">
          <Link
            href="/"
            className="flex md:gap-[0.62vw] w-fit md:pt-[1.85vh] md:pb-[4.44vh]"
          >
            <Image
              src={IconArrowLeft}
              alt={`IconArrowLeft`}
              width={24}
              className="md:h-[2.22vh] md:w-[1.25vw]"
            />
            <p
              className={`${montserrat.className} md:text-[1.48vh] md:leading-[2.22vh] text-[#807D9B] font-semibold`}
            >
              Назад
            </p>
          </Link>
        </div>
        <div className="col-span-2 relative">
          <div className="absolute left-[-7.08vw] right-[-0.83vw]">
            <Image
              src={PicBankruptcy}
              alt="Bunkruptcy"
              height={1000}
              className="md:h-[57.68vh] md:w-[32.29vw] object-contain"
            />
          </div>
        </div>
        <div className={`col-span-4 ${montserrat.className}`}>
          <h1
            className={`md:pb-[2.59vh] ${evolventa.className} md:text-[3.33vh] md:leading-[3.51vh] font-bold `}
          >
            Юридическая поддержка в ходе <br /> банкротных процедур
          </h1>
          <p className="md:pb-[5.55vh] md:text-[1.48vh] md:leading-[2.22vh] font-medium">
            Представляю интересы должников, кредиторов и других лиц
            <br /> по делам о банкротстве, а также осуществляю правовое
            <br /> сопровождение деятельности арбитражных управляющих
          </p>
          <div className="md:pb-[4.44vh]">
            <p className="md:pb-[1.85vh] md:text-[1.66vh] md:leading-[2.22vh] font-bold">
              Имею опыт сопровождения процедур банкротства со стороны
              <br /> арбитражного управляющего и представляю интересы:
            </p>
            <ul className="md:text-[1.48vh] md:leading-[2.22vh] list-disc box-content md:ml-[1.04vw] marker:text-[#D8CACF] font-medium">
              <li className="md:pb-[1.11vh] md:pl-[0.62vw]">
                При оспаривании сомнительных сделок
              </li>
              <li className="md:pb-[1.11vh] md:pl-[0.62vw]">
                При привлечении контролирующих лиц к субсидиарной
                ответственности
                <br /> и убыткам
              </li>
              <li className="md:pb-[1.11vh] md:pl-[0.62vw]">
                При проверке обоснованности требований кредиторов
              </li>
              <li className="md:pl-[0.62vw]">Консультирую по иным вопросам</li>
            </ul>
          </div>
          <div className="md:pb-[4.44vh]">
            <p className="md:pb-[1.85vh] md:text-[1.66vh] md:leading-[2.22vh] font-bold">
              Представляю интересы кредиторов:
            </p>
            <ul className="md:text-[1.48vh] md:leading-[2.22vh] list-disc box-content md:ml-[1.04vw] marker:text-[#D8CACF] font-medium">
              <li className="md:pb-[1.11vh] pl-[0.62vw]">
                Инициирование дела о банкротстве
              </li>
              <li className="md:pb-[1.11vh] pl-[0.62vw]">
                Рассмотрение вопросов включения требований в реестр
                и оспаривания
                <br /> требований недобросовестных кредиторов
              </li>
              <li className="md:pb-[1.11vh] pl-[0.62vw]">
                Участие в собрании кредиторов
              </li>
              <li className="pl-[0.62vw]">
                Противодействие недобросовестным должникам
              </li>
            </ul>
          </div>
          <p className="md:pb-[4.44vh] md:text-[1.48vh] md:leading-[2.22vh] font-medium">
            Консультирую руководителей и собственников бизнеса при банкротстве
            компаний, представляю <br /> интересы при оспаривании сделок и
            привлечении к субсидиарной ответственности, а также оказываю <br />{" "}
            правовую поддержку при защите от недобросовестных действий
            кредиторов и арбитражных <br />
            управляющих
          </p>
          <div
            className={`h-fit md:px-[1.25vw] md:py-[2.22vh] bg-[#F8F6F7] border-[0.09vh] border-[#F0F0F5]  rounded-md shadow-md`}
          >
            <div className="md:pb-[1.11vh] flex items-center text-[#962C52]">
              <p className="md:text-[1.66vh] md:leading-[2.22vh] font-bold">
                от 20 000 ₽&nbsp;
              </p>
              <p className="md:text-[1.29vh] md:leading-[1.85vh] font-normal">
                / в месяц
              </p>
            </div>
            <p className="md:text-[1.29vh] md:leading-[1.85vh] font-normal">
              Стоимость определяется индивидуально в каждой ситуации
            </p>
          </div>
        </div>
      </section>
      <FeedbackForm />
    </main>
  );
};

export default bankruptcy;
