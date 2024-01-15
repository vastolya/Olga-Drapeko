import Link from "next/link";
import Image from "next/image";
import React from "react";
import FeedbackForm from "../components/FeedbackForm";

import { montserrat } from "../fonts";
import IconArrowLeft from "../../../public/icons/iconArrowLeft.svg";

const outsourcing = () => {
  return (
    <main className={``}>
      <div className="bg-gradient-to-r from-[#EBECF1] to-[#FCFCFD] h-[10.74vh]"></div>
      <div className={` bg-gradient-to-r from-[#EBECF1] to-[#FCFCFD]`}>
        <h1
          className={`md:mx-[12.5vw] md:py-[5.55vh] md:text-[7.4vh] md:leading-[7.4vh] font-bold text-[#1B1743]`}
        >
          Юридическое сопровождение бизнеса
        </h1>
      </div>
      <section className="md:mx-[12.5vw] grid grid-cols-6 md:gap-x-[1.25vw] text-[#1B1743]">
        <div className="col-span-6">
          <Link
            href="/"
            className="flex md:gap-[0.62vw] w-fit md:pt-[1.85vh] md:pb-[4.44vh]"
          >
            <Image src={IconArrowLeft} alt={`IconArrowLeft`} width={24} />
            <p
              className={`${montserrat.className} md:text-[1.48vh] md:leading-[2.22vh] text-[#807D9B] font-semibold`}
            >
              Назад
            </p>
          </Link>
        </div>
      </section>
      <FeedbackForm />
    </main>
  );
};

export default outsourcing;
