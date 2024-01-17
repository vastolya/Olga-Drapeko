import React from "react";
import Link from "next/link";

const photo_contributor = () => {
  const linksArray = [
    {
      title: "law-firm-concept-illustration_23672996",
      link: "https://www.freepik.com/free-vector/law-firm-concept-illustration_23672996.htm#page=2&position=22&from_view=author&uuid=3dbc8674-ef18-44c7-9dd7-8c716bbe944f%22%3EImage%20by%20storyset%3C/a%3E%20on%20Freepik",
    },
    {
      title: "female-lawyer-concept-illustration_36064861",
      link: "https://www.freepik.com/free-vector/female-lawyer-concept-illustration_36064861.htm#query=%D1%8E%D1%80%D0%B8%D1%81%D1%82&position=8&from_view=search&track=ais&uuid=246f6019-1f1f-45f7-b5ef-8f2ea759599e%22%3EImage%20by%20storyset%3C/a%3E%20on%20Freepik",
    },
    {
      title: "downfall-concept-illustration_17721473",
      link: "https://www.freepik.com/free-vector/downfall-concept-illustration_17721473.htm#page=37&position=17&from_view=author&uuid=36a12faf-e6cf-4a60-a839-9bf29f0e235f%22%3EImage%20by%20storyset%3C/a%3E%20on%20Freepik",
    },
    {
      title: "legal-advisers-concept-illustration_36064797",
      link: "https://www.freepik.com/free-vector/legal-advisers-concept-illustration_36064797.htm#page=3&query=%D1%8E%D1%80%D0%B8%D1%81%D1%82&position=0&from_view=search&track=ais&uuid=f9af6637-3592-48a4-8ec9-c532575b84cd%22%3EImage%20by%20storyset%3C/a%3E%20on%20Freepik",
    },
  ];

  return (
    <main className="">
      <div className="bg-gradient-to-r from-[#EBECF1] to-[#FCFCFD] h-[10.74vh]"></div>
      <div className={` bg-gradient-to-r from-[#EBECF1] to-[#FCFCFD]`}>
        <div className="md:mx-[12.5vw] md:py-[5.55vh] text-[#1B1743]">
          <h1 className={`md:text-[7.4vh] md:leading-[7.4vh] font-bold `}>
            Автор фотоматериала
          </h1>
        </div>
      </div>
      <section className="md:mx-[12.5vw] md:mt-[5.55vh] md:mb-[16.48vh] flex flex-col gap-[1.85vh]">
        {linksArray.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="md:text-[1.48vh] md:leading-[2.22vh] text-[#962C52] font-semibold"
          >
            {item.title}
          </Link>
        ))}
      </section>
    </main>
  );
};

export default photo_contributor;
