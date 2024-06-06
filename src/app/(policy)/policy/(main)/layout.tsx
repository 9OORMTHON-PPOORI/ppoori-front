"use client";

import { useRouter } from "next/navigation";
import { Suspense } from "react";

import useUserInfoStore from "@/store/user-info-store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { target } = useUserInfoStore();
  const router = useRouter();

  return (
    <Suspense fallback="">
      <div className="m-auto max-w-[390px]">
        <div className="fixed flex min-w-[390px] justify-end">
          <div
            className="mr-[24px] mt-[8px] w-[72px] items-center gap-2 rounded-full bg-[#3978A5] py-[6px] text-center text-text-4 text-po-darkcyan-2 hover:cursor-pointer"
            onClick={() => router.push("/reset")}
          >
            {target}
          </div>
        </div>
      </div>
      <div className="flex min-h-full flex-col justify-center bg-po-darkcyan-4 pb-20 pt-[42px]">
        <main className="m-auto max-w-[390px]">{children}</main>
      </div>
    </Suspense>
  );
}
