import Link from "next/link";
import Image from "next/image";
import React from "react";
import FeedbackForm from "../components/FeedbackForm";

import { montserrat } from "../fonts";
import { evolventa } from "../fonts";
import IconArrowLeft from "../../../public/icons/iconArrowLeft.svg";
import PicMediation from "../../../public/pics/picMediation.svg";

const mediation = () => {
  return (
    <main className={``}>
      <div className="bg-gradient-to-r from-[#EBECF1] to-[#FCFCFD] md:h-[10.74vh] h-[128px]"></div>
      <div className={` bg-gradient-to-r from-[#EBECF1] to-[#FCFCFD]`}>
        <h1
          className={`mx-4 md:mx-[12.5vw] py-6 md:py-[5.55vh] md:text-[7.4vh] text-[32px] leading-8 md:leading-[7.4vh] font-bold text-[#1B1743]`}
        >
          Разрешение споров <br className="hidden md:block" /> и медиация
        </h1>
      </div>
      <section className="md:mx-[12.5vw] grid md:grid-cols-6 md:gap-x-[1.25vw] text-[#1B1743]">
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
        <div className="col-span-2 md:relative  hidden md:block">
          <div className="absolute left-[-5vw] right-[-1vw]">
            <Image
              src={PicMediation}
              alt="Mediation"
              height={1000}
              className="md:h-[40.92vh] md:w-[36.66vw] object-contain"
            />
          </div>
        </div>
        <div className={`md:col-span-4 ${montserrat.className}`}>
          <div className="pb-[60px] md:pb-[7.4vh]">
            <h1
              className={`mx-4 md:mx-0 pb-4 text-2xl leading-[26px] md:pb-[2.59vh] ${evolventa.className} md:text-[3.33vh] md:leading-[3.51vh] font-bold `}
            >
              Юридическое <br /> представительство
            </h1>
            <p className="mx-4 md:mx-0 pb-[60px] text-sm leading-5 md:pb-[5.55vh] md:text-[1.48vh] md:leading-[2.22vh] font-medium">
              Занимаюсь представлением интересов клиентов в арбитражных
              судах,&nbsp;
              <br className="hidden md:block" />
              судах общей юрисдикции и третейских судах, оказываю правовую&nbsp;
              <br className="hidden md:block" />
              поддержку при переговорах
            </p>
            <h1
              className={`mx-4 md:mx-0 pb-10 text-2xl leading-[26px] md:pb-[5.55vh] ${evolventa.className} md:text-[3.33vh] md:leading-[3.51vh] font-bold `}
            >
              Досудебное
              <br /> урегулирование споров
            </h1>
            <div className="mx-4 md:mx-0 pb-6 md:pb-[4.44vh]">
              <p className=" pb-4 text-base leading-[22px] md:pb-[1.85vh] md:text-[1.66vh] md:leading-[2.22vh] font-bold">
                Услуги
              </p>
              <ul className="text-sm leading-5 ml-[16px] md:text-[1.48vh] md:leading-[2.22vh] list-disc box-content md:ml-[1.04vw] marker:text-[#D8CACF] font-medium">
                <li className="md:pb-[1.11vh] pb-2 md:pl-[0.62vw] pl-1">
                  Выработка стратегии для разрешения конфликтной ситуации
                </li>
                <li className="md:pb-[1.11vh] pb-2 md:pl-[0.62vw] pl-1">
                  Переговоры с оппонентом, в том числе в рамках процедуры
                  медиации,
                  <br className="hidden md:block" /> составление претензии или
                  ответа на претензию
                </li>
                <li className="md:pl-[0.62vw] pl-1">
                  Юридическое оформление договоренностей
                </li>
              </ul>
            </div>
            <div
              className={`h-fit px-4 py-4 md:px-[1.25vw] md:py-[2.22vh] bg-[#F8F6F7] border-[0.09vh] border-[#F0F0F5]  rounded-md shadow-md`}
            >
              <div className="pb-2 md:pb-[1.11vh] flex items-center text-[#962C52]">
                <p className="text-base leading-[22px] md:text-[1.66vh] md:leading-[2.22vh] font-bold">
                  от 10 000 ₽
                </p>
              </div>
              <p className="text-sm leading-5 md:text-[1.29vh] md:leading-[1.85vh] font-medium md:font-normal">
                Стоимость определяется индивидуально в каждой ситуации
              </p>
            </div>
          </div>
          <div className="pb-[60px] md:pb-0">
            <h1
              className={`mx-4 md:mx-0 text-2xl leading-[26px] pb-10 md:pb-[5.55vh] ${evolventa.className} md:text-[3.33vh] md:leading-[3.51vh] font-bold `}
            >
              Судебная защита
            </h1>
            <p className="mx-4 md:mx-0 pb-4 text-base leading-[22px] md:pb-[1.85vh] md:text-[1.66vh] md:leading-[2.22vh] font-bold">
              Специализируюсь на коммерческих и корпоративных спорах,
              представляю <br className="hidden md:block" /> интересы
              доверителей в спорах по делам о банкротстве и оказываю{" "}
              <br className="hidden md:block" /> правовую поддержку клиентам по
              вопросам, возникающим в рамках:
            </p>
            <div className="mx-4 md:mx-0 pb-6 md:pb-[4.44vh]">
              <ul className="text-sm leading-5 ml-[16px] md:text-[1.48vh] md:leading-[2.22vh] list-disc box-content md:ml-[1.04vw] marker:text-[#D8CACF] font-medium">
                <li className="md:pb-[1.11vh] pb-2 md:pl-[0.62vw] pl-1">
                  Финансовых споров, связанных со взысканием задолженности и
                  неисполнением
                  <br className="hidden md:block" /> других обязательств по
                  контракту, возмещением убытков
                </li>
                <li className="md:pb-[1.11vh] pb-2 md:pl-[0.62vw] pl-1">
                  Споров, связанных с признанием контрактов недействительными
                  или
                  <br className="hidden md:block" /> незаключенными
                </li>
                <li className="md:pb-[1.11vh] pb-2 md:pl-[0.62vw] pl-1">
                  Споров в области недвижимости и строительства
                </li>
                <li className="md:pb-[1.11vh] pb-2 md:pl-[0.62vw] pl-1">
                  Антимонопольных споров
                </li>
                <li className="md:pl-[0.62vw] pl-1">
                  Споров в рамках дел о банкротстве, включая представление
                  интересов клиентов
                  <br className="hidden md:block" /> по спорам о признании
                  сделок недействительными и привлечении
                  <br className="hidden md:block" /> контролирующих лиц к
                  субсидиарной ответственности и взыскании убытков
                </li>
              </ul>
            </div>
            <div className="mx-4 md:mx-0 pb-10 md:pb-[4.44vh]">
              <p className="text-base leading-[22px] pb-4 md:pb-[1.85vh] md:text-[1.66vh] md:leading-[2.22vh] font-bold">
                Услуги
              </p>
              <ul className="text-sm leading-5 ml-[16px] md:text-[1.48vh] md:leading-[2.22vh] list-disc box-content md:ml-[1.04vw] marker:text-[#D8CACF] font-medium">
                <li className="md:pb-[1.11vh] pb-2 md:pl-[0.62vw] pl-1">
                  Оценка перспектив спора, консультирование
                </li>
                <li className="md:pb-[1.11vh] pb-2 md:pl-[0.62vw] pl-1">
                  Сбор доказательств
                </li>
                <li className="md:pb-[1.11vh] pb-2 md:pl-[0.62vw] pl-1">
                  Выработка правовой позиции
                </li>
                <li className="md:pb-[1.11vh] pb-2 md:pl-[0.62vw] pl-1">
                  Представление интересов в судах
                </li>
                <li className="md:pl-[0.62vw] pl-1">
                  Юридическое сопровождение на стадии исполнения судебных актов
                </li>
              </ul>
            </div>
            <div
              className={`h-fit px-4 py-4 md:px-[1.25vw] md:py-[2.22vh] bg-[#F8F6F7] border-[0.09vh] border-[#F0F0F5]  rounded-md shadow-md`}
            >
              <div className="pb-2 md:pb-[1.11vh] flex items-center text-[#962C52]">
                <p className="text-base leading-[22px] md:text-[1.66vh] md:leading-[2.22vh] font-bold">
                  от 20 000 ₽
                </p>
              </div>
              <p className="text-sm leading-5 md:text-[1.29vh] md:leading-[1.85vh] font-medium md:font-normal">
                Стоимость определяется индивидуально в каждой ситуации
              </p>
            </div>
          </div>
        </div>
      </section>
      <FeedbackForm />
    </main>
  );
};

export default mediation;
