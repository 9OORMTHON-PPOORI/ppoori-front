import type { Metadata } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";

import "@/styles/globals.css";

import Loading from "@/components/components/loading/loading";

import { MetaData } from "@/constants/config";
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

export const metadata: Metadata = MetaData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} ${allRoundGothic.variable}`}
    >
      <body className={`${pretendard.className}`}>
        <ReactQueryProvider>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
