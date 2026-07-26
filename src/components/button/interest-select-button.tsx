import Image from "next/image";

import { Button } from "@/components/ui/button";

interface InterestSelectButtonProps {
  interest: string;
  setInterest: (interest: string) => void;
  label: string;
  imageSrc: string;
}

export function InterestSelectButton({
  interest,
  setInterest,
  label,
  imageSrc,
}: InterestSelectButtonProps) {
  const isSelected = interest === label;

  return (
    <Button
      type="button"
      aria-pressed={isSelected}
      className={`h-[166px] w-full rounded-[16px] px-[35px] py-[29px] text-po-gray-700 ${isSelected ? "border-po-cyan-2 bg-po-cyan-1 text-po-cyan-2" : "border-po-gray-300 bg-[#CDCED614] text-po-gray-700 hover:border-[#E1E1E8] hover:bg-[#CDCED633]"}`}
      onClick={() => setInterest(label)}
    >
      <span className="flex flex-col items-center">
        {/* 바로 아래 텍스트가 같은 내용을 전달하므로 라벨을 두 번 읽지 않게 둔다. */}
        <Image
          className="object-cover"
          src={imageSrc}
          alt=""
          aria-hidden
          width={97}
          height={76}
        />
        <span className="mt-2 text-title-4">{label}</span>
      </span>
    </Button>
  );
}
