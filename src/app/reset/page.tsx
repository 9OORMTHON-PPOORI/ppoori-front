"use client";

import { Button } from "@/components/ui/button";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Reset() {
  const [target, setTarget] = useState("");
  const router = useRouter();

  const handleModifyBtn = () => {
    window.localStorage.setItem("대상", target);
    router.push("/policy");
  };

  return (
    <>
      <div className="mt-20">
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
            onClick={() => handleModifyBtn()}
            disabled={target === ""}
          >
            수정
          </Button>
        </div>
      </div>
    </>
  );
}
