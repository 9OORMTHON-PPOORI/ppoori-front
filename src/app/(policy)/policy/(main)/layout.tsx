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
      <div className="min-h-full bg-po-darkcyan-4 pb-20 pt-4">
        <div className="m-auto flex max-w-[390px] justify-end">
          <div
            className="w-[72px] items-center gap-2 rounded-full bg-[#3978A5] py-[6px] text-center text-text-4 text-po-darkcyan-2 hover:cursor-pointer"
            onClick={() => router.push("/reset")}
          >
            {target}
          </div>
        </div>
        <main className="m-auto max-w-[390px]">{children}</main>
      </div>
    </Suspense>
  );
}
