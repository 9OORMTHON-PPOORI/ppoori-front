"use client";

import { Cross1Icon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  return (
    <main className="relative m-auto flex h-full w-full max-w-[390px] flex-grow items-center px-6">
      <nav className="absolute right-0 top-0 mr-6 flex h-[52px] items-center">
        <div
          className="flex w-full items-center justify-end"
          onClick={() => router.back()}
        >
          <Cross1Icon className="h-[24px] w-[24px]" />
        </div>
      </nav>
      {children}
    </main>
  );
}
