"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export default function Reset() {
  const [target, setTarget] = useState("");
  const router = useRouter();

  const handleModifyBtn = () => {
    window.localStorage.setItem("대상", target);
    router.push(`/policy/?target=${target}&interest=역량개발`);
  };

  return (
    <>
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
        <div className="mt-[202px] flex w-full justify-center">
          <Button
            className="h-[60px] w-[120px] rounded-full"
            onClick={() => handleModifyBtn()}
            disabled={target === ""}
          >
            다음
          </Button>
        </div>
      </div>
    </>
  );
}
