import localFont from "next/font/local";

export const montserrat = localFont({
    src: [
      {
        path: "../../public/fonts/Montserrat-Bold.ttf",
        weight: "600",
        style: "normal",
      },
      {
        path: "../../public/fonts/Montserrat-ExtraBold.ttf",
        weight: "700",
        style: "normal",
      },
    ],
  });

  export const evolventa = localFont({
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