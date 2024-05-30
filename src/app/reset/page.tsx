"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import Layout from "@/components/common/layout";
import { UserSelectButton } from "@/components/components/button/user-select-button";
import { Button } from "@/components/ui/button";

export default function Reset() {
  const [target, setTarget] = useState("");
  const router = useRouter();

  const handleModifyBtn = () => {
    window.localStorage.setItem("대상", target);
    router.push(`/policy/?target=${target}&interest=역량개발`);
  };

  return (
    <Layout>
      <div>
        <div className="w-full text-left">
          <p className="text-po-gray-800 text-title-1">나는</p>
          <p className="text-po-gray-800 text-title-1">누구인가요?</p>
        </div>
        <div className="mb-[48px] mt-6 grid grid-cols-2 place-items-center gap-3">
          {[
            "대학생",
            "취준생",
            "재직자",
            "신혼부부",
            "농,어업인",
            "예술가",
          ].map((label) => (
            <UserSelectButton
              key={label}
              target={target}
              setTarget={setTarget}
              label={label}
            />
          ))}
        </div>
        <div className="flex w-full justify-center">
          <Button
            className="h-[60px] w-[120px] rounded-full"
            onClick={handleModifyBtn}
            disabled={target === ""}
          >
            다음
          </Button>
        </div>
      </div>
    </Layout>
  );
}
