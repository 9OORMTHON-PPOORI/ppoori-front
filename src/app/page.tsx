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
      <Progress className="my-8" value={50 * page} />
      {page === 1 && (
        <div>
          <div className="flex justify-center rounded-[16px]">
            <div className="relative h-[120px] w-[120px]">
              <Image
                className="rounded-[16px] object-cover"
                src={faker.image.urlLoremFlickr()}
                alt="관심 대상 아이콘"
                fill
                sizes="100vw"
              />
            </div>
          </div>
          <div className="my-6 w-full text-center text-lg">
            관심 대상군을 선택해주세요.
          </div>
          <div className="my-8 grid grid-cols-3 place-items-center gap-2 px-4">
            <Button
              className={`h-[80px] w-[100px] rounded-xl text-lg ${target == "대학생" ? "bg-black text-white" : "bg-white text-black hover:text-white"}`}
              onClick={() => setTarget("대학생")}
            >
              대학생
            </Button>
            <Button
              className={`h-[80px] w-[100px] rounded-xl text-lg ${target == "취준생" ? "bg-black text-white" : "bg-white text-black hover:text-white"}`}
              onClick={() => setTarget("취준생")}
            >
              취준생
            </Button>
            <Button
              className={`h-[80px] w-[100px] rounded-xl text-lg ${target == "재직자" ? "bg-black text-white" : "bg-white text-black hover:text-white"}`}
              onClick={() => setTarget("재직자")}
            >
              재직자
            </Button>
            <Button
              className={`h-[80px] w-[100px] rounded-xl text-lg ${target == "신혼부부" ? "bg-black text-white" : "bg-white text-black hover:text-white"}`}
              onClick={() => setTarget("신혼부부")}
            >
              신혼부부
            </Button>
            <Button
              className={`h-[80px] w-[100px] rounded-xl text-lg ${target == "농,어업인" ? "bg-black text-white" : "bg-white text-black hover:text-white"}`}
              onClick={() => setTarget("농,어업인")}
            >
              농,어업인
            </Button>
            <Button
              className={`h-[80px] w-[100px] rounded-xl text-lg ${target == "예술가" ? "bg-black text-white" : "bg-white text-black hover:text-white"}`}
              onClick={() => setTarget("예술가")}
            >
              예술가
            </Button>
          </div>
          <div className="mt-4 flex w-full justify-center">
            <Button
              className="fixed bottom-24 w-[100px]"
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
          <div className="flex justify-center rounded-[16px]">
            <div className="relative h-[120px] w-[120px]">
              <Image
                className="rounded-[16px] object-cover"
                src={faker.image.urlLoremFlickr()}
                alt="관심 대상 아이콘"
                fill
                sizes="100vw"
              />
            </div>
          </div>
          <div className="mt-6 w-full text-center text-lg">
            관심사를 선택해주세요.
          </div>
          <div className="mt-8 grid grid-cols-2 place-items-center gap-2 px-6">
            <Button
              className={`h-full w-full rounded-xl py-6 text-lg ${interest == "활동지원" ? "bg-black text-white" : "bg-white text-black hover:text-white"}`}
              onClick={() => setInterest("활동지원")}
            >
              <div className="grid">
                <div>활동</div>
                <div>지원</div>
              </div>
            </Button>
            <Button
              className={`h-full w-full rounded-xl py-6 text-lg ${interest == "역량개발" ? "bg-black text-white" : "bg-white text-black hover:text-white"}`}
              onClick={() => setInterest("역량개발")}
            >
              <div className="grid">
                <div>역량</div>
                <div>개발</div>
              </div>
            </Button>
            <Button
              className={`h-full w-full rounded-xl py-6 text-lg ${interest == "생활지원" ? "bg-black text-white" : "bg-white text-black hover:text-white"}`}
              onClick={() => setInterest("생활지원")}
            >
              <div className="grid">
                <div>생활</div>
                <div>지원</div>
              </div>
            </Button>
            <Button
              className={`h-full w-full rounded-xl py-6 text-lg ${interest == "진로지원" ? "bg-black text-white" : "bg-white text-black hover:text-white"}`}
              onClick={() => setInterest("진로지원")}
            >
              <div className="grid">
                <div>진로</div>
                <div>지원</div>
              </div>
            </Button>
          </div>
          <div className="mt-4 flex w-full justify-center">
            <Button
              className="fixed bottom-24 w-[100px]"
              onClick={() => handleNextBtn()}
              disabled={interest === ""}
            >
              완료
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
