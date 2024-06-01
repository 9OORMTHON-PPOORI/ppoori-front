"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

import Loading from "@/app/loading";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [target, setTarget] = useState<string | null>("미정");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTarget(localStorage.getItem("대상"));
    }
  }, []);

  return (
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
      <main className="m-auto max-w-[390px]">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>
    </div>
  );
}
