"use client";

import Image from "next/image";
import React, { KeyboardEvent, useId, useState } from "react";

const TOOLTIP_DESCRIPTION =
  "AI가 정책 원문을 요약한 내용이며, 정확한 조건은 상세 내용을 확인해 주세요.";

/**
 * AI 요약이 어떻게 만들어지는지 알려주는 도움말.
 *
 * 포인터와 포커스는 서로 독립적으로 켜지고 꺼진다. 하나의 boolean을 공유하면
 * 마우스가 올라가 이미 열린 상태에서 클릭이 토글로 닫아버리고(모바일의 합성
 * mouseover → click도 같다), 키보드로 연 뒤 마우스가 스쳐 지나가면 포커스가
 * 남아 있는데도 닫힌다. 두 상태를 나눠 두고 표시 여부는 파생한다.
 */
const TooltipModal = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const tooltipId = useId();

  const isOpen = isHovered || isFocused;

  // WCAG 1.4.13 — 포인터를 올려 띄운 콘텐츠는 Escape로 닫을 수 있어야 한다.
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Escape") {
      setIsHovered(false);
      setIsFocused(false);
    }
  };

  return (
    <div>
      <button
        type="button"
        // 툴팁은 disclosure가 아니므로 aria-expanded가 아니라 설명으로 연결한다.
        aria-describedby={tooltipId}
        aria-label="AI 요약 안내"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleKeyDown}
        // 아이콘 크기는 18px로 두고 after 의사요소로 44x44 터치 타깃만 넓힌다.
        // 버튼 박스를 44px로 키우면 이 버튼이 든 절대배치 행이 위로 자라
        // 요약이 5줄을 채운 카드에서 본문과 겹친다.
        className="relative flex h-[18px] w-[18px] items-center justify-center rounded-full after:absolute after:-inset-[13px] after:content-[''] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-po-cyan-2"
      >
        <Image
          src="/icon/helpIcon.svg"
          alt=""
          aria-hidden
          width={18}
          height={18}
        />
      </button>

      {/*
        안내 문구는 항상 DOM에 둔다. 열렸을 때만 렌더하면 닫힌 동안
        aria-describedby가 존재하지 않는 id를 가리켜 설명이 전달되지 않는다.
      */}
      <span id={tooltipId} role="tooltip" className="sr-only">
        {TOOLTIP_DESCRIPTION}
      </span>

      {isOpen ? (
        <Image
          className="absolute right-[-16px] top-[22px] z-50 duration-100 ease-in animate-in fade-in-0 zoom-in-90 slide-in-from-top-2"
          src="/images/tooltips.svg"
          alt=""
          aria-hidden
          width={185}
          height={6}
        />
      ) : null}
    </div>
  );
};

export default TooltipModal;
