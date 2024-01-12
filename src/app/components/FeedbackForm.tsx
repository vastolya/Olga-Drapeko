'use client'

import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";

import { POST } from "../api/send/route";
import { toast } from "react-hot-toast";

import IconTelegram from "../../../public/icons/iconTelegram.svg";
import IconWhatsapp from "../../../public/icons/iconWhatsapp.svg";
import IconPin from "../../../public/icons/iconPin.svg";
import PicFeedback from "../../../public/pics/picFeedback.jpg";

import { montserrat } from "../fonts";
import { evolventa } from "../fonts";

const socialArray = [
  { src: IconTelegram, alt: "Telegram" },
  { src: IconWhatsapp, alt: "Whatsapp" },
];

type FormInput = {
  name: string;
  phone: string;
};

const FeedbackForm = () => {
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
      toast.success("Спасибо! Мы свяжемся с вами в ближайшее время");
    });

    reset();
  }

  return (
    <section>
      <div className="md:px-[12.5vw] md:py-[11.11vh] grid grid-cols-6 md:gap-x-[1.25vw]">
        <form
          id="username"
          onSubmit={handleSubmit(onSubmit)}
          className={`col-span-2 bg-[#962C52] md:py-[2.22vh]  md:px-[1.25vw] rounded-md text-white ${montserrat.className}`}
        >
          <div className="md:pb-[4.44vh]">
            <h1
              className={`md:text-[3.33vh] md:leading-[3.51vh] md:pb-[1.11vh] font-bold ${evolventa.className}`}
            >
              Свяжитесь со мной
            </h1>
            <p className={`md:text-[1.48vh] md:leading-[2.22vh] font-medium`}>
              Перезвоню вам в ближайшее время и подробно отвечу на все ваши
              вопросы
            </p>
          </div>
          <div className="grid md:gap-y-[0.74vh] md:pb-[1.11vh]">
            <label
              htmlFor="usernameInput"
              className="md:text-[1.29vh] md:leading-[1.85vh] font-normal"
            >
              Имя
            </label>
            <input
              id="usernameInput"
              type="text"
              placeholder="Ваше Имя"
              required
              className="md:px-[1.04vw] md:py-[1.11vh] rounded-md text-[#1B1743] text-[1.48vh] placeholder:text-[1.48vh] placeholder:leading-[2.22vh] placeholder:font-medium placeholder:text-[#D3D3E3]"
              {...register("name")}
            />
          </div>
          <div className="grid md:gap-y-[0.74vh] md:pb-[2.59vh]">
            <label
              htmlFor="usernphoneInput"
              className="md:text-[1.29vh] md:leading-[1.85vh] font-normal"
            >
              Номер
            </label>
            <input
              id="usernphoneInput"
              type="text"
              placeholder="+7 999 999 99 99"
              required
              className="md:px-[1.04vw] md:py-[1.11vh] rounded-md text-[#1B1743] text-[1.48vh] placeholder:text-[1.48vh] placeholder:leading-[2.22vh] placeholder:font-medium placeholder:text-[#D3D3E3]"
              {...register("phone")}
            />
          </div>
          <button
            disabled={isSubmitting}
            className="bg-white text-[#1B1743] md:py-[1.48vh] md:px-[1.25vw] rounded-md md:text-[1.48vh] md:leading-[2.22vh] font-semibold hover:shadow-md active:scale-[97%] transition-all"
          >
            Отправить
          </button>
        </form>
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
              <div key={index} className="bg-[#F8F6F7] h-fit rounded-md">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={24}
                  className="mx-[0.62vw] my-[1.11vh] md:h-[2.22vh] md:w-[1.25vw] object-contain"
                />
              </div>
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
        <div className="col-span-2 relative">
          <div className="z-[22] absolute top-[-9.25vh]">
            <Image
              src={PicFeedback}
              alt="feedback full portrait"
              width={600}
              className="md:w-[20.72vw] md:h-[63.05vh] object-cover rounded-md"
            />
          </div>
          <div className="bg-[#D8CACF] absolute top-[-7.2vh] left-[1.04vw] md:w-[20.72vw] md:h-[63.05vh] rounded-md "></div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;