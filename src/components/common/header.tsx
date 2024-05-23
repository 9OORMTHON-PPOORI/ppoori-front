"use client";

import { CaretLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <>
      <nav className="z-50 m-auto my-3 flex h-[44px] w-full max-w-[390px] items-center">
        <div
          className="flex w-full items-center justify-start"
          onClick={() => router.back()}
        >
          <CaretLeftIcon className="h-7 w-7" />
        </div>
      </nav>
    </>
  );
}
