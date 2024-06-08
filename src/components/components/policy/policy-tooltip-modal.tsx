import Image from "next/image";
import React, { useState } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TooltipModal = () => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const handleTooltipChange = () => {
    setIsTooltipOpen(!isTooltipOpen);
  };

  return (
    <TooltipProvider>
      <Tooltip open={isTooltipOpen} onOpenChange={handleTooltipChange}>
        <TooltipTrigger asChild>
          <Image
            className="cursor-pointer"
            src="/icon/helpIcon.svg"
            alt="도움말 아이콘"
            width={18}
            height={18}
            onClick={handleTooltipChange}
          />
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <Image
            className="absolute bottom-20 right-0 z-50 animate-fadeIn"
            src="/images/tooltip-triangle.svg"
            alt="툴팁"
            width={80}
            height={6}
          />
          <p className="text-center text-[12px] font-extralight leading-[18px] tracking-[-0.1px] text-[#F0F0F5]">
            현재 ChatGPT가 처리할 수 있는 범위 내에서 정책의 주요 내용을
            요약했습니다.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipModal;
