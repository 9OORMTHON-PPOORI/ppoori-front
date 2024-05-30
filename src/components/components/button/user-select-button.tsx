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
        className={`hover:bg-po-cyan-1 hover:text-po-cyan-2 hover:border-po-cyan-2 h-[106px] w-[166px] rounded-[16px] text-title-3 ${target === label ? "bg-po-cyan-1 text-po-cyan-2 border-po-cyan-2" : "bg-white text-black"} `}
        onClick={() => setTarget(label)}
      >
        {label}
      </Button>
    </>
  );
}
