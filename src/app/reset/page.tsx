"use client";

import { Button } from "@/components/ui/button";
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
      <div>
        <div className="mt-12 w-full text-center text-lg">
          관심 대상군을 다시 선택해주세요.
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
