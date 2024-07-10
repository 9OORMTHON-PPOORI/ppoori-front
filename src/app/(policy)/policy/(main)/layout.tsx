"use client";

import Image from "next/image";
import { Suspense, useEffect } from "react";

import { UserSelectButton } from "@/components/components/button/user-select-button";
import LoadingPresenter from "@/components/components/loading/loading";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";

import usePolicyLoadingStore from "@/store/policy-loading-store";
import useUserInfoStore from "@/store/user-info-store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { target, setTarget } = useUserInfoStore();
  const { hasVisitedMain, setHasVisitedMain } = usePolicyLoadingStore();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHasVisitedMain(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (hasVisitedMain) return <LoadingPresenter />;

  return (
    <Suspense fallback="">
      <div className="flex min-h-[100vh] flex-col justify-center bg-po-darkcyan-4">
        <Drawer>
          <DrawerTrigger>
            <div className="absolute left-[50%] top-0 m-auto mt-[12px] flex max-w-[90px] translate-x-[-50%] content-center items-center gap-[4px] rounded-full bg-[#3978A5] py-[6px] pl-[10px] pr-[11px]">
              <Image
                src="/icon/profile_icon.svg"
                alt="프로필 아이콘"
                width={16}
                height={16}
              />
              <div className="text-text-4 text-po-darkcyan-2 hover:cursor-pointer">
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
                <button className="mt-[32px] h-[60px] w-full rounded-[16px] bg-po-cyan-2 text-subtitle-1 text-po-gray-000 duration-300 hover:brightness-90">
                  선택
                </button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <main className="pt-[56px]">{children}</main>
      </div>
    </Suspense>
  );
}
