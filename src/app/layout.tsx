import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import "@/styles/globals.css";

import { MetaData, ViewPort } from "@/constants/config";
import ReactQueryProvider from "@/provider/query-provider";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

const allRoundGothic = localFont({
  src: [
    {
      path: "./fonts/allroundgothic-bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/allroundgothic-semi.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/allroundgothic-medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/allroundgothic-text.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/allroundgothic-thick.otf",
      weight: "100",
      style: "thin",
    },
  ],
  display: "swap",
  variable: "--font-allroundgothic",
});

const lato = localFont({
  src: [
    {
      path: "./fonts/Lato-Black.ttf",
      weight: "900",
      style: "black",
    },
    {
      path: "./fonts/Lato-Regular.ttf",
      weight: "400",
      style: "reqular",
    },
  ],
  display: "swap",
  variable: "--font-lato",
});

export const metadata: Metadata = MetaData;
export const viewport: Viewport = ViewPort;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} ${allRoundGothic.variable} ${lato.variable}`}
    >
      <body className={`${pretendard.className}`}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
