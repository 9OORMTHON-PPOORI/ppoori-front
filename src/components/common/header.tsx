"use client";

import { CaretLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <>
      <nav className="relative z-50 m-auto my-3 flex h-[44px] w-full max-w-[390px] cursor-pointer items-center justify-center">
        <div
          className="absolute left-0 flex w-full items-center justify-start"
          onClick={() => router.back()}
        >
          <CaretLeftIcon className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-medium">카테코리 전체</h3>
      </nav>
    </>
  );
}
