"use client";

import { faker } from "@faker-js/faker";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  const [page, setPage] = useState(1);
  const [target, setTarget] = useState("");
  const [interest, setInterest] = useState("");
  const router = useRouter();

  const handleNextBtn = () => {
    if (page === 1) window.localStorage.setItem("대상", target);
    else if (page === 2) {
      window.localStorage.setItem("관심사", interest);
      router.push("/policy");
    }

    setPage(page + 1);
  };

  return (
    <div className="relative">
      {page === 1 && (
        <div>
          <div className="ml-[37px] mt-[26px] w-full text-left text-[30px] text-lg font-bold">
            <div>나는</div>
            <div className="mt-3">누구인가요?</div>
          </div>
          <div className="my-8 grid grid-cols-2 place-items-center gap-3 px-6">
            <Button
              className={`h-[98px] w-[165px] rounded-xl text-lg ${target == "대학생" ? "bg-black text-white" : "bg-white text-black hover:text-white"}`}
              onClick={() => setTarget("대학생")}
            >
              대학생
            </Button>
            <Button
              className={`h-[98px] w-[165px] rounded-xl text-lg ${target == "취준생" ? "bg-black text-white" : "bg-white text-black hover:text-white"}`}
              onClick={() => setTarget("취준생")}
            >
              취준생
            </Button>
            <Button
              className={`h-[98px] w-[165px] rounded-xl text-lg ${target == "재직자" ? "bg-black text-white" : "bg-white text-black hover:text-white"}`}
              onClick={() => setTarget("재직자")}
            >
              재직자
            </Button>
            <Button
              className={`h-[98px] w-[165px] rounded-xl text-lg ${target == "신혼부부" ? "bg-black text-white" : "bg-white text-black hover:text-white"}`}
              onClick={() => setTarget("신혼부부")}
            >
              신혼부부
            </Button>
            <Button
              className={`h-[98px] w-[165px] rounded-xl text-lg ${target == "농,어업인" ? "bg-black text-white" : "bg-white text-black hover:text-white"}`}
              onClick={() => setTarget("농,어업인")}
            >
              농,어업인
            </Button>
            <Button
              className={`h-[98px] w-[165px] rounded-xl text-lg ${target == "예술가" ? "bg-black text-white" : "bg-white text-black hover:text-white"}`}
              onClick={() => setTarget("예술가")}
            >
              예술가
            </Button>
          </div>
          <div className="mt-4 flex w-full justify-center">
            <Button
              className="fixed bottom-24 h-[60px] w-[120px] rounded-full"
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
          <div className="ml-[37px] mt-[26px] w-full text-left text-[30px] text-lg font-bold">
            <div>어떤 정책이</div>
            <div className="mt-3">궁금하세요?</div>
          </div>
          <div className="mt-8 grid grid-cols-1 place-items-center gap-[10px] px-6">
            <Button
              className={`h-[112px] w-[342px] rounded-xl py-6 text-lg ${interest == "활동지원" ? "bg-black text-white" : "bg-white text-black hover:text-white"}`}
              onClick={() => setInterest("활동지원")}
            >
              <div className="flex items-center justify-between gap-[52px]">
                <div className="relative h-[76px] w-[117px]">
                  <Image
                    className="object-cover"
                    src="/images/interestCon1.svg"
                    alt="활동지원콘"
                    fill
                  />
                </div>
                <div>활동지원</div>
              </div>
            </Button>
            <Button
              className={`h-[112px] w-[342px] rounded-xl py-6 text-lg ${interest == "역량개발" ? "bg-black text-white" : "bg-white text-black hover:text-white"}`}
              onClick={() => setInterest("역량개발")}
            >
              <div className="flex items-center justify-between gap-[52px]">
                <div className="relative h-[76px] w-[117px]">
                  <Image
                    className="object-cover"
                    src="/images/interestCon1.svg"
                    alt="활동지원콘"
                    fill
                  />
                </div>
                <div>역량개발</div>
              </div>
            </Button>
            <Button
              className={`h-[112px] w-[342px] rounded-xl py-6 text-lg ${interest == "생활지원" ? "bg-black text-white" : "bg-white text-black hover:text-white"}`}
              onClick={() => setInterest("생활지원")}
            >
              <div className="flex items-center justify-between gap-[52px]">
                <div className="relative h-[76px] w-[117px]">
                  <Image
                    className="object-cover"
                    src="/images/interestCon1.svg"
                    alt="활동지원콘"
                    fill
                  />
                </div>
                <div>생활지원</div>
              </div>
            </Button>
            <Button
              className={`h-[112px] w-[342px] rounded-xl py-6 text-lg ${interest == "진로지원" ? "bg-black text-white" : "bg-white text-black hover:text-white"}`}
              onClick={() => setInterest("진로지원")}
            >
              <div className="flex items-center justify-between gap-[52px]">
                <div className="relative h-[76px] w-[117px]">
                  <Image
                    className="object-cover"
                    src="/images/interestCon1.svg"
                    alt="활동지원콘"
                    fill
                  />
                </div>
                <div>진로지원</div>
              </div>
            </Button>
          </div>
          <div className="mt-4 flex w-full justify-center">
            <Button
              className="mt-[40px] h-[60px] w-[120px] rounded-full"
              onClick={() => handleNextBtn()}
              disabled={target === ""}
            >
              완료
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
