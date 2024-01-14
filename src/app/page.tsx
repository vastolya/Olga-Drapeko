import Image from "next/image";
import Main from "./components/Main";
import About from "./components/About";
import Advantages from "./components/Advantages";
import Clients from "./components/Clients";
import FeedbackForm from "./components/FeedbackForm";

export default function Home() {
  return (
    <main className="">
      <div className="bg-gradient-to-r from-[#EBECF1] to-[#FCFCFD] h-[12.8vh]"></div>
      <Main />
      <About />
      <Advantages />
      <Clients />
      <FeedbackForm />
      <div className="md:h-[11.11vh] bg-gradient-to-r from-[#EBECF1] to-[#FCFCFD]"></div>
    </main>
  );
}
