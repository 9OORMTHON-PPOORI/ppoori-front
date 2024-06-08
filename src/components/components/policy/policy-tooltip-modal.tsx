import Image from "next/image";
import React, { useState } from "react";

const TooltipModal = () => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const handleTooltipChange = () => {
    setIsTooltipOpen(!isTooltipOpen);
  };

  return (
    <div>
      <Image
        className="cursor-pointer"
        src="/icon/helpIcon.svg"
        alt="도움말 아이콘"
        width={18}
        height={18}
        onClick={handleTooltipChange}
        onMouseOver={() => setIsTooltipOpen(true)}
        onMouseLeave={() => setIsTooltipOpen(false)}
      />
      {isTooltipOpen && (
        <>
          <Image
            className="absolute right-[-16px] top-[22px] z-50 duration-100 ease-in animate-in fade-in-0 zoom-in-90 slide-in-from-top-2"
            src="/images/tooltips.svg"
            alt="툴팁"
            width={185}
            height={6}
          />
        </>
      )}
    </div>
  );
};

export default TooltipModal;
