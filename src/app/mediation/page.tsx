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
      <div className="bg-gradient-to-r from-[#EBECF1] to-[#FCFCFD] h-[10.74vh]"></div>
      <div className={` bg-gradient-to-r from-[#EBECF1] to-[#FCFCFD]`}>
        <h1
          className={`md:mx-[12.5vw] md:py-[5.55vh] md:text-[7.4vh] md:leading-[7.4vh] font-bold text-[#1B1743]`}
        >
          Разрешение споров <br /> и медиация
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
          <div className="absolute left-[-5vw] right-[-1vw]">
            <Image
              src={PicMediation}
              alt="Mediation"
              height={1000}
              className="md:h-[40.92vh] md:w-[36.66vw] object-contain"
            />
          </div>
        </div>
        <div className={`col-span-4 ${montserrat.className}`}>
          <div className="md:pb-[7.4vh]">
            <h1
              className={`md:pb-[2.59vh] ${evolventa.className} md:text-[3.33vh] md:leading-[3.51vh] font-bold `}
            >
              Юридическое <br /> представительство
            </h1>
            <p className="md:pb-[5.55vh] md:text-[1.48vh] md:leading-[2.22vh] font-medium">
              Занимаюсь представлением интересов клиентов в арбитражных судах,
              <br />
              судах общей юрисдикции и третейских судах, оказываю правовую
              <br />
              поддержку при переговорах
            </p>
            <h1
              className={`md:pb-[5.55vh] ${evolventa.className} md:text-[3.33vh] md:leading-[3.51vh] font-bold `}
            >
              Досудебное
              <br /> урегулирование споров
            </h1>
            <div className="md:pb-[4.44vh]">
              <p className="md:pb-[1.85vh] md:text-[1.66vh] md:leading-[2.22vh] font-bold">
                Услуги
              </p>
              <ul className="md:text-[1.48vh] md:leading-[2.22vh] list-disc box-content md:ml-[1.04vw] marker:text-[#D8CACF] font-medium">
                <li className="md:pb-[1.11vh] md:pl-[0.62vw]">
                  Выработка стратегии для разрешения конфликтной ситуации
                </li>
                <li className="md:pb-[1.11vh] md:pl-[0.62vw]">
                  Переговоры с оппонентом, в том числе в рамках процедуры
                  медиации,
                  <br /> составление претензии или ответа на претензию
                </li>
                <li className="md:pl-[0.62vw]">
                  Юридическое оформление договоренностей
                </li>
              </ul>
            </div>
            <div
              className={`h-fit md:px-[1.25vw] md:py-[2.22vh] bg-[#F8F6F7] border-[0.09vh] border-[#F0F0F5]  rounded-md shadow-md`}
            >
              <div className="md:pb-[1.11vh] flex items-center text-[#962C52]">
                <p className="md:text-[1.66vh] md:leading-[2.22vh] font-bold">
                  от 10 000 ₽
                </p>
              </div>
              <p className="md:text-[1.29vh] md:leading-[1.85vh] font-normal">
                Стоимость определяется индивидуально в каждой ситуации
              </p>
            </div>
          </div>
          <div>
            <h1
              className={`md:pb-[5.55vh] ${evolventa.className} md:text-[3.33vh] md:leading-[3.51vh] font-bold `}
            >
              Судебная защита
            </h1>
            <p className="md:pb-[1.85vh] md:text-[1.66vh] md:leading-[2.22vh] font-bold">
              Специализируюсь на коммерческих и корпоративных спорах,
              представляю <br /> интересы доверителей в спорах по делам о
              банкротстве и оказываю <br /> правовую поддержку клиентам по
              вопросам, возникающим в рамках:
            </p>
            <div className="md:pb-[4.44vh]">
              <ul className="md:text-[1.48vh] md:leading-[2.22vh] list-disc box-content md:ml-[1.04vw] marker:text-[#D8CACF] font-medium">
                <li className="md:pb-[1.11vh] md:pl-[0.62vw]">
                  Финансовых споров, связанных со взысканием задолженности и
                  неисполнением
                  <br /> других обязательств по контракту, возмещением убытков
                </li>
                <li className="md:pb-[1.11vh] md:pl-[0.62vw]">
                  Споров, связанных с признанием контрактов недействительными
                  или
                  <br /> незаключенными
                </li>
                <li className="md:pb-[1.11vh] md:pl-[0.62vw]">
                  Споров в области недвижимости и строительства
                </li>
                <li className="md:pb-[1.11vh] md:pl-[0.62vw]">
                  Антимонопольных споров
                </li>
                <li className="md:pl-[0.62vw]">
                  Споров в рамках дел о банкротстве, включая представление
                  интересов клиентов
                  <br /> по спорам о признании сделок недействительными и
                  привлечении
                  <br /> контролирующих лиц к субсидиарной ответственности и
                  взыскании убытков
                </li>
              </ul>
            </div>
            <div className="md:pb-[4.44vh]">
              <p className="md:pb-[1.85vh] md:text-[1.66vh] md:leading-[2.22vh] font-bold">
                Услуги
              </p>
              <ul className="md:text-[1.48vh] md:leading-[2.22vh] list-disc box-content md:ml-[1.04vw] marker:text-[#D8CACF] font-medium">
                <li className="md:pb-[1.11vh] md:pl-[0.62vw]">
                  Оценка перспектив спора, консультирование
                </li>
                <li className="md:pb-[1.11vh] md:pl-[0.62vw]">
                  Сбор доказательств
                </li>
                <li className="md:pb-[1.11vh] md:pl-[0.62vw]">
                  Выработка правовой позиции
                </li>
                <li className="md:pb-[1.11vh] md:pl-[0.62vw]">
                  Представление интересов в судах
                </li>
                <li className="md:pl-[0.62vw]">
                  Юридическое сопровождение на стадии исполнения судебных актов
                </li>
              </ul>
            </div>
            <div
              className={`h-fit md:px-[1.25vw] md:py-[2.22vh] bg-[#F8F6F7] border-[0.09vh] border-[#F0F0F5]  rounded-md shadow-md`}
            >
              <div className="md:pb-[1.11vh] flex items-center text-[#962C52]">
                <p className="md:text-[1.66vh] md:leading-[2.22vh] font-bold">
                  от 20 000 ₽
                </p>
              </div>
              <p className="md:text-[1.29vh] md:leading-[1.85vh] font-normal">
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
