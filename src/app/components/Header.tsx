"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { montserrat } from "../fonts";
import IconMail from "../../../public/icons/iconMail.svg";
import IconPhone from "../../../public/icons/iconPhone.svg";
import IconCross from "../../../public/icons/iconCross.svg";
import IconTelegram from "../../../public/icons/iconTelegram.svg";
import IconWhatsapp from "../../../public/icons/iconWhatsapp.svg";
import IconChevronDown from "../../../public/icons/iconChevronDown.svg";
import IconChevronUp from "../../../public/icons/iconChevronUp.svg";
import { feedbackRef } from "./FeedbackForm";
import { aboutMeRef } from "./About";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const contactPhone = "+7 923 341 32 66";
  const contactEmail = "oa.drapeko@gmail.com";

  const [isDropdown, setisDropdown] = useState(false);
  const [isClick, setisClick] = useState(false);
  const [scrolling, setScrolling] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY; // Определяем prevScrollPos внутри компонента

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setisDropdown(false);

      setScrolling(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      prevScrollPos = currentScrollPos; // Обновляем prevScrollPos
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    // Функция-обработчик события для закрытия меню при клике вне его области
    const handleOutsideClick = (e: any) => {
      const menuContainer = document.getElementById("dropdown-menu");

      // Проверка, был ли клик выполнен вне меню
      if (menuContainer && !menuContainer.contains(e.target)) {
        setisDropdown(false);
      }
    };

    // Добавление обработчика событий при монтировании компонента
    document.addEventListener("mousedown", handleOutsideClick);

    // Удаление обработчика событий при размонтировании компонента
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
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
    { src: IconTelegram, alt: "Telegram", link: "https://t.me/olga_drapeko" },
    { src: IconWhatsapp, alt: "Whatsapp", link: "https://wa.me/79233413266" },
  ];
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
    <div className="absolute">
      <main
        className={` bg-white z-[33] fixed w-full transition-transform transform border-b-[0.09vh] border-[#F0F0F5] ${
          (scrolling && !isClick) || isClick
            ? "translate-y-0"
            : "-translate-y-full"
        }`}
      >
        <header
          className={`flex justify-between mx-4 md:mx-[12.5vw] my-[40px] md:my-0 text-[#1B1743]`}
        >
          <div className="flex items-center">
            {mainLogo.map((item, index) => (
              <div
                key={index}
                onClick={(e) => {
                  item.OnClick(e);
                }}
                className=" cursor-pointer"
              >
                <p className="text-[#962C52] text-xs leading-4 md:text-[1.11vh] md:leading-[1.38vh] ">
                  {item.job}
                </p>
                <p className=" font-bold text-[22px] leading-7 md:text-[2.03vh] md:leading-[2.59vh]">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          {/* burger menu */}
          <div
            onClick={() => setisClick(!isClick)}
            className="grid md:hidden gap-y-[9px] w-[48px] h-[48px] px-3 py-3 bg-[#F8F6F7] rounded-md"
          >
            <div className="w-full h-0 border-[1px] border-[#353433] rounded-full"></div>
            <div className="w-full h-0 border-[1px] border-[#353433] rounded-full"></div>
            <div className="w-[10px] h-0 border-[1px] border-[#353433] rounded-full"></div>
          </div>
          {isClick === true ? (
            <div className="absolute top-0 left-0">
              <div className="bg-white px-4 h-full w-screen">
                <div className="flex justify-end pt-[40px]">
                  <div
                    className="bg-[#F8F6F7] w-fit h-fit px-3 py-3 rounded-md "
                    onClick={() => setisClick(!isClick)}
                  >
                    <Image src={IconCross} alt="" width={24} className="" />
                  </div>
                </div>
                <div
                  className={`flex flex-col gap-3 pb-4 text-base leading-6 ${montserrat.className} font-medium text-[#1B1743]`}
                >
                  <div>
                    <div className="pb-1">
                      <Link
                        href={`/corporation`}
                        onClick={() => setisClick(!isClick)}
                        className=""
                      >
                        <p className={`py-2 font-semibold text-[#962C52]`}>
                          Юридическим лицам
                        </p>
                      </Link>
                    </div>
                    <div className=" border-b-[1px] border-[#F0F0F5] mb-2">
                      <Link
                        href={`/outsourcing`}
                        onClick={() => setisClick(!isClick)}
                      >
                        <p className="pb-2">
                          Юридическое сопровождение бизнеса (аутсорсинг)
                        </p>
                      </Link>
                    </div>
                    <div className=" border-b-[1px] border-[#F0F0F5]">
                      <Link
                        href={`/mediation`}
                        onClick={() => setisClick(!isClick)}
                      >
                        <p className="pb-2">Разрешение споров и медиация</p>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="pb-1">
                      <p className="py-2 font-semibold text-[#962C52]">
                        Физическим лицам
                      </p>
                    </div>
                    <div className=" border-b-[1px] border-[#F0F0F5]">
                      <Link
                        href={`/support`}
                        onClick={() => setisClick(!isClick)}
                      >
                        <p className="pb-2">
                          Юридические услуги для частных лиц
                        </p>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="pb-">
                      <p className="py-2 font-semibold text-[#962C52]">
                        Банкротство
                      </p>
                    </div>
                    <div className=" border-b-[1px] border-[#F0F0F5]">
                      <Link
                        href={`/bankruptcy`}
                        onClick={() => setisClick(!isClick)}
                      >
                        <p className="pb-2">
                          Юридическое сопровождение банкротства
                        </p>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <p
                      className="py-3 font-semibold text-[#962C52]"
                      onClick={() => {
                        if (pathname == "/") {
                          scrollToRef(aboutMeRef);
                          setisClick(!isClick)
                        } else {
                          router.push("/#aboutMe");
                          setisClick(!isClick)
                        }
                      }}
                    >
                      Обо мне
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1 ">
                  <div className="flex gap-1">
                    <a
                      href="mailto:oa.drapeko@gmail.com"
                      className="bg-[#F8F6F7] py-3 w-full justify-center flex rounded-md"
                    >
                      <Image src={IconMail} alt="mail" width={24} />
                    </a>
                    <a
                      href="tel:+79233413266"
                      className="bg-[#F8F6F7] py-3 w-full justify-center flex rounded-md"
                    >
                      <Image src={IconPhone} alt="mail" width={24} />
                    </a>
                  </div>
                  <div className="flex gap-1 pb-4">
                    {socialArray.map((item, index) => (
                      <Link
                        href={item.link}
                        target="_blank"
                        key={index}
                        className="bg-[#F8F6F7] py-3 w-full justify-center flex rounded-md"
                      >
                        <Image src={item.src} alt={item.alt} width={24} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div
                onClick={() => setisClick(!isClick)}
                className="bg-[#1B1743] h-screen opacity-35"
              ></div>
            </div>
          ) : (
            <></>
          )}
          {/* burger menu */}
          <div
            className={`hidden md:flex md:gap-x-[6.25vw]  ${montserrat.className} md:text-[1.48vh] md:leading-[2.22vh] font-semibold`}
          >
            <div className="flex md:gap-x-[2.08vw] items-center">
              {/* dropdown menu */}
              <div id="dropdown-menu" className={`relative `}>
                <div
                  onClick={() => {
                    setisDropdown(!isDropdown);
                  }}
                  className={`md:px-[0.62vw] md:py-[1.11vh] cursor-pointer flex gap-[0.62vw] rounded-md transition-all hover:bg-[#F8F6F7] ${
                    isDropdown == false ? "" : " text-[#962C52]"
                  }`}
                >
                  <p className={``}>Услуги</p>
                  {isDropdown == false ? (
                    <Image
                      src={IconChevronDown}
                      alt="IconChevronDown"
                      width={24}
                      className="md:h-[2.22vh] md:w-[1.25vw] object-contain"
                    />
                  ) : (
                    <Image
                      src={IconChevronUp}
                      alt="IconChevronUp"
                      width={24}
                      className="md:h-[2.22vh] md:w-[1.25vw] object-contain"
                    />
                  )}
                </div>
                <div
                  className={`flex flex-col gap-[1.85vh] md:px-[2.22vh] md:py-[1.25vw] absolute bg-white  border-[0.09vh] top-[8vh] border-[#F0F0F5] rounded-md shadow-md ${
                    isDropdown == false ? "hidden" : "flex "
                  }`}
                >
                  <div className="flex flex-col gap-[0.37vh]">
                    <Link
                      href="/corporation"
                      onClick={() => setisDropdown(!isDropdown)}
                      className="md:py-[1.11vh] md:px-[0.62vw] md:text-[1.48vh] md:leading-[2.22vh] hover:bg-[#F8F6F7] rounded-md text-[#962C52] font-semibold transition-all"
                    >
                      Юридическим&nbsp;лицам
                    </Link>
                    <div className="flex flex-col gap-[1.11vh] md:text-[1.48vh] md:leading-[2.22vh] text-[#1B1743] font-medium">
                      <Link
                        href="/outsourcing"
                        onClick={() => setisDropdown(!isDropdown)}
                        className="hover:text-[#B65D7D] transition-all"
                      >
                        Юридическое&nbsp;сопровождение&nbsp;бизнеса (аутсорсинг)
                      </Link>
                      <Link
                        href="/mediation"
                        onClick={() => setisDropdown(!isDropdown)}
                        className="hover:text-[#B65D7D] transition-all"
                      >
                        Разрешение споров и медиация
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[0.37vh]">
                    <p className="md:py-[1.11vh] md:px-[0.62vw]  md:text-[1.48vh] md:leading-[2.22vh] text-[#962C52] font-semibold">
                      Физическим лицам
                    </p>
                    <div className="flex flex-col gap-[1.11vh] md:text-[1.48vh] md:leading-[2.22vh] text-[#1B1743] font-medium">
                      <Link
                        href="/support"
                        onClick={() => setisDropdown(!isDropdown)}
                        className="hover:text-[#B65D7D] transition-all"
                      >
                        Юридические услуги для частных лиц
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[0.37vh]">
                    <p className="md:py-[1.11vh] md:px-[0.62vw]  md:text-[1.48vh] md:leading-[2.22vh] text-[#962C52] font-semibold">
                      Банкротство
                    </p>
                    <div className="flex flex-col gap-[1.11vh] md:text-[1.48vh] md:leading-[2.22vh] text-[#1B1743] font-medium">
                      <Link
                        href="/bankruptcy"
                        onClick={() => setisDropdown(!isDropdown)}
                        className="hover:text-[#B65D7D] transition-all"
                      >
                        Юридическое сопровождение банкротства
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* dropdown menu */}
              {menuArray.map((item, index) => (
                <div
                  key={index}
                  onClick={(e) => {
                    item.OnClick(e);
                  }}
                  className={`md:px-[0.62vw] md:py-[1.11vh] cursor-pointer rounded-md transition-all hover:bg-[#F8F6F7]`}
                >
                  {item.title}
                </div>
              ))}
            </div>
            <div className="flex md:gap-x-[2.5vw] md:py-[2.59vh]">
              <div className=" text-end select-text">
                <p className="md:pb-[1.11vh]">{contactEmail}</p>
                <p>{contactPhone}</p>
              </div>
              <div className="flex md:gap-x-[0.41vw] items-center ">
                {socialArray.map((item, index) => (
                  <Link
                    href={item.link}
                    target="_blank"
                    key={index}
                    className="bg-[#F8F6F7] h-fit rounded-md"
                  >
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
    </div>
  );
};

export default Header;
