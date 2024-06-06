"use client";

import { faker } from "@faker-js/faker";
import { Tooltip } from "@radix-ui/react-tooltip";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function PolicySwiper(res?: any) {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(1);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  const datas: any[] = res.policyCards;

  const Temp = [
    {
      image: faker.image.urlLoremFlickr(),
    },
    {
      image: faker.image.urlLoremFlickr(),
    },
    {
      image: faker.image.urlLoremFlickr(),
    },
    {
      image: faker.image.urlLoremFlickr(),
    },
    {
      image: faker.image.urlLoremFlickr(),
    },
    {
      image: faker.image.urlLoremFlickr(),
    },
    {
      image: faker.image.urlLoremFlickr(),
    },
    {
      image: faker.image.urlLoremFlickr(),
    },
  ];
  return (
    <Swiper
      effect="cards"
      onSlideChange={handleSlideChange}
      grabCursor={true}
      initialSlide={1}
      modules={[EffectCards]}
      centeredSlides={false}
      loop={true}
    >
      {datas?.map((item: any, index: any) => {
        const targetColor = activeIndex === index ? "bg-white" : "bg-white";

        return (
          <SwiperSlide key={index} className="pt-[50px]">
            <div className="relative flex w-full justify-center overflow-visible px-10 pb-[43px]">
              <div
                className={`min-h-[446px] w-full rounded-3xl ${targetColor} px-8 pb-[42px] pt-[24px] shadow-[0_16px_32px_rgba(0,0,0,0.2)] duration-700`}
              >
                <div className="flex flex-col justify-center">
                  <div className="text-number-3 mb-[22px] mt-[10px] flex h-[18px] justify-center">
                    {item.index}
                  </div>
                  <h5 className="mb-[4px] line-clamp-1 text-center text-text-4">
                    {item.name}
                  </h5>
                  <h3 className="mb-[18px] line-clamp-2 text-center text-title-2">
                    {item.title}
                  </h3>
                </div>
                <div className="relative min-h-[186px] rounded-[16px] bg-po-cyan-1 p-[20px]">
                  <p className="mb-[18px] line-clamp-5 flex text-text-3 text-po-cyan-2">
                    청년들의 다양한 요구와 필요에 부응하기 위해 설계되었습니다.
                    이를 활용하여 제주의 청년들에게 경제적 지원과 기술을 습득할
                    수 있기를 기대중입니다.
                  </p>
                  <div className="flex items-center justify-between">
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
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Image
                            className="cursor-help"
                            src="/icon/helpIcon.svg"
                            alt="도움말 아이콘"
                            width={18}
                            height={18}
                          />
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                          <Image
                            className="absolute right-0 top-0 z-50 animate-fadeIn"
                            src="/images/tooltip-triangle.svg"
                            alt="툴팁"
                            width={80}
                            height={6}
                          />
                          <p className="text-center text-[12px] font-extralight leading-[18px] tracking-[-0.1px] text-[#F0F0F5]">
                            현재 ChatGPT가 처리할 수 있는 범위 내에서 정책의
                            주요 내용을 요약했습니다.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                <div
                  className="mt-[10px] flex h-[48px] cursor-pointer items-center justify-center rounded-[16px] border-[1px] border-po-gray-300 bg-[#CDCED614] text-text-4 text-po-gray-600 duration-500 hover:bg-po-cyan-1 hover:text-po-cyan-2"
                  onClick={() => router.push(`policy/details/${item.id}`)}
                >
                  상세 보기
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
