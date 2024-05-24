"use client";

import Image from "next/image";

export function SplashScreen() {
  return (
    <div className="relative h-screen w-full opacity-100 transition-opacity duration-500 ease-in-out">
      <div className="absolute bottom-0">
        <Image
          src="/images/splash.svg"
          alt="splashIcon1"
          width={390}
          height={726}
        />
      </div>
    </div>
  );
}
