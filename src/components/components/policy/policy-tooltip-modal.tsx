"use client";

import Image from "next/image";
import React, { useId, useState } from "react";

/**
 * AI 요약이 어떻게 만들어지는지 알려주는 도움말.
 *
 * 이전에는 Image에 onClick/onMouseOver만 걸려 있어 키보드로는 열 수 없었고,
 * 안내 내용이 텍스트를 그려 넣은 SVG라 스크린리더가 읽을 수단이 없었다.
 */
const TooltipModal = () => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const tooltipId = useId();

  const handleTooltipChange = () => {
    setIsTooltipOpen((isOpen) => !isOpen);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleTooltipChange}
        onMouseEnter={() => setIsTooltipOpen(true)}
        onMouseLeave={() => setIsTooltipOpen(false)}
        onFocus={() => setIsTooltipOpen(true)}
        onBlur={() => setIsTooltipOpen(false)}
        aria-expanded={isTooltipOpen}
        aria-controls={tooltipId}
        aria-label="AI 요약 안내 보기"
        className="flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-po-cyan-2"
      >
        <Image
          src="/icon/helpIcon.svg"
          alt=""
          aria-hidden
          width={18}
          height={18}
        />
      </button>
      {isTooltipOpen ? (
        <div id={tooltipId} role="tooltip">
          <Image
            className="absolute right-[-16px] top-[22px] z-50 duration-100 ease-in animate-in fade-in-0 zoom-in-90 slide-in-from-top-2"
            src="/images/tooltips.svg"
            alt=""
            aria-hidden
            width={185}
            height={6}
          />
          {/* 이미지에 그려진 안내를 스크린리더도 읽을 수 있도록 텍스트로 제공한다. */}
          <span className="sr-only">
            AI가 정책 원문을 요약한 내용이며, 정확한 조건은 상세 내용을 확인해
            주세요.
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default TooltipModal;
