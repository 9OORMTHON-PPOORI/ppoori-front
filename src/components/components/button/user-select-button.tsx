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
        className={`h-[106px] w-full rounded-[16px] text-title-3 hover:border-po-cyan-2 hover:bg-po-cyan-1 hover:text-po-cyan-2 ${target === label ? "border-po-cyan-2 bg-po-cyan-1 text-po-cyan-2" : "bg-white text-black"} `}
        onClick={() => setTarget(label)}
      >
        {label}
      </Button>
    </>
  );
}
