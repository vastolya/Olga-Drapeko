import Image from "next/image";
import Main from "./components/Main";
import About from "./components/About";
import Advantages from "./components/Advantages";

export default function Home() {
  return (
    <main className="">
      <Main />
      <About />
      <Advantages />
    </main>
  );
}
