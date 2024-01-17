import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { evolventa } from "./fonts";


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
      <body className={`select-none ${evolventa.className} h-screen`}>
        <Toaster position="bottom-right" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
