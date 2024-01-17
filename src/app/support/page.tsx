import Link from "next/link";
import Image from "next/image";
import React from "react";
import FeedbackForm from "../components/FeedbackForm";

import { montserrat } from "../fonts";
import { evolventa } from "../fonts";
import IconArrowLeft from "../../../public/icons/iconArrowLeft.svg";
import PicSupport from "../../../public/pics/picSupport.svg";

const support = () => {
  return (
    <main className={``}>
      <div className="bg-gradient-to-r from-[#EBECF1] to-[#FCFCFD] h-[10.74vh]"></div>
      <div className={` bg-gradient-to-r from-[#EBECF1] to-[#FCFCFD]`}>
        <h1
          className={`md:mx-[12.5vw] md:py-[5.55vh] md:text-[7.4vh] md:leading-[7.4vh] font-bold text-[#1B1743]`}
        >
          Разрешение споров
          <br /> и медиация
        </h1>
      </div>
      <section className="md:mx-[12.5vw] grid grid-cols-6 md:gap-x-[1.25vw] text-[#1B1743]">
        <div className="col-span-6">
          <Link
            href="/"
            className="flex md:gap-[0.62vw] w-fit md:pt-[1.85vh] md:pb-[4.44vh]"
          >
            <Image src={IconArrowLeft} alt={`IconArrowLeft`} width={24} className="md:h-[2.22vh] md:w-[1.25vw]"/>
            <p
              className={`${montserrat.className} md:text-[1.48vh] md:leading-[2.22vh] text-[#807D9B] font-semibold`}
            >
              Назад
            </p>
          </Link>
        </div>
        <div className="col-span-2 relative">
          <div className="absolute left-[-8.12vw]">
            <Image
              src={PicSupport}
              alt="Bunkruptcy"
              height={1000}
              className="md:h-[42.87vh] md:w-[32.29vw] object-cover"
            />
          </div>
        </div>
        <div className={`col-span-4 ${montserrat.className}`}>
          <div className="md:pb-[7.4vh]">
            <p className="md:pb-[7.4vh] md:text-[1.48vh] md:leading-[2.22vh] font-medium">
              Представляю интересы доверителей в судах общей юрисдикции по
              гражданским
              <br /> делам и делам о привлечении к административной
              ответственности.
              <br />
              <br /> Имею опыт ведения дел, связанных с возмещением ущерба,
              спорами с<br /> кредитными организациями, страховыми, а также
              представлению интересы
              <br /> клиентов по делам, связанным с публичными отношениями, в
              частности по делам
              <br /> об оспаривании решений государственных органов.
              <br />
              <br /> Помогу с юридическим оформлением и сопровождением покупки и
              продажи
              <br /> недвижимости и другого имущества, разработкой других
              договоров
            </p>
            <h1
              className={`md:pb-[1.85vh] ${evolventa.className} md:text-[3.33vh] md:leading-[3.51vh] font-bold `}
            >
              Досудебное
              <br /> урегулирования спора
            </h1>
            <p className="md:pb-[5.55vh] md:text-[1.48vh] md:leading-[2.22vh] font-medium">
              В некоторых случаях, предусмотренных законом, соблюдение
              претензионного
              <br /> порядка является обязательным условием для дальнейшего
              обращения в суд
            </p>
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
                  от 5 000 ₽
                </p>
              </div>
              <p className="md:text-[1.29vh] md:leading-[1.85vh] font-normal">
                Стоимость определяется индивидуально в каждой ситуации
              </p>
            </div>
          </div>
          <div>
            <h1
              className={`md:pb-[1.85vh] ${evolventa.className} md:text-[3.33vh] md:leading-[3.51vh] font-bold `}
            >
              Судебная защита
            </h1>
            <p className="md:pb-[5.55vh] md:text-[1.48vh] md:leading-[2.22vh] font-medium">
              Если досудебные меры не удается реализовать
              <br /> и конфликт требует решения через суд
            </p>
            <p className="md:pb-[1.85vh] md:text-[1.48vh] md:leading-[2.22vh] font-medium">
              В случае невозможности урегулировать спор в досудебном порядке
              сторона
              <br /> вправе в порядке, установленном законодательством
              о гражданском
              <br /> судопроизводстве, обратиться в суд за защитой нарушенных
              либо оспариваемых
              <br /> прав, свобод или законных интересов
            </p>
            <p className="md:pb-[4.44vh] md:text-[1.48vh] md:leading-[2.22vh] font-medium">
              Имею постоянный опыт представительства в судах по спорам,
              <br />
              вытекающим из различных областей права
            </p>
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
                  Подготовка иных необходимых процессуальных документов при
                  рассмотрении
                  <br /> дела в суде
                </li>
                <li className="md:pb-[1.11vh] md:pl-[0.62vw]">
                  Выработка правовой позиции
                </li>
                <li className="md:pl-[0.62vw]">
                  Представление интересов в судах
                </li>
              </ul>
            </div>
            <p className="md:pb-[4.44vh] md:text-[1.48vh] md:leading-[2.22vh] font-medium">
              Занимаюсь также юридическим сопровождением
              <br /> на стадии исполнения судебных актов
            </p>
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
        </div>
      </section>
      <FeedbackForm />
    </main>
  );
};

export default support;
