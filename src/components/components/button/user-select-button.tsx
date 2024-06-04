"use client";

import { Button } from "@/components/ui/button";

interface UserSelectButtonProps {
  target: string;
  setTarget: (target: string) => void;
  label: string;
}

export function UserSelectButton({
  target,
  setTarget,
  label,
}: UserSelectButtonProps) {
  return (
    <>
      <Button
        className={`h-[106px] w-full rounded-[16px] text-title-4 ${target === label ? "border-po-cyan-2 bg-po-cyan-1 text-po-cyan-2" : "border-po-gray-300 bg-[#CDCED614] text-po-gray-700 hover:border-[#E1E1E8] hover:bg-[#CDCED633]"}`}
        onClick={() => setTarget(label)}
      >
        {label}
      </Button>
    </>
  );
}
