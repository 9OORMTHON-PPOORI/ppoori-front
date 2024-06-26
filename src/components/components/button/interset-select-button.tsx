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
  return (
    <Button
      className={`h-[166px] w-full rounded-[16px] px-[35px] py-[29px] text-po-gray-700 ${interest === label ? "border-po-cyan-2 bg-po-cyan-1 text-po-cyan-2" : "border-po-gray-300 bg-[#CDCED614] text-po-gray-700 hover:border-[#E1E1E8] hover:bg-[#CDCED633]"}`}
      onClick={() => setInterest(label)}
    >
      <div className="flex flex-col items-center">
        <Image
          className="object-cover"
          src={imageSrc}
          alt={label}
          width={97}
          height={76}
        />
        <div className="mt-2 text-title-4">{label}</div>
      </div>
    </Button>
  );
}
