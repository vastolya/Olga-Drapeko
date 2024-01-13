import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const evolventa = localFont({
  src: [
    {
      path: "../../public/fonts/Evolventa-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Evolventa-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Юрист Ольга Драпеко",
  description: "Юрист для бизнеса и частных лиц",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`select-none ${evolventa.className}`}>
        <Toaster position="bottom-right" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
