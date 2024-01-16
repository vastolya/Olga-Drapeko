"use client";

import React from "react";
import Button from "./Button";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { feedbackRef } from "./FeedbackForm";
import { aboutMeRef } from "./About";

import { montserrat } from "../fonts";
import { evolventa } from "../fonts";
import Link from "next/link";

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
    {
      title: "Контакты",
      OnClick: (e: any) => {
        e.preventDefault();
        if (pathname == "/") {
          scrollToRef(feedbackRef);
        } else {
          router.push("/#feedback");
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
    <footer className="border-t-[0.09vh] border-[#F0F0F5">
      <div className="md:mx-[12.5vw] md:mt-[2.22vh] md:mb-[4.44vh] text-[#1B1743] grid grid-cols-6 md:gap-x-[1.25vw]">
        <div className="col-span-2">
          <div className="flex items-center md:pb-[2.59vh]">
            <div>
              <p className="text-[#962C52] md:text-[1.11vh] md:leading-[1.38vh] ">
                Юрист
              </p>
              <p className=" font-bold md:text-[2.03vh] md:leading-[2.59vh]">
                Ольга Драпеко
              </p>
            </div>
          </div>
          <div className="md:pb-[4.44vh] w-fit">
            <Button title="Обратный звонок" />
          </div>
          <div className="md:pb-[4.44vh] w-fit">
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
        <div className={`col-span-1 ${montserrat.className}`}>
          <p className="md:text-[1.48vh] md:leading-[2.22vh] md:pb-[1.85vh] font-medium text-[#962C52]">
            Услуги
          </p>
          <div className="grid md:gap-y-[0.74vh]">
            {services.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="md:py-[1.11vh] md:px-[0.62vh] md:text-[1.48vh] md:leading-[2.22vh] font-semibold w-fit"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className={`md:mt-[4.07vh] ${montserrat.className}`}>
          <div className="grid md:gap-y-[0.74vh]">
            {menuArray.map((item, index) => (
              <div
                key={index}
                onClick={(e) => {
                  item.OnClick(e);
                }}
                className="md:py-[1.11vh] md:px-[0.62vh] md:text-[1.48vh] md:leading-[2.22vh] font-semibold w-fit cursor-pointer"
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
        <div className={`col-span-2 ${montserrat.className}`}>
          <p className="md:text-[1.48vh] md:leading-[2.22vh] md:pb-[1.85vh] font-semibold">
            oa.drapeko@gmail.com
          </p>
          <p
            className={`md:text-[3.33vh] md:leading-[3.51vh] md:pb-[1.85vh] font-bold ${evolventa.className}`}
          >
            +7 923 341 32 66
          </p>
          <div className="flex md:gap-x-[0.41vw] items-center md:pb-[5.55vh]">
            {socialArray.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="bg-[#F8F6F7] h-fit rounded-md"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={24}
                  className="mx-[0.62vw] my-[1.11vh] md:h-[2.22vh] md:w-[1.25vw] object-contain"
                />
              </Link>
            ))}
          </div>
          <div className="flex md:gap-x-[12px]">
            <Image
              src={IconPin}
              alt={`IconPin`}
              width={24}
              className="md:h-[2.22vh] md:w-[1.25vw] object-contain"
            />
            <div className="">
              <p className="md:pb-[1.11vh] md:text-[1.66vh] md:leading-[2.22vh] font-bold">
                г. Красноярск
              </p>
              <p className="md:text-[1.48vh] md:leading-[2.22vh] font-medium">
                Работаю удаленно по всей России
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-[#F0F0F5] md:py-[2.22vh] flex justify-center md:gap-[1.25vw] md:text-[1.29vh] md:leading-[1.85vh] font-normal text-[#807D9B] ${montserrat.className}`}
      >
        <Link href="/">Сайт создали</Link>
        <p>/</p>
        <Link href="/">Автор фотоматериала</Link>
      </div>
    </footer>
  );
};

export default Footer;
