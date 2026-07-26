"use client";

import dynamic from "next/dynamic";
import React from "react";

import lottieJson from "../../../public/lottie/loading-bubble.json";

/**
 * react-lottie-player가 의존하는 lottie-web은 모듈 평가 시점에 document로
 * 스타일 태그를 삽입한다. 서버에서 평가되면 "ReferenceError: document is not
 * defined"로 프리렌더가 실패하므로 클라이언트에서만 로드한다.
 */
const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

const LoadingPresenter = () => {
  return (
    <div
      role="status"
      aria-live="polite"
      className="relative z-50 h-screen w-screen bg-[#F7F7FA]"
    >
      <div className="absolute top-[35%] h-[150px] w-full py-4">
        {/* 스크립트가 늦게 도착해도 레이아웃이 밀리지 않도록 높이를 고정한다. */}
        <div className="flex h-[60px] w-full justify-center">
          <Lottie
            loop
            animationData={lottieJson}
            play
            style={{ width: 60, height: 60 }}
          />
        </div>
        <div className="mt-[16px] w-full text-title-4 text-[#858899]">
          <div className="text-center">당신에게 딱맞는 정책을</div>
          <div className="text-center">찾고 있어요</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPresenter;
