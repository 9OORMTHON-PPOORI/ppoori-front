"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { SplashScreen } from "@/components/components/splash-screen/splashScreen";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [page, setPage] = useState(1);
  const [target, setTarget] = useState("");
  const [interest, setInterest] = useState("");
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setLoading(true), 4000);
  }, []);

  const handleNextBtn = () => {
    if (page === 1) window.localStorage.setItem("대상", target);
    else if (page === 2) {
      window.localStorage.setItem("관심사", interest);
      router.push("/policy");
    }

    setPage(page + 1);
  };

  return (
    <>
      {loading ? (
        <div className="relative">
          {page === 1 && (
            <div>
              <div className="mx-[26px] mt-[40px] w-full text-left">
                <p className="text-[30px] font-extrabold">나는</p>
                <p className="text-[30px] font-extrabold">누구인가요?</p>
              </div>
              <div className="my-8 grid grid-cols-2 place-items-center gap-3 px-6">
                <Button
                  className={`h-[98px] w-[165px] rounded-xl text-[22px] ${target == "대학생" ? "bg-[#FFF3F4] text-black" : "bg-white text-black "} hover:bg-[#FFF3F4]`}
                  onClick={() => setTarget("대학생")}
                >
                  대학생
                </Button>
                <Button
                  className={`h-[98px] w-[165px] rounded-xl text-[22px] ${target == "취준생" ? "bg-[#FFF3F4] text-black" : "bg-white text-black "} hover:bg-[#FFF3F4]`}
                  onClick={() => setTarget("취준생")}
                >
                  취준생
                </Button>
                <Button
                  className={`h-[98px] w-[165px] rounded-xl text-[22px] ${target == "재직자" ? "bg-[#FFF3F4] text-black" : "bg-white text-black "} hover:bg-[#FFF3F4]`}
                  onClick={() => setTarget("재직자")}
                >
                  재직자
                </Button>
                <Button
                  className={`h-[98px] w-[165px] rounded-xl text-[22px] ${target == "신혼부부" ? "bg-[#FFF3F4] text-black" : "bg-white text-black "} hover:bg-[#FFF3F4]`}
                  onClick={() => setTarget("신혼부부")}
                >
                  신혼부부
                </Button>
                <Button
                  className={`h-[98px] w-[165px] rounded-xl text-[22px] ${target == "농,어업인" ? "bg-[#FFF3F4] text-black" : "bg-white text-black "} hover:bg-[#FFF3F4]`}
                  onClick={() => setTarget("농,어업인")}
                >
                  농,어업인
                </Button>
                <Button
                  className={`h-[98px] w-[165px] rounded-xl text-[22px] ${target == "예술가" ? "bg-[#FFF3F4] text-black" : "bg-white text-black "} hover:bg-[#FFF3F4]`}
                  onClick={() => setTarget("예술가")}
                >
                  예술가
                </Button>
              </div>
              <div className="mt-[35px] flex w-full justify-center">
                <Button
                  className="h-[60px] w-[120px] rounded-full"
                  onClick={() => handleNextBtn()}
                  disabled={target === ""}
                >
                  다음
                </Button>
              </div>
            </div>
          )}
          {page === 2 && (
            <div>
              <div className="mt-[40px] w-full px-[26px] text-left">
                <p className="text-[30px] font-extrabold">어떤 정책이</p>
                <p className="text-[30px] font-extrabold">궁금하세요?</p>
              </div>
              <div className="mt-8 grid grid-cols-1 place-items-center gap-[10px]">
                <Button
                  className={`h-[112px] w-[342px] rounded-xl py-6 text-lg ${interest == "활동지원" ? "bg-[#FFF3F4] text-black" : "bg-white text-black"} hover:bg-[#FFF3F4]`}
                  onClick={() => setInterest("활동지원")}
                >
                  <div className="flex w-full justify-between">
                    <Image
                      className="object-cover"
                      src="/images/first-target1.svg"
                      alt="활동지원"
                      width={155}
                      height={112}
                    />
                    <div className="m-auto">
                      <p className="text-[22px] font-medium">활동지원</p>
                    </div>
                  </div>
                </Button>
                <Button
                  className={`h-[112px] w-[342px] rounded-xl py-6 text-lg ${interest == "역량개발" ? "bg-[#FFF3F4] text-black" : "bg-white text-black"} hover:bg-[#FFF3F4]`}
                  onClick={() => setInterest("역량개발")}
                >
                  <div className="flex items-center justify-between gap-[52px]">
                    <div className="relative h-[76px] w-[117px]">
                      <Image
                        className="object-cover"
                        src="/images/first-target2.svg"
                        alt="역량개발"
                        fill
                      />
                    </div>
                    <p className="text-[22px] font-medium">역량개발</p>
                  </div>
                </Button>
                <Button
                  className={`h-[112px] w-[342px] rounded-xl py-6 text-lg ${interest == "생활지원" ? "bg-[#FFF3F4] text-black" : "bg-white text-black"} hover:bg-[#FFF3F4]`}
                  onClick={() => setInterest("생활지원")}
                >
                  <div className="flex items-center justify-between gap-[52px]">
                    <div className="relative h-[76px] w-[117px]">
                      <Image
                        className="object-cover"
                        src="/images/first-target3.svg"
                        alt="생활지원"
                        fill
                      />
                    </div>
                    <p className="text-[22px] font-medium">생활지원</p>
                  </div>
                </Button>
                <Button
                  className={`h-[112px] w-[342px] rounded-xl py-6 text-lg ${interest == "진로지원" ? "bg-[#FFF3F4] text-black" : "bg-white text-black"} hover:bg-[#FFF3F4]`}
                  onClick={() => setInterest("진로지원")}
                >
                  <div className="flex items-center justify-between gap-[52px]">
                    <div className="relative h-[76px] w-[117px]">
                      <Image
                        className="object-cover"
                        src="/images/first-target4.svg"
                        alt="진로지원"
                        fill
                      />
                    </div>
                    <div>진로지원</div>
                  </div>
                </Button>
              </div>
              <div className="mt-4 flex w-full justify-center">
                <Button
                  className="mt-[35px] h-[60px] w-[120px] rounded-full"
                  onClick={() =>
                    router.push(
                      `/policy/?target=${target}&interest=${interest}`
                    )
                  }
                  disabled={target === ""}
                >
                  완료
                </Button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <SplashScreen />
      )}
    </>
  );
}
