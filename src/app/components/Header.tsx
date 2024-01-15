"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { aboutMeRef } from "./About";
import { montserrat } from "../fonts";
import IconTelegram from "../../../public/icons/iconTelegram.svg";
import IconWhatsapp from "../../../public/icons/iconWhatsapp.svg";
import { feedbackRef } from "./FeedbackForm";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const contactPhone = "+7 923 341 32 66";
  const contactEmail = "oa.drapeko@gmail.com";

  const [isClick, setisClick] = useState(false);
  const [scrolling, setScrolling] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY; // Определяем prevScrollPos внутри компонента

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setScrolling(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      prevScrollPos = currentScrollPos; // Обновляем prevScrollPos
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollToRef = (ref: any) => {
    if (ref && ref.current) {
      const yOffset = ref.current.getBoundingClientRect().top;
      window.scrollBy({ top: yOffset, behavior: "smooth" });
    }
  };
  const toogleNavbar = (): void => {
    setisClick(!isClick);
  };

  const socialArray = [
    { src: IconTelegram, alt: "Telegram", link: 'https://t.me/olga_drapeko' },
    { src: IconWhatsapp, alt: "Whatsapp", link: 'https://wa.me/79233413266' },
  ];

  const menuArray = [
    {
      title: "Услуги",
      OnClick: (e: any) => {
        // e.preventDefault();
        // if (pathname == "/") {
        //   scrollToRef(aboutMeRef);
        // } else {
        //   router.push("/#aboutMe");
        // }
      },
    },

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

  const mainLogo = [
    {
      name: "Ольга Драпеко",
      job: "Юрист",
      OnClick: (e: any) => {
        e.preventDefault();
        if (pathname == "/") {
          scrollToTop();
        } else {
          router.push("/");
        }
      },
    },
  ];

  return (
    <main
      className={`bg-white z-[33] fixed w-full transition-transform transform border-b-[0.09vh] border-[#F0F0F5] ${
        (scrolling && !isClick) || isClick
          ? "translate-y-0"
          : "-translate-y-full"
      }`}
    >
      <header className={`flex justify-between  md:mx-[12.5vw] text-[#1B1743]`}>
        <div className="flex items-center">
          {mainLogo.map((item, index) => (
            <Link
              href="#"
              key={index}
              onClick={(e) => {
                item.OnClick(e);
              }}
            >
              <p className="text-[#962C52] md:text-[1.11vh] md:leading-[1.38vh] ">
                {item.job}
              </p>
              <p className=" font-bold md:text-[2.03vh] md:leading-[2.59vh]">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
        <div
          className={`flex md:gap-x-[6.25vw]  ${montserrat.className} md:text-[1.48vh] md:leading-[2.22vh] font-semibold`}
        >
          <div className="flex md:gap-x-[2.08vw] items-center">
            {menuArray.map((item, index) => (
              <Link
                href="#"
                key={index}
                onClick={(e) => {
                  item.OnClick(e);
                }}
             
                className={`md:px-[0.62vw] md:py-[1.11vh]`}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex md:gap-x-[2.5vw] md:py-[2.59vh]">
            <div className=" text-end">
              <p className="md:pb-[1.11vh]">{contactEmail}</p>
              <p>{contactPhone}</p>
            </div>
            <div className="flex md:gap-x-[0.41vw] items-center">
              {socialArray.map((item, index) => (
                <Link href={item.link} target="_blank" key={index} className="bg-[#F8F6F7] h-fit rounded-md">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={24}
                    className="mx-[0.62vw] my-[1.11vh] md:h-[2.22vh] md:w-[1.25vw]"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>
    </main>
  );
};

export default Header;
