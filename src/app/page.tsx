"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { faker } from "@faker-js/faker";
import Image from "next/image";

export default function Home() {
  const [page, setPage] = useState(1);
  const [sex, setSex] = useState("");
  const [target, setTarget] = useState("");
  const [interest, setInterest] = useState("");
  const router = useRouter();

  const handleNextBtn = () => {
    if (page === 1) window.localStorage.setItem("성별", sex);
    else if (page === 2) window.localStorage.setItem("대상", target);
    else {
      window.localStorage.setItem("관심사", interest);
      router.push("/policy");
    }

    setPage(page + 1);
  };

  return (
    <div>
      <Progress className="my-4" value={1 + 33 * page} />
      {page === 1 && (
        <div className="w-full">
          <div className="mt-12 w-full text-center text-lg">
            성별을 선택해주세요.
          </div>
          <div className="my-20 flex justify-center gap-4">
            <Button
              className={`w-[60px] rounded-full ${sex == "남성" ? "bg-black text-white" : "bg-white text-black hover:text-white"}`}
              onClick={() => setSex("남성")}
            >
              남성
            </Button>
            <Button
              className={`w-[60px] rounded-full ${sex == "여성" ? "bg-black text-white" : "bg-white text-black hover:text-white"}`}
              onClick={() => setSex("여성")}
            >
              여성
            </Button>
          </div>
          <div className="mt-4 flex w-full justify-center">
            <Button
              className="w-[100px]"
              onClick={() => handleNextBtn()}
              disabled={sex === ""}
            >
              다음
            </Button>
          </div>
        </div>
      )}
      {page === 2 && (
        <div>
          <div className="mt-12 w-full text-center text-lg">
            관심 대상군을 선택해주세요.
          </div>
          <div className="my-20 flex justify-center gap-4">
            <Button
              className={`w-[60px] rounded-full ${target == "대학생" ? "bg-black text-white" : "bg-white text-black hover:text-white"}`}
              onClick={() => setTarget("대학생")}
            >
              대학생
            </Button>
            <Button
              className={`w-[60px] rounded-full ${target == "취준생" ? "bg-black text-white" : "bg-white text-black hover:text-white"}`}
              onClick={() => setTarget("취준생")}
            >
              취준생
            </Button>
            <Button
              className={`w-[60px] rounded-full ${target == "재직자" ? "bg-black text-white" : "bg-white text-black hover:text-white"}`}
              onClick={() => setTarget("재직자")}
            >
              재직자
            </Button>
            <Button
              className={`w-[60px] rounded-full ${target == "신혼부부" ? "bg-black text-white" : "bg-white text-black hover:text-white"}`}
              onClick={() => setTarget("신혼부부")}
            >
              신혼부부
            </Button>
            <Button
              className={`w-[60px] rounded-full ${target == "농,어업인" ? "bg-black text-white" : "bg-white text-black hover:text-white"}`}
              onClick={() => setTarget("농,어업인")}
            >
              농,어업인
            </Button>
            <Button
              className={`w-[60px] rounded-full ${target == "예술가" ? "bg-black text-white" : "bg-white text-black hover:text-white"}`}
              onClick={() => setTarget("예술가")}
            >
              예술가
            </Button>
          </div>
          <div className="mt-4 flex w-full justify-center">
            <Button
              className="w-[100px]"
              onClick={() => handleNextBtn()}
              disabled={target === ""}
            >
              다음
            </Button>
          </div>
        </div>
      )}
      {page === 3 && (
        <div>
          <div className="mt-12 w-full text-center text-lg">
            관심사를 선택해주세요.
          </div>
          <div className="my-16 grid grid-cols-2 place-items-center gap-1 px-16">
            <div
              className={`overflow-hidden rounded-md ${interest == "활동지원" && "border-4 border-red-500"}`}
            >
              <Image
                className="duration-200 hover:scale-125 hover:cursor-pointer"
                src={faker.image.urlLoremFlickr()}
                alt="활동지원"
                width={100}
                height={100}
                onClick={() => setInterest("활동지원")}
              />
            </div>
            <div
              className={`overflow-hidden rounded-md ${interest == "역량개발" && "border-4 border-red-500"}`}
            >
              <Image
                className="duration-200 hover:scale-125 hover:cursor-pointer"
                src={faker.image.urlLoremFlickr()}
                alt="역량개발"
                width={100}
                height={100}
                onClick={() => setInterest("역량개발")}
              />
            </div>
            <div
              className={`overflow-hidden rounded-md ${interest == "생활지원" && "border-4 border-red-500"}`}
            >
              <Image
                className="duration-200 hover:scale-125 hover:cursor-pointer"
                src={faker.image.urlLoremFlickr()}
                alt="생활지원"
                width={100}
                height={100}
                onClick={() => setInterest("생활지원")}
              />
            </div>
            <div
              className={`overflow-hidden rounded-md ${interest == "진로지원" && "border-4 border-red-500"}`}
            >
              <Image
                className="duration-200 hover:scale-125 hover:cursor-pointer"
                src={faker.image.urlLoremFlickr()}
                alt="진로지원"
                width={100}
                height={100}
                onClick={() => setInterest("진로지원")}
              />
            </div>
          </div>
          <div className="mt-4 flex w-full justify-center">
            <Button
              className="w-[100px]"
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
