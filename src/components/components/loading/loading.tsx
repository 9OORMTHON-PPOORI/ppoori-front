"use client";

import React from "react";
import Lottie from "react-lottie-player";

import lottieJson from "../../../../public/lottie/loading-bubble.json";

const LoadingPresenter = () => {
  return (
    <div className="relative h-screen w-screen bg-[#F7F7FA]">
      <div className="absolute top-[35%] h-[150px] w-full py-4">
        <div className="flex w-full justify-center">
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
