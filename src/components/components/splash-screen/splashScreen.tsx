"use client";

import Image from "next/image";

export function SplashScreen() {
  return (
    <div className="relative h-screen w-full bg-[#252730]">
      <div className="relative top-[60px] m-auto flex h-[500px] w-[326px] justify-center">
        <div className="absolute bottom-0">
          <Image
            src="/images/splash-background.svg"
            alt="splashIcon1"
            width={266}
            height={444}
          />
        </div>
        <div className="absolute left-[5px] top-[186px]">
          <Image
            src="/images/splash-icon1.svg"
            alt="splashIcon1"
            width={170}
            height={120}
          />
        </div>
        <div className="absolute right-0 top-[281px]">
          <Image
            src="/images/splash-icon2.svg"
            alt="splashIcon1"
            width={160}
            height={120}
          />
        </div>
        <div className="absolute left-[8px] top-[27px]">
          <Image
            src="/images/splash-icon3.svg"
            alt="splashIcon1"
            width={180}
            height={120}
          />
        </div>
        <div className="absolute right-0 top-[105px]">
          <Image
            src="/images/splash-icon4.svg"
            alt="splashIcon1"
            width={160}
            height={120}
          />
        </div>
      </div>
      <div className="absolute top-[584px] w-full text-center text-[24px] text-[#F7F7FA]">
        <div>제주시 청년 정책</div>
        <div>통합 플랫폼</div>
      </div>
    </div>
  );
}
