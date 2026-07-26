"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import TooltipModal from "./policy-tooltip-modal";

import { PolicyRecommend } from "@/types/policy";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function PolicySwiper({
  policyCards,
}: {
  policyCards: PolicyRecommend[];
}) {
  return (
    <Swiper
      className="max-w-[460px]"
      effect="cards"
      grabCursor={true}
      initialSlide={0}
      modules={[EffectCards]}
      centeredSlides={false}
      loop={true}
    >
      {policyCards.map((item) => {
        return (
          <SwiperSlide key={item.id} className="pt-[50px]">
            <div className="relative m-auto max-w-[390px] px-10 pb-[43px]">
              <div className="min-h-[446px] w-full rounded-3xl bg-white px-8 pb-[42px] pt-[24px] shadow-[0_16px_32px_rgba(0,0,0,0.2)] duration-700">
                <div className="flex flex-col justify-center">
                  <div className="mb-[22px] mt-[10px] flex h-[18px] justify-center gap-[1px] font-lato text-[13px] font-black text-po-gray-500">
                    <p>{item.currentIndex}</p>
                    <p>/</p>
                    <p>{item.totalIndex}</p>
                  </div>
                  <p className="mb-[4px] line-clamp-1 text-center text-text-4">
                    {item.name}
                  </p>
                  <h2 className="mb-[18px] line-clamp-2 text-center text-title-2">
                    {item.title}
                  </h2>
                </div>
                <div className="relative min-h-[186px] rounded-[16px] bg-po-cyan-1">
                  <p className="mb-[18px] line-clamp-5 flex max-h-[130px] px-[20px] pt-[20px] text-text-3 text-po-cyan-2">
                    {item.summary}
                  </p>
                  <div className="absolute bottom-[20px] w-full px-[20px]">
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-[3px]">
                        <Image
                          src="/icon/aiIcon.svg"
                          alt="AI 아이콘"
                          width={12}
                          height={12}
                        />
                        <p className="mt-[2px] text-caption text-po-cyan-2">
                          AI의 정책 내용 요약
                        </p>
                      </div>
                      <TooltipModal />
                    </div>
                  </div>
                </div>
                {/* 선행 슬래시가 없어 /policy 에서 누르면 /policy/policy/... 로 이동했다. */}
                <Link
                  href={`/policy/details/${item.id}`}
                  className="mt-[10px] flex h-[48px] items-center justify-center rounded-[16px] border-[1px] border-po-gray-300 bg-[#CDCED614] text-text-4 text-po-gray-600 duration-500 hover:bg-po-cyan-1 hover:text-po-cyan-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-po-cyan-2"
                >
                  상세 보기
                </Link>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
