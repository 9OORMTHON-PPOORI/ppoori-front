"use client";

import { useRouter } from "next/navigation";

import { UserSelectButton } from "@/components/components/button/user-select-button";
import { Button } from "@/components/ui/button";

import useUserInfoStore from "@/store/user-info-store";

export default function Reset() {
  const { target, setTarget } = useUserInfoStore();
  const router = useRouter();

  const handleModifyBtn = () => {
    router.push(`/policy`);
  };

  return (
    <div className="w-full">
      <div className="w-full text-left">
        <p className="text-title-1 text-po-gray-800">나는</p>
        <p className="text-title-1 text-po-gray-800">누구인가요?</p>
      </div>
      <div className="mb-[48px] mt-6 grid grid-cols-2 place-items-center gap-3">
        {["대학생", "취준생", "재직자", "신혼부부", "농어업인", "예술가"].map(
          (label) => (
            <UserSelectButton
              key={label}
              target={target}
              setTarget={setTarget}
              label={label}
            />
          )
        )}
      </div>
      <div className="flex w-full justify-center">
        <Button
          className="h-[60px] w-[120px] rounded-full"
          onClick={handleModifyBtn}
          disabled={target === ""}
        >
          변경
        </Button>
      </div>
    </div>
  );
}
