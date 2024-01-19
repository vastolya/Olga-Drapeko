"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { feedbackRef } from "./FeedbackForm";
import { aboutMeRef } from "./About";

import { montserrat } from "../fonts";
import { evolventa } from "../fonts";
import IconTelegram from "../../../public/icons/iconTelegram.svg";
import IconWhatsapp from "../../../public/icons/iconWhatsapp.svg";
import IconPin from "../../../public/icons/iconPin.svg";

const scrollToRef = (ref: any) => {
  if (ref && ref.current) {
    const yOffset = ref.current.getBoundingClientRect().top;
    window.scrollBy({ top: yOffset, behavior: "smooth" });
  }
};

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
  const menuArray = [
    {
      title: "Обо мне",
      OnClick: (e: any) => {
        e.preventDefault();
        if (pathname == "/") {
          scrollToRef(aboutMeRef);
        } else {
          router.push("/#aboutMe");
        }
      },
    },
  ];
  const services = [
    { title: "Физические лица", link: "/support" },
    { title: "Юридические лица", link: "/corporation" },
    { title: "Банкротство", link: "/bankruptcy" },
  ];
  const socialArray = [
    { src: IconTelegram, alt: "Telegram", link: "https://t.me/olga_drapeko" },
    { src: IconWhatsapp, alt: "Whatsapp", link: "https://wa.me/79233413266" },
  ];
  return (
    <footer className="border-t-[0.09vh] border-[#F0F0F5] bg-white">
      <div className="md:mx-[12.5vw] md:mt-[2.22vh] md:mb-[4.44vh] text-[#1B1743] grid grid-cols-3 md:grid-cols-6 md:gap-x-[1.25vw]">
        <div className="hidden md:block md:col-span-2">
          <div className="flex items-center md:pb-[14.07vh]">
            <div>
              <p className="text-[#962C52] md:text-[1.11vh] md:leading-[1.38vh] ">
                Юрист
              </p>
              <p className=" font-bold md:text-[2.03vh] md:leading-[2.59vh]">
                Ольга Драпеко
              </p>
            </div>
          </div>
          <div className="md:pb-[2.59vh] w-fit">
            <Link href="/" className="cursor-pointer">
              <p
                className={`md:text-[1.48vh] md:leading-[2.22vh] ${montserrat.className} font-medium text-[#807D9B]`}
              >
                Политика конфиденциальности
              </p>
            </Link>
          </div>

          <p
            className={`md:text-[1.48vh] md:leading-[2.22vh] ${montserrat.className} font-medium text-[#807D9B]`}
          >
            © 2024 Юридические услуги Ольга Драпеко
          </p>
        </div>
        <div
          className={`mx-3 pt-6 md:pt-0 col-span-3 md:col-span-1 ${montserrat.className}`}
        >
          <p className="hidden md:block md:text-[1.48vh] md:leading-[2.22vh] md:pb-[1.85vh] font-medium text-[#962C52]">
            Услуги
          </p>
          <div className="grid gap-y-2 md:gap-y-[0.74vh] pb-6 md:pb-0 ">
            {services.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="py-3 md:py-[1.11vh] md:px-[0.62vh] md:text-[1.48vh] text-base leading-6 md:leading-[2.22vh] font-semibold md:w-fit w-full text-center md:mx-0 bg-[#F8F6F7] md:bg-white rounded-md text-[#962C52] md:text-[#1B1743]"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="block md:hidden">
            {menuArray.map((item, index) => (
              <p
                key={index}
                onClick={(e) => {
                  item.OnClick(e);
                }}
                className=" w-full text-center py-3 text-base leading-6 font-semibold pb-[60px]"
              >
                {item.title}
              </p>
            ))}
          </div>
        </div>
        <div
          className={`mx-3 md:mx-0 col-span-3 md:col-span-2 md:col-start-5 ${montserrat.className}`}
        >
          <div className="md:text-[1.48vh] text-base leading-6 md:leading-[2.22vh] pb-5 md:pb-[1.85vh] font-semibold select-text">
            <a href="mailto:oa.drapeko@gmail.com">oa.drapeko@gmail.com</a>
          </div>
          <div
            className={`md:text-[3.33vh] text-[24px] leading-[26px] md:leading-[3.51vh] pb-5 md:pb-[1.85vh] font-bold ${evolventa.className} select-text`}
          >
            <a href="tel:+79233413266">+7 923 341 32 66</a>
          </div>

          <div className="flex gap-x-2 md:gap-x-[0.41vw] items-center pb-6 md:pb-[5.55vh]">
            {socialArray.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="bg-[#F8F6F7] h-fit w-full md:w-fit rounded-md"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={24}
                  className="mx-auto md:mx-[0.62vw] my-3 md:my-[1.11vh] md:h-[2.22vh] md:w-[1.25vw] object-contain"
                />
              </Link>
            ))}
          </div>
          <div className="flex md:gap-x-[0.62vw] gap-x-3 items-start pb-[60px] md:pb-0">
            <Image
              src={IconPin}
              alt={`IconPin`}
              width={24}
              className="md:h-[2.22vh] md:w-[1.25vw] object-contain"
            />
            <div>
              <p className="pb-2 md:pb-[1.11vh] text-[18px] md:text-[1.66vh] leading-6 md:leading-[2.22vh] font-bold">
                г. Красноярск
              </p>
              <p className="text-base md:text-[1.48vh] leading-6 md:leading-[2.22vh] font-medium">
                Работаю удаленно по всей России
              </p>
            </div>
          </div>
        </div>
        <div className="block md:hidden col-span-3 mx-3 pb-6">
          <p className=" text-xs leading-[14px] font-normal text-[#962C52]">
            Юрист
          </p>
          <p className="text-[22px] leading-7 font-bold text-[#1B1743] pb-6">
            Ольга Драпеко
          </p>
          <div
            className={`pb-3 text-xs leading-5 text-[#807D9B] font-medium ${montserrat.className}`}
          >
            <Link href="/privacy_policy">Политика конфиденциальности</Link>
          </div>
          <p
            className={`text-xs leading-5 text-[#807D9B] font-medium ${montserrat.className}`}
          >
            © 2024 Юридические услуги Ольга Драпеко
          </p>
        </div>
      </div>
      <div
        className={`hidden bg-[#F0F0F5] md:py-[2.22vh] md:flex justify-center md:gap-[1.25vw] md:text-[1.29vh] md:leading-[1.85vh] font-normal text-[#807D9B] ${montserrat.className}`}
      >
        <Link href="/">Сайт создали</Link>
        <p>/</p>
        <Link href="/photo_contributor">Автор фотоматериала</Link>
      </div>
    </footer>
  );
};

export default Footer;
