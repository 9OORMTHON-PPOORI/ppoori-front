"use client";

import { Suspense } from "react";

import { UserSelectButton } from "@/components/components/button/user-select-button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";

import useUserInfoStore from "@/store/user-info-store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { target, setTarget } = useUserInfoStore();

  return (
    <Suspense fallback="">
      <div className="flex min-h-[100vh] flex-col justify-center bg-po-darkcyan-4 pb-20">
        <Drawer>
          <DrawerTrigger>
            <div className="flex justify-center">
              <div className="fixed top-0 m-auto mt-[8px] w-[72px] items-center gap-2 rounded-full bg-[#3978A5] py-[6px] text-center text-text-4 text-po-darkcyan-2 hover:cursor-pointer">
                {target}
              </div>
            </div>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerFooter>
              <div className="mt-[24px] grid grid-cols-2 place-items-center gap-3">
                {[
                  "대학생",
                  "취준생",
                  "재직자",
                  "신혼부부",
                  "농어업인",
                  "예술가",
                ].map((label) => (
                  <UserSelectButton
                    key={label}
                    target={target}
                    setTarget={setTarget}
                    label={label}
                  />
                ))}
              </div>
              <DrawerClose>
                <button className="mt-[32px] h-[60px] w-full rounded-[16px] bg-[#1FA8BD] text-subtitle-1 text-[#FFFFFF] hover:opacity-70">
                  선택
                </button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <main className="w-full pt-[56px]">{children}</main>
      </div>
    </Suspense>
  );
}
