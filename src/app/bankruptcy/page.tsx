import React from "react";

import { montserrat } from "../fonts";
import { evolventa } from "../fonts";
import FeedbackForm from "../components/FeedbackForm";

const page = () => {
  return (
    <main className={`bg-gradient-to-r from-[#EBECF1] to-[#FCFCFD]`}>
      <div className="bg-gradient-to-r from-[#EBECF1] to-[#FCFCFD] h-[10vh]"></div>
      <section className={`md:mx-[12.5vw]`}>
        <h1
          className={`md:py-[5.55vh] md:text-[7.4vh] md:leading-[7.4vh] font-bold text-[#1B1743]`}
        >
          Юридическое сопровождение банкротства
        </h1>
        <FeedbackForm /> <FeedbackForm /> <FeedbackForm /> <FeedbackForm />{" "}
        <FeedbackForm />
      </section>
    </main>
  );
};

export default page;
