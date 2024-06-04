"use client";

import Image from "next/image";
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
        <div className="flex justify-center">
          <div
            className="flex items-center gap-2 pb-[13px] hover:cursor-pointer"
            onClick={() => router.push("/reset")}
          >
            <Image
              className="rounded-full"
              src="/icon/profile.svg"
              alt="대상 이미지"
              width={25}
              height={25}
              style={{ height: 25 }}
            />
            <div className="text-text-1 text-po-darkcyan-2">{target}</div>
          </div>
        </div>
        <main className="m-auto max-w-[390px]">{children}</main>
      </div>
    </Suspense>
  );
}
