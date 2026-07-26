"use client";

import Image from "next/image";

import { UserSelectButton } from "@/components/components/button/user-select-button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";

import useUserInfoStore, { useUserInfoHydrated } from "@/store/user-info-store";

import { YOUTH_TARGETS } from "@/constants/policy";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { target, setTarget } = useUserInfoStore();
  const isHydrated = useUserInfoHydrated();

  return (
    <div className="z-10 flex min-h-[100vh] flex-col justify-center bg-po-darkcyan-4">
      <Drawer>
        {/*
          이전에는 Trigger(button) 안에 div를 중첩해 유효하지 않은 마크업이었고,
          선택 전에는 target이 빈 문자열이라 버튼에 읽을 이름이 없었다.
        */}
        <DrawerTrigger
          aria-label="청년 유형 변경"
          className="absolute left-[50%] top-0 m-auto mt-[12px] flex max-w-[90px] translate-x-[-50%] content-center items-center gap-[4px] rounded-full bg-[#3978A5] py-[6px] pl-[10px] pr-[11px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-po-darkcyan-2"
        >
          <Image
            src="/icon/profile_icon.svg"
            alt=""
            aria-hidden
            width={16}
            height={16}
          />
          <span className="text-text-4 text-po-darkcyan-2">
            {/* 복원 전에 값을 그리면 서버 렌더 결과와 어긋난다. */}
            {isHydrated ? target : ""}
          </span>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerFooter>
            <div className="mt-[24px] grid grid-cols-2 place-items-center gap-3">
              {YOUTH_TARGETS.map(({ label }) => (
                <UserSelectButton
                  key={label}
                  target={target}
                  setTarget={setTarget}
                  label={label}
                />
              ))}
            </div>
            {/* DrawerClose가 이미 button을 렌더한다. 안에 button을 또 두면 중첩이 된다. */}
            <DrawerClose className="mt-[32px] h-[60px] w-full rounded-[16px] bg-po-cyan-2 text-subtitle-1 text-po-gray-000 duration-300 hover:brightness-90">
              선택
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <main className="pt-[56px]">{children}</main>
    </div>
  );
}
