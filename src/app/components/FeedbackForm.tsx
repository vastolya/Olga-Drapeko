"use client";

import React, { RefObject, createRef, useRef } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { POST } from "../api/send/route";
import { toast } from "react-hot-toast";
import { usePathname } from "next/navigation";

import { montserrat } from "../fonts";
import { evolventa } from "../fonts";
import IconTelegram from "../../../public/icons/iconTelegram.svg";
import IconWhatsapp from "../../../public/icons/iconWhatsapp.svg";
import IconPin from "../../../public/icons/iconPin.svg";
import PicFeedback from "../../../public/pics/picFeedback.jpg";
import PicFeedbackClean from "../../../public/pics/picFeedbackClean.png";
import Link from "next/link";

export const feedbackRef: RefObject<HTMLDivElement> = createRef();

const socialArray = [
  { src: IconTelegram, alt: "Telegram", link: "https://t.me/olga_drapeko" },
  { src: IconWhatsapp, alt: "Whatsapp", link: "https://wa.me/79233413266" },
];
type FormInput = {
  name: string;
  phone: string;
};

const FeedbackForm = () => {
  const pathname = usePathname();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<FormInput>();
  async function onSubmit(formData: FormInput) {
    await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone,
      }),
    }).then(() => {
      // Toast notification
      toast.success("Спасибо! Мы свяжемся с вами в ближайшее время.");
    });

    reset();
  }

  return (
    <section id="feedback" ref={feedbackRef}>
      <div className="md:px-[12.5vw] md:py-[11.11vh] grid grid-cols-3 md:grid-cols-6 md:gap-x-[1.25vw]">
        <form
          id="username"
          onSubmit={handleSubmit(onSubmit)}
          className={`col-span-3 md:col-span-2 bg-[#962C52] md:py-[2.22vh] py-6 md:px-[1.25vw] px-4 md:rounded-md text-white ${montserrat.className}`}
        >
          <div className="md:pb-[4.44vh] pb-6">
            <h1
              className={`md:text-[3.33vh] text-[24px] leading-[26px] md:leading-[3.51vh] pb-3 md:pb-[1.11vh] font-bold ${evolventa.className}`}
            >
              Свяжитесь со мной
            </h1>
            <p
              className={`md:text-[1.48vh] text-sm leading-5 md:leading-[2.22vh] font-medium`}
            >
              Перезвоню Вам в ближайшее время и подробно отвечу на все Ваши
              вопросы
            </p>
          </div>
          <div className="grid md:gap-y-[0.74vh] gap-y-2 md:pb-[1.11vh] pb-3">
            <label
              htmlFor="usernameInput"
              className="md:text-[1.29vh] text-[12px] leading-5 md:leading-[1.85vh] font-normal"
            >
              Имя
            </label>
            <input
              id="usernameInput"
              type="text"
              placeholder="Ваше Имя"
              required
              className="px-5 py-3 text-sm leading-5 md:px-[1.04vw] md:py-[1.11vh] rounded-md text-[#1B1743] text-[1.48vh] placeholder:text-[1.48vh] placeholder:leading-[2.22vh] placeholder:font-medium placeholder:text-[#D3D3E3]"
              {...register("name")}
            />
          </div>
          <div className="grid md:gap-y-[0.74vh] gap-y-2 md:pb-[2.59vh] pb-7">
            <label
              htmlFor="usernphoneInput"
              className="md:text-[1.29vh] text-[12px] leading-5 md:leading-[1.85vh] font-normal"
            >
              Номер
            </label>
            <input
              id="usernphoneInput"
              type="text"
              placeholder="+7 999 999 99 99"
              required
              className="px-5 py-3 text-sm leading-5 md:px-[1.04vw] md:py-[1.11vh] rounded-md text-[#1B1743] text-[1.48vh] placeholder:text-[1.48vh] placeholder:leading-[2.22vh] placeholder:font-medium placeholder:text-[#D3D3E3]"
              {...register("phone")}
            />
          </div>
          <button
            disabled={isSubmitting}
            className="bg-white text-[#1B1743] md:py-[1.48vh] py-4 md:px-[1.25vw] px-6 rounded-md md:text-[1.48vh] text-base leading-6 md:leading-[2.22vh] font-semibold hover:shadow-md active:scale-[97%] transition-all"
          >
            Отправить
          </button>
        </form>
        <div
          className={`px-3 md:px-0 pt-[48px] md:pt-0 pb-[60px] md:pb-0 col-span-3 md:col-span-2 ${
            montserrat.className
          } ${"bg-gradient-to-r from-[#EBECF1] to-[#FCFCFD] md:from-transparent md:to-transparent lg:from-transparent lg:to-transparent"}`}
        >
          <div className="md:text-[1.48vh] text-base leading-6 md:leading-[2.22vh] pb-5 md:pb-[1.85vh] font-semibold">
            <a href="mailto:oa.drapeko@gmail.com">oa.drapeko@gmail.com</a>
          </div>
          <div
            className={`text-[24px] md:text-[3.33vh] leading-[26px] md:leading-[3.51vh] pb-5 md:pb-[1.85vh] font-bold ${evolventa.className}`}
          >
            <a href="tel:+79233413266">+7 923 341 32 66</a>
          </div>

          <div className="flex md:gap-x-[0.41vw] gap-x-2 items-center pb-7 md:pb-[5.55vh]">
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
                  className="mx-3 md:mx-[0.62vw] my-3 md:my-[1.11vh] md:h-[2.22vh] md:w-[1.25vw] object-contain"
                />
              </Link>
            ))}
          </div>
          <div className="flex md:gap-x-[0.62vw] gap-x-[12px] items-start">
            <Image
              src={IconPin}
              alt={`IconPin`}
              width={24}
              className="md:h-[2.22vh] md:w-[1.25vw] object-contain"
            />
            <div className="">
              <p className="pb-3 md:pb-[1.11vh] text-base md:text-[1.66vh] leading-[22px] md:leading-[2.22vh] font-bold">
                г. Красноярск
              </p>
              <p className="text-base md:text-[1.48vh] leading-5 md:leading-[2.22vh] font-medium">
                Работаю удаленно по всей России
              </p>
            </div>
          </div>
        </div>
        {pathname == "/" ? (
          <div className="hidden md:block col-span-2 relative">
            <div className="z-[22] absolute md:top-[-9.25vh]">
              <Image
                src={PicFeedback}
                alt="feedback full portrait"
                width={1000}
                className="md:w-[24.16] md:h-[63.05vh] object-cover rounded-md"
              />
            </div>
            <div className="bg-[#D8CACF] absolute top-[-7.2vh] left-[1vw] md:w-[23.66vw] md:h-[63.05vh] rounded-md "></div>
          </div>
        ) : (
          <div className="hidden md:block col-span-2 relative">
            <div className="absolute z-[22] md:top-[-6.01vh] md:left-[3.6vw]">
              <Image
                src={PicFeedbackClean}
                alt="feedback clean portrait"
                height={1000}
                className="md:w-[17.96vw] md:h-[46.85vh] object-contain "
              />
            </div>
            <div className="bg-gradient-to-r from-[#EBECF1] to-[#EBECF1] md:h-[40.83vh] md:w-[24.16vw] rounded-md absolute z-[21]"></div>
            <div className="bg-[#D8CACF] md:h-[40.83vh] md:w-[24.16vw] rounded-md absolute top-[1.85vh] left-[1.04vw] z-[20]"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeedbackForm;
