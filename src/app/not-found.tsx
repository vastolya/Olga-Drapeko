import React from "react";
import Image from "next/image";
import Link from "next/link";

import { montserrat } from "./fonts";
import PicNotFound from "../../public/pics/picNotFound.svg";

const notFound = () => {
  return (
    <main className={`${montserrat.className}`}>
      <div className="bg-gradient-to-r from-[#EBECF1] to-[#FCFCFD] h-[10.74vh]"></div>
      <div className="md:my-[6.2vh] flex justify-center">
        <div className="bg-gradient-to-r from-[#EBECF1] to-[#FCFCFD] w-fit py-[11.11vh] px-[6.25vw] text-center rounded-[46.29vh] shadow-md">
          <div className="md:pb-[1.85vh] flex justify-center">
            <Image
              src={PicNotFound}
              alt=""
              width={128}
              className="md:w-[6.66vw] md:h-[5.74vh]"
            />
          </div>
          <p
            className={`md:text-[1.48vh] md:leading-[2.22vh] font-medium md:pb-[4.44vh]`}
          >
            Упс! Произошла ошибка
          </p>
          <Link
            href="/"
            className="text-[#962C52] font-bold md:text-[1.66vh] md:leading-[2.22vh]"
          >
            Перейти на главную страницу
          </Link>
        </div>
      </div>
    </main>
  );
};

export default notFound;
