"use client";

import Image from "next/image";

import { IS_SERVICE_CLOSED } from "@/constants/feature-flags";
import { YOUTH_TARGETS } from "@/constants/policy";

import { UserSelectButton } from "@/components/button/user-select-button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import useUserInfoStore, { useUserInfoHydrated } from "@/store/user-info-store";

/** 선택한 청년 유형을 보여주고 다시 고를 수 있게 하는 헤더. */
function TargetSelectHeader() {
  const { target, setTarget } = useUserInfoStore();
  const isHydrated = useUserInfoHydrated();

  const selectedTarget = isHydrated ? target : "";

  return (
    <Drawer>
      {/*
        이전에는 Trigger(button) 안에 div를 중첩해 유효하지 않은 마크업이었다.
        접근 가능한 이름에는 현재 선택값을 포함해, 음성 제어로도 지목할 수 있게 한다.
      */}
      <DrawerTrigger
        aria-label={
          selectedTarget ? `청년 유형 ${selectedTarget} 변경` : "청년 유형 선택"
        }
        className="absolute left-[50%] top-0 m-auto mt-[12px] flex max-w-[90px] translate-x-[-50%] content-center items-center gap-[4px] rounded-full bg-[#3978A5] py-[6px] pl-[10px] pr-[11px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-po-darkcyan-2"
      >
        <Image
          src="/icon/profile_icon.svg"
          alt=""
          aria-hidden
          width={16}
          height={16}
        />
        {/* 복원 전에 값을 그리면 서버 렌더 결과와 어긋난다. */}
        <span className="text-text-4 text-po-darkcyan-2">{selectedTarget}</span>
      </DrawerTrigger>
      <DrawerContent>
        {/* Radix Dialog는 Title을 접근 가능한 이름으로 참조한다. 없으면 이름 없는 dialog가 된다. */}
        <DrawerTitle className="sr-only">청년 유형 선택</DrawerTitle>
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
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="z-10 flex min-h-[100vh] flex-col justify-center bg-po-darkcyan-4">
      {/*
        종료 안내만 노출되는 상태에서 유형 선택 헤더를 남겨두면, 눌러서 값을
        바꿀 수는 있지만 그 선택이 아무 화면에도 반영되지 않는다.
        플래그는 이 라우트의 모든 세그먼트가 함께 따라야 한다.
      */}
      {IS_SERVICE_CLOSED ? null : <TargetSelectHeader />}
      <main className={IS_SERVICE_CLOSED ? undefined : "pt-[56px]"}>
        {children}
      </main>
    </div>
  );
}
